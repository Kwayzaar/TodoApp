import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { HiOutlineXCircle } from 'react-icons/hi'
import { HiPencilAlt } from 'react-icons/hi'




function Todos({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null, 
    value: ""
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div 
      className="flex"
      // {todo.isComplete ? "todo-row complete" : "todo-row"} 
      key={index}
      
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <button classname=""onClick={() => removeTodo(todo.id)}><HiOutlineXCircle className="h-4 m-px mt-1" /></button>
        <button onClick={() => setEdit({ id: todo.id, value: todo.text})}><HiPencilAlt className="h-4 m-px mt-1"/></button>
      </div>
    </div>

  ))
}

export default Todos

