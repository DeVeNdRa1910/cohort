import './App.css'
import { TODOS } from './todos'
import { todosAtomFamily } from './atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useEffect } from 'react'

// when you have create atom dynamically for every element in array. Dont allow to give array to default of atom. 
// we can do this with the help of atom family

//https://recoiljs.org/docs/api-reference/utils/atomFamily

function App() {

  const updatedTodo = useSetRecoilState(todosAtomFamily(2))

  useEffect(()=>{
    setTimeout(() => {
      updatedTodo({
        id: "2",
        title: " new Todo",
        description: " New todo , and all todo have same instance"
      })
    }, 3000);
  })

  //keval ek hi bar todo create karta hai(atomFamily) kuchh update hota hai to jitni bhi jagah use hua hai(perticular atom) sabhi jagah ek sath update hote hai.

  return (
    <>
      {TODOS.map(item=>(
        <div key={item.id}>
          < Todo id={item.id} />
        </div>
      ))}
      < Todo id={2} />
      < Todo id={2} />
      < Todo id={2} />
      < Todo id={2} />
    </>
  )
}

function Todo({id}){

  // const currentTodo = useRecoilValue(todoAtom(id))
  // that mean -> I want Value of atom whose id is {id} and prensent in atomFamily named as todoAtom.

  const todo = useRecoilValue(todosAtomFamily(id));

  // const todo = TODOS.filter(item => item.id===id)

  return (
    <>
      {todo.title}
      {todo.description}
    </>
  )
}

export default App





