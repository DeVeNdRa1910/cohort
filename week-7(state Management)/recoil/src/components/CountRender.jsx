import React from 'react'
import { useRecoilValue } from 'recoil';
import { countAtom } from '../store/atoms/count';

function CountRender() {
    // it will need only value of count so here we use useRecoilValue
    const count = useRecoilValue(countAtom);
  return (
    <strong>{count}</strong>
  )
}

export default CountRender