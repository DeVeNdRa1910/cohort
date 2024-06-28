import { countAtom } from '../store/atoms/count'
// import { useRecoilState } from 'recoil'
import { useSetRecoilState } from 'recoil'

function Buttons() {
    
    // this component need value and setter function so we use useRecoilState

    // const [count, setCount] = useRecoilState(countAtom);
    const setCount = useSetRecoilState(countAtom);

  return (
    <>
        <button onClick={()=>setCount(prev => prev+1)}> Increase </button>
        <button onClick={()=>setCount(prev => prev-1)}> Decrease </button>
    </>
  )
}

export default Buttons