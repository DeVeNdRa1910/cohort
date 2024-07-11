import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import copy from 'copy-to-clipboard';

function App() {

  // const [todos, setTodos] = useState([]);
  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //     .then(resp => {
  //       setTodos(resp.data.todos);
  //     })
  // }, [])

  // Now i want a hook that we give api link to it and it will return list of todos

  const serverLink = "https://sum-server.100xdevs.com/todos"
  const todos = useTodos(serverLink);

  return (
    <>
      {
        todos.map(todo => (<div key={todo.id}>
          <Todo todo={todo}/>
        </div>))
      }
    </>
  )
}

//Todo Handler Hook
function useTodos(server){
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get(server)
      .then(resp => {
        setTodos(resp.data.todos);
      })
  }, [])
  return todos
}

function Todo({todo}){
  return (
    <>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <div>{todo.completed ? <h3>completed</h3> : <h3>work to do</h3>}</div>
    </>
  )
}


//Counter Hook
function useCounter(start, step){
  const [count, setCount] = useState(start);
  
  const increament = () => {
    setCount(prev => prev+step)
  }

  const decreament = () => {
    setCount(prev => prev-step)
  }

  return [count, increament, decreament];

}




export default App
