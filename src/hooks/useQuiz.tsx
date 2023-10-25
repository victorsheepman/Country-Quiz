import { useState } from "react"

export const useQuiz = () => {
const [currentQuestion, setCurrentQuestion] = useState<number>(0)

  const questionsList = [ 
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
    }
  ]
  const getAnswer = (item:string)=>{
    const answer = questionsList[currentQuestion].answer === item ? 1 : 2
    
    return answer
  }

  
return {
    questionsList,
    currentQuestion,
    setCurrentQuestion,
    getAnswer
}
}
