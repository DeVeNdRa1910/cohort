import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

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
  
  const {todos, loading} = useTodos(serverLink, 10);
  // we want to refresh todo list in every n second


  return (
    <>
      { loading ? <h1>Loading... </h1> :
        todos.map(todo => (<div key={todo.id}>
          <Todo todo={todo}/>
        </div>))
      }
    </>
  )
}

//Todo Handler Hook
function useTodos(server, n){
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const value = setInterval(() => {
      axios.get(server)
      .then(resp => {
        setTodos(resp.data.todos);
        setLoading(false)
      })
    }, n*1000);

    //yadi n seconds tak kuchh nahi hua to ek bar to run hohi jayga 
    axios.get(server)
      .then(resp => {
        setTodos(resp.data.todos);
        setLoading(false)
      })

    // here we return cleanup function to stop the previous intervel
    return ()=>{
      clearInterval(value);
    }
  }, [n])
  return {todos, loading}
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

  return {count, increament, decreament};

}




export default App
