import { useState } from 'react'
import { CardQuiz } from '../components/CardQuiz/CardQuiz'

import { CardResult } from '../components/CardResult/CardResult'


export const QuizManager = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
  return (
    <main className="layout">
    <div className="wrapperTitle">
      <h1 className="h2_bold">Country quiz</h1>
      {
        currentQuestion === 4 ? 
        <CardResult setCount={setCount} count={count} setCurrentQuestion={setCurrentQuestion} />:
        <CardQuiz 
            currentQuestion={currentQuestion} 
            setCurrentQuestion={setCurrentQuestion} 
            count={count}
            setCount={setCount}
        />
      }
        
    </div>
  </main>
  )
}
