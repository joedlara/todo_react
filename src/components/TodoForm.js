import { useState } from "react"

const TodoForm = ({ onSubmit, edit }) => {
  const [todo, setTodo] = useState("")

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      value: todo,
      completed: false,
    })
    setTodo("")
  }

  return (
    <div className="todo-form">
      {edit ? (
        <>
          <input
            placeholder="Update your item"
            value={todo}
            onChange={handleChange}
            name="text"
            className="todo-input edit"
          />
          {todo === "" || /^\s*$/.test(todo) ? (
            <button className="add-button edit disabled" disabled={true}>
              Update
            </button>
          ) : (
            <button onClick={handleSubmit} className="add-button edit">
              Update
            </button>
          )}
        </>
      ) : (
        <>
          <input
            className="todo-input"
            placeholder="Add a todo"
            type="text"
            onChange={handleChange}
            value={todo}
          />
          {todo === "" || /^\s*$/.test(todo) ? (
            <button className="add-button disabled" disabled={true}>
              Add
            </button>
          ) : (
            <button onClick={handleSubmit} className="add-button">
              Add
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default TodoForm
