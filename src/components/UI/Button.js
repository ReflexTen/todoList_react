import style from './Button.module.css'

const Button = ({ children, onClick, title, type, disabled }) => {
  return (
    <button
      className={style.button}
      onClick={onClick}
      type={type}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
