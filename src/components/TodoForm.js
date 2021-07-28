import React, { useState, useEffect, useRef } from 'react'
// import { HiPlusCircle } from 'react-icons/hi'

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
            className="bg-black w-80 m-1 rounded border-2 border-purp-dark outline-none"
          />
          <button className="m-1 w-14 border-2 border-purp-dark rounded bg-gradient-to-r from-purp-dark to-purp">Add</button>
        </form>
      </div>
    )
}

export default TodoForm