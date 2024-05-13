import React, { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { countAtom, evenSelector } from '../store/atoms/Count';

function EventCountRender() {
/*     const count = useRecoilValue(countAtom);
  return (
    <div>
        {(count%2 === 0)? "It is Even": ""}
    </div>
  ) */




// this is a good optimization but we can optimize more by using selector
/*   const count = useRecoilValue(countAtom);
  const isEven = useMemo(()=>{
    return count%2===0;
  },[count])

  return(
    <div>
        <h1>{isEven}</h1>
    </div>
  ) */





  //jab bhi calculation  kisi varible per depend ho tab selector ka use karna chahiye

  const count = useRecoilValue(evenSelector);

  return (
    <div>
        {isEven ? "It is Even": ""}
    </div>
  )

}

export default EventCountRender
