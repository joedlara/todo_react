import { useState } from "react"
import TodoForm from "./TodoForm"

const Todo = ({ todoList, removeTodo, completeTodo, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  })

  const submitEditHandler = (value) => {
    editTodo(edit.id, value)
    setEdit({
      id: null,
      value: "",
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEditHandler} />
  }

  return todoList.map((task, index) => (
    <div
      key={index}
      className={task.completed ? "todo-row complete" : "todo-row"}
    >
      <div key={task.id} onClick={() => completeTodo(task.id)}>
        <p>{task.value}</p>
      </div>
      <div>
        <button
          className="edit-button"
          onClick={() => setEdit({ id: task.id, value: task.value })}
        >
          Edit
        </button>
        <button className="delete-button" onClick={() => removeTodo(task.id)}>
          Delete
        </button>
      </div>
    </div>
  ))
}

export default Todo
