import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id)=>{
    return TODOS.find(todo => todo.id===id);
  }
})

//In place of todo can be anything list Of product(come from API),  

// You cant give array as default bcz if any single element will change then all then component related to this atom also get rerender
