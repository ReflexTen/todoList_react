import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, chekedTodo, completedTodos }) => {
  return (
    <div>
      {todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            chekedTodo={chekedTodo}
          />
        )
      })}
      {completedTodos ? (
        <h3>{`You have completed ${completedTodos} ${
          completedTodos > 1 ? 'todos' : 'todo'
        } !`}</h3>
      ) : (
        ''
      )}
    </div>
  )
}

export default TodoList
