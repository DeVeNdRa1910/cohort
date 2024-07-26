import React from 'react'
import CountRerender from './CountRerender';
import Buttons from './Buttons';

function Count() {
  //Now it render onec not rerender every time
  console.log("Count rendring");
  return (
    <div>
      <CountRerender />
      <Buttons />
    </div>
  )
}

export default Count
