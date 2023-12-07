import React, { useState } from 'react'
import { CardQuiz } from '../components/CardQuiz/CardQuiz'
import { Question } from '../interface'
import { CardResult } from '../components/CardResult/CardResult'

export const QuizManager = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const questionsList:Array<Question> = [ 
    {
        question:'Kuala Lumpur is the capital of',
        answer:'A',
        options:[
            {
                letter:'A',
                title:'Vietnam'
            },
            {
                letter:'B',
                title:'Malaysia'
            },
            {
                letter:'C',
                title:'Sweden'
            },
            {
                letter:'D',
                title:'Austria'
            }
        ]
    },
    {
        question:'Which country does this flag belong to?',
        answer:'B',
        options:[
            {
                letter:'A',
                title:'Vietnam'
            },
            {
                letter:'B',
                title:'Finland'
            },
            {
                letter:'C',
                title:'Sweden'
            },
            {
                letter:'D',
                title:'Austria'
            }
        ]
    }
  ]
  
  const getAnswer = (item:string)=>{
    const answer = questionsList[currentQuestion].answer === item ? 1 : 2

    return answer
  }
  return (
    <main className="layout">
    <div className="wrapperTitle">
      <h1 className="h2_bold">Country quiz</h1>
      {
        currentQuestion === 4 ? 
        <CardResult />:
        <CardQuiz 
            getAnswer={getAnswer} 
            currentQuestion={currentQuestion} 
            setCurrentQuestion={setCurrentQuestion} 
            questionsList={questionsList} 
        />
      }
        
    </div>
  </main>
  )
}
