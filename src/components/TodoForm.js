import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [value, setValue] = useState("");

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })
  
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
            ref={inputRef}
            type="text" 
            placeholder="add Todo"
            className="text-black"
          />
          <button>Add Todo</button>
        </form>
      </div>
    )
}


export default TodoForm