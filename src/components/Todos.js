import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { BeakerIcon } from '@heroicons/react/solid'

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
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div 
      className={todo.isComplete ? "todo-row complete" : 'todo-row'} 
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <button classname=""onClick={() => removeTodo(todo.id)}>done</button>
        <button onClick={() => setEdit({ id: todo.id, value: todo.text})}>edit</button>
      </div>

    </div>

  ))
}

export default Todos

