import { useState } from "react"

import Todo from "./Todo"
import TodoForm from "./TodoForm"

const TodoList = (props) => {
  const [todoList, setTodoList] = useState([])

  const addTodo = (todos) => {
    setTodoList([todos, ...todoList])
  }

  const removeTodo = (id) => {
    setTodoList([...todoList].filter((todo) => todo.id !== id))
  }

  const completeTodo = (id) => {
    const completed = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
    )

    setTodoList(completed)
  }

  const editTodo = (todoId, newValue) => {
    const updated = todoList.map((todo) =>
      todo.id === todoId ? newValue : todo
    )
    setTodoList(updated)
  }

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todoList={todoList}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
      />
    </>
  )
}

export default TodoList
