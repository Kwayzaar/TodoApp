import React, { useState } from 'react'

function TodoForm({addTodo}) {
  const [content, setContent] = useState("")

  const handleChange = (e) => {
    setContent({content: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({content})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  )
}

export default TodoForm