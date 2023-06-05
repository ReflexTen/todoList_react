import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from './UI/Button'
import style from './TodoForm.module.css'

const TodoForm = ({ addTodos }) => {
  const [text, setText] = useState('')

  const changeValue = e => {
    setText(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    if (text) {
      addTodos(text, uuidv4())
    }
    setText('')
  }

  return (
    <form onSubmit={submitForm}>
      <input
        className={style.input}
        type="text"
        value={text}
        onChange={changeValue}
        placeholder="Enter new todo"
      ></input>
      <Button title="New todo" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default TodoForm
