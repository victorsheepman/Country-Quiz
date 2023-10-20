import React from 'react'


export const CardQuiz = () => {
 // const [currentQuestion, setCurrentQuestion] = useState<string>()
  const items = [
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
  /*
  to custom hook
  const question=[
    {
      question:'Kuala Lumpur is the capital of',
      answer:'A'
    }
  ]
 */

  return (
    <div className='cardQuiz'>
        <h3 className='h3_bold' style={{marginBottom:'32px'}}>Kuala Lumpur is the capital of</h3>
        {
          items.map((item, index)=>(
            <OptionButton key={index} letter={item.letter} title={item.title} />
          ))
        }
    </div>
  )
}



export const OptionButton = ({letter, title}:{letter:string, title:string}) => {
  return (
    <button className='optionButton'>
      <span className='letter'>
        {letter}
      </span>
      <span className='optionButton_title'>
        {title}
      </span>
    </button>
  )
}
