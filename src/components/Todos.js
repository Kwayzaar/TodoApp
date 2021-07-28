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
      className="m-0.5 flex border-red-syn border-2 rounded bg-gradient-to-r from-red-syn to-orange-syn"
      // {todo.isComplete ? "todo-row complete" : "todo-row"} 
      key={index}
      
    >
      <div className="m-1 mr-4 w-80 justify-self-start" key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="w-12">
        <button classname="m-1"onClick={() => removeTodo(todo.id)}><HiOutlineXCircle className="h-4 m-px mt-1" /></button>
        <button className="m-1" onClick={() => setEdit({ id: todo.id, value: todo.text})}><HiPencilAlt className="h-4 m-px mt-1"/></button>
      </div>
    </div>

  ))
}

export default Todos

