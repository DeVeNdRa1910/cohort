import { useState } from 'react'
import './App.css'
import { todoAtomFamily } from './atoms'
import { useRecoilState } from 'recoil'

function App() {

  return (
    <>
      <Todo id={1}/>
      <Todo id={2}/>
    </>
  )
}

function Todo({id}){
  const [todo, setTodo] = useRecoilState(todoAtomFamily(id))

  return (
    <>
      {todo.title}
      {todo.description}
    </>
  )
}

export default App
