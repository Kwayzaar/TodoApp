import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]
    
    setTodos(newTodos);
  }

  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
  }
  
  const completeTodo = (id) => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      }) 
      setTodos(updatedTodos)
  }

  return (
    <div className="text-white flex flex-col justify-start items-center w-1/3 h-2/4 bg-auto bg-black rounded-xl">
      <h1 className="mt-4 mb-2 font-medium text-2xl">Write It Down!</h1>
      <TodoForm onSubmit={addTodo} />
      <Todos 
        todos={todos} 
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList
