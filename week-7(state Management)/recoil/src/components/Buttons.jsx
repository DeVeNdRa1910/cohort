import React from 'react'
import { countAtom } from '../store/atoms/count'
import { useRecoilState } from 'recoil'

function Buttons() {
    
    // this component need value and setter function so we use useRecoilState

    const [count, setCount] = useRecoilState(countAtom);

  return (
    <>
        <button onClick={setCount(count+1)}> Increase </button>
        <button onClick={setCount(count-1)}> Decrease </button>
    </>
  )
}

export default Buttons