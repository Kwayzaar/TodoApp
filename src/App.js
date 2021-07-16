import './App.css';
import Todos from './components/Todos'
import TodoCard from './components/TodoCard'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Todos />
      <TodoCard />
    </div>
  )
}

export default App;
