import React, { useCallback, useEffect, useState }  from 'react'

import { OptionButton } from '../OptionButton/OptionButton'
import { Question } from '../../interface'

interface CardQuizProps{
  currentQuestion: number,
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
  questionsList:Array<Question>,
  getAnswer: (item: string) => 1 | 2

}

export const CardQuiz:React.FC<CardQuizProps> = ({currentQuestion, setCurrentQuestion, questionsList, getAnswer}) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
 
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
                />
              )
            )
          }
          {
            isDisabled ?           
            <section className='cardQuiz_wrapper'>
              <button className='cardQuiz_buttonNext' onClick={()=>setCurrentQuestion(currentQuestion+1)}>
                Next
              </button>
            </section>
            :null
          }
      </div>
    )
}