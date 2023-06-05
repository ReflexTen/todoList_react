import { RiDeleteBin2Line, RiCheckLine, RiFileList2Line } from 'react-icons/ri'
import style from './Todo.module.css'

const Todo = ({ todo, deleteTodo, chekedTodo }) => {
  return (
    <div className={`${style.todo} ${todo.isCompleted ? style.completed : ''}`}>
      <div className={style.text}>
        <RiFileList2Line className={style.listIcon} />
        <div>{todo.text}</div>
      </div>
      <div className={style.icons}>
        <RiDeleteBin2Line
          className={style.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
        <RiCheckLine
          className={style.chekedIcon}
          onClick={() => chekedTodo(todo.id)}
        />
      </div>
    </div>
  )
}

export default Todo
