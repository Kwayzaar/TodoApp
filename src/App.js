import React, { useState } from 'react'
import './App.css';
import Todos from './components/Todos'
import TodoCard from './components/TodoCard'

function App() {
  const [todos, setTodos] = useState([
    {id:1, content: 'make todo'},
    {id:2, content: 'then make another todo'}
  ])

  const deleteTodo = (id) => {
    let todos = todos.filter(todo => {
      return todo.id !== id
    });
    setTodos({todos})
  }

  return (
    <div>
      <h1>Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App;
