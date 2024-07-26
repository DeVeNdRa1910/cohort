
import {  evenOddSelector } from "../store/atoms/count";
import {  useRecoilValue } from "recoil";

function EvenOdd() {

  ////A selector represents a piece of derived state. Derived state is a transformation of state. You can think of derived state as the output of passing state to a pure function that modifies the given state in some way: it like as useMemo


  let isEven = useRecoilValue(evenOddSelector)

  return (
    <>
      {isEven ? <h2>It is Even</h2> : <h2>It is Odd</h2>}
    </>
  )
}

export default EvenOdd
