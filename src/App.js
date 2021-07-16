import './App.css';
import './components/Todos'
import './components/TodoCard'
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
