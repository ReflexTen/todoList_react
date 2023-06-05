import { useState } from 'react'
import Buttons from './components/Buttons'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const completedTodos = todos.filter(todo => {
    if (todo.isCompleted) {
      return todo
    }
  })

  const addTodosHandler = (text, id) => {
    setTodos([
      ...todos,
      {
        text,
        id,
        isCompleted: false,
      },
    ])
  }

  const deleteTodoHandler = index => {
    setTodos(todos.filter(el => el.id !== index))
  }

  const chekedTodoHandler = index => {
    setTodos(
      todos.map(el => {
        if (el.id === index) {
          el.isCompleted = !el.isCompleted
        }
        return el
      })
    )
  }

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter(el => el.isCompleted === false))
  }

  const clearAllTodosHandler = () => {
    setTodos([])
  }

  console.log(todos)
  console.log(completedTodos)
  console.log(!!completedTodos.length)

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodos={addTodosHandler} />

      {todos.length === 0 ? (
        <h2>Todo list is empty</h2>
      ) : (
        <>
          <Buttons
            clearCompletedTodos={clearCompletedTodosHandler}
            clearAllTodos={clearAllTodosHandler}
            completedTodos={!!completedTodos.length}
          />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodoHandler}
            chekedTodo={chekedTodoHandler}
            completedTodos={completedTodos.length}
          />
        </>
      )}
    </div>
  )
}

export default App
