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

<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


export default TodoForm