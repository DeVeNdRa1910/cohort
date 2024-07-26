import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { countAtom } from '../store/atoms/Count'
import EventCountRender from './EventCountRender';

function Buttons() {

    // render every time when ever we click on button
    /* const [count, setCount] = useRecoilState(countAtom);
    console.log("Buttons Rendering " , count);
    return (
      <div>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
      </div>
    ) */


    //To make it more performance we can see here we realy do not nee of count
    // this render only onece
    console.log("Button rendering");
    const setCount = useSetRecoilState(countAtom)
    return (
        <div>
            <button onClick={()=>{setCount(prev => prev+1)}}>Increase</button>
            <button onClick={()=>{setCount(prev => prev-1)}}>Decrease</button>
            <EventCountRender />
        </div>
    )
    

}

export default Buttons
