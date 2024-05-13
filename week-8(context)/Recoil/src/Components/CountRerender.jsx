import React from 'react'
import { useRecoilValue } from 'recoil'
import { countAtom } from '../store/atoms/Count'

function CountRerender() {
    const count = useRecoilValue(countAtom)
    return (
      <div>
        <b>
          {count}
        </b>
      </div>
    )
}

export default CountRerender
