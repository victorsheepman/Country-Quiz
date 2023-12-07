import React from 'react'
import { WinnersIcon } from '../../assets/WinnersIcon'
import { PointProtocol } from '../../interface'

interface CardResultProps extends PointProtocol {
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
}
export const CardResult:React.FC<CardResultProps> = ({setCurrentQuestion, count, setCount}) => {
  const resetGame  = ()=>{
    setCurrentQuestion(0)
    setCount(0)
  }
  return (
    <div className='cardResult'>
      <figure className='cardResult_icon'>
        <WinnersIcon />
      </figure>
      <h1>
        Results
      </h1>   
      <p className='cardResult_subTitle'>You got <strong>{count}</strong> correct answers</p>
      <button className='cardResult_button' onClick={resetGame}>
       Try again
      </button>
    </div>
  )
}
