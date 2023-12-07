import React, { useCallback, useEffect, useState }  from 'react'

import { OptionButton } from '../OptionButton/OptionButton'
import { Question } from '../../interface'

interface CardQuizProps{
  currentQuestion: number,
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
  questionsList:Array<Question>,
  getAnswer: (item: string) => 1 | 2,
  setCount:React.Dispatch<React.SetStateAction<number>>
  count:number
}

export const CardQuiz:React.FC<CardQuizProps> = ({currentQuestion, setCurrentQuestion, questionsList, getAnswer, setCount, count}) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [isTrue, setIsTrue] = useState<1 | 2>(1)
  const getCurrentStatusButton = useCallback(
    (letter:string) => {
      if (isDisabled) {     
       return letter === questionsList[currentQuestion].answer ? 1: 0
      }else{
        return 0
      }
    },
    [currentQuestion, isDisabled, questionsList],
  )

  const reset = ()=>{
    setIsDisabled(false);
  }

  const handlerNext = ()=>{
    const end = 4   
    if (isTrue === 2) {
      setCurrentQuestion(4)
    }else if ((currentQuestion + 1) == questionsList.length){ 
      setCurrentQuestion(end)
     }else{
      setCurrentQuestion(currentQuestion+1)
    }
  }

  useEffect(() => {
    reset()
  }, [currentQuestion])
  
  return (
      <div className={isDisabled ? 'cardQuiz--lg': 'cardQuiz'}>
          <h3 className='h3_bold' style={{marginBottom:'32px'}}>{questionsList[currentQuestion].question}</h3>
          {
            questionsList[currentQuestion].options.map(
              (item, index)=>(
                <OptionButton  
                  key={index} 
                  getAnswer={getAnswer} 
                  currentStatus={getCurrentStatusButton(item.letter)} 
                  isDisabled={isDisabled} 
                  setIsDisabled={setIsDisabled}  
                  letter={item.letter} 
                  title={item.title} 
                  setTrue={setIsTrue}
                  setCount={setCount}
                  count={count}
                />
              )
            )
          }
          {
            isDisabled ?           
            <section className='cardQuiz_wrapper'>
              <button className='cardQuiz_buttonNext' onClick={handlerNext}>
                Next
              </button>
            </section>
            :null
          }
      </div>
    )
}