import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(resp => {
        setTodos(resp.data.todos)
      })
  }, [])
  

  return (
    <>
      {
        todos.map(todo => (
          <Todo key={todo.id} title={todo.title} description={todo.description} />
        ))
      }
    </>
  )
}

function Todo({title, description}){
  return (
    <>
      <h1>{title}</h1>
      {description}
    </>
  )
}

export default App
