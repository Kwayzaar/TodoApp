import React, { useState } from 'react'
import './App.css';
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {id:1, content: 'make todo'},
    {id:2, content: 'then make another todo'}
  ])

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    }
  
  const addTodo = (todo) => {
    todo.id = Math.random();
    setTodos({...todos, todo})
  }

  return (
    <div>
      <h1>Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  )
  }

export default App;
