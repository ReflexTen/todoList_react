import Button from './UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

const Buttons = ({ clearCompletedTodos, clearAllTodos, completedTodos }) => {
  return (
    <div>
      <Button
        onClick={clearCompletedTodos}
        title="Clear completed Todos"
        type="button"
        disabled={!completedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
      <Button
        onClick={clearAllTodos}
        title="Clear list Todos"
        type="button"
        disabled={false}
      >
        <RiRefreshLine />
      </Button>
    </div>
  )
}

export default Buttons
