import './App.css'
import { TODOS } from './todos'

function App() {
  

  return (
    <>
      {TODOS.map(item=>(
        <div key={item.id}>
          < Todo id={item.id} />
        </div>
      ))}
    </>
  )
}

function Todo({id}){

  const todo = TODOS.filter(item => item.id===id)

  return (
    <>
      {todo.title}
      {todo.description}
    </>
  )
}

export default App





