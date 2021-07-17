import React, { useState } from 'react'

function TodoForm(props) {
  const [value, setValue] = useState("");
  
    const handleChange = (e) => {
      setValue(e.target.value)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: value
      })

      setValue("")

    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label></label>
          <input 
            value={value} 
            onChange={handleChange} 
            type="text" 
            placeholder="add Todo"
          />
          <button>Add Todo</button>
        </form>
      </div>
    )
}


export default TodoForm