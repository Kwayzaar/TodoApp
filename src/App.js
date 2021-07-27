import React from 'react'
import './App.css';
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-purp-dark to-purp flex justify-center items-center">
      <TodoList />
    </div>
  )
  }

export default App;
