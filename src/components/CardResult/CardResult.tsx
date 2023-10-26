import React, { useState } from 'react'
import { WinnersIcon } from '../../assets/WinnersIcon'

export const CardResult = () => {
  const [point, setPoint] = useState(4)
  return (
    <div className='cardResult'>
      <figure className='cardResult_icon'>
        <WinnersIcon />
      </figure>
      <h1>
        Results
      </h1>   
      <p className='cardResult_subTitle'>You got <strong>{point}</strong> correct answers</p>
      <button className='cardResult_button'>
       Try again
      </button>
    </div>
  )
}
