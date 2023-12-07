import React from 'react'
import { WinnersIcon } from '../../assets/WinnersIcon'

interface CardResultProps {
  point:number
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
}
export const CardResult:React.FC<CardResultProps> = ({point, setCurrentQuestion}) => {
  return (
    <div className='cardResult'>
      <figure className='cardResult_icon'>
        <WinnersIcon />
      </figure>
      <h1>
        Results
      </h1>   
      <p className='cardResult_subTitle'>You got <strong>{point}</strong> correct answers</p>
      <button className='cardResult_button' onClick={()=>setCurrentQuestion(0)}>
       Try again
      </button>
    </div>
  )
}
