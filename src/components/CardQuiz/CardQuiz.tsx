import React, { useCallback, useEffect, useState }  from 'react'
import { useQuiz } from '../../hooks/useQuiz'
import { OptionButton } from '../OptionButton/OptionButton'


export const CardQuiz = () => {
  const {questionsList, currentQuestion, setCurrentQuestion} = useQuiz()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
 
  const statusCumputed = useCallback(
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
            questionsList[currentQuestion].options.map((item, index)=>(
              <OptionButton statusNumber={statusCumputed(item.letter)} isDisabled={isDisabled} setIsDisabled={setIsDisabled}  key={index} letter={item.letter} title={item.title} />
            ))
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