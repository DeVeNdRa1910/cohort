import './App.css'
import { RecoilRoot } from 'recoil'
// import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
// import { countAtom } from './store/atoms/Count'
import Count from './Components/Count'

function App() {

  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

// function Count(){
//   //Now it render onec not rerender every time
//   console.log("Count rendring");
//   return (
//     <div>
//       <CountRendrer />
//       <Buttons />
//     </div>
//   )
// }

// function CountRendrer() {
//   const count = useRecoilValue(countAtom)
//   return (
//     <div>
//       <b>
//         {count}
//       </b>
//     </div>
//   )
// }

// function Buttons(){
//   const [count, setCount] = useRecoilState(countAtom);
//   return (
//     <div>
//       <button onClick={()=>{setCount(count+1)}}>Increase</button>
//       <button onClick={()=>{setCount(count-1)}}>Decrease</button>
//     </div>
//   )
// }


export default App
