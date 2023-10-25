import React, { useEffect, useState } from "react"
import { useQuiz } from "../../hooks/useQuiz"

interface OptionButtonProps{
    letter:string, 
    title:string,
    isDisabled:boolean,
    setIsDisabled:React.Dispatch<React.SetStateAction<boolean>>
    statusNumber:number
  }
export const OptionButton:React.FC<OptionButtonProps> = ({letter, title, isDisabled, setIsDisabled, statusNumber }) => { 
    const {getAnswer} = useQuiz()
    const [status, setStatus] = useState(statusNumber)
    useEffect(() => {
      setStatus(statusNumber)
    }, [statusNumber])
  
    const handler = (item:string)=>{
      const newState = getAnswer(item)
      setStatus(newState)
      setIsDisabled(true)
    }
    switch (status) {
      case 0:
              return (
        <button disabled={isDisabled} className='optionButton' onClick={()=>handler(letter)}>
          <span className='letter'>
            {letter}
          </span>
          <span className='optionButton_title'>
            {title}
          </span>
        </button>
      )
        break;
      case 1:
        return(
          <button disabled={isDisabled} className='optionButton--success'>
          <span className='letter'>
            {letter}
          </span>
          <span className='optionButton_title'>
            {title}
          </span>
          <figure>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" fill='white'/></svg>
          </figure>
        </button>
        )
    
      case 2:
          return(
            <button disabled={isDisabled} className='optionButton--error'>
            <span className='letter'>
              {letter}
            </span>
            <span className='optionButton_title'>
              {title}
            </span>
            <figure>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" fill='white'/></svg>
            </figure>
          </button>
          )
      
      default:
        break;
    }
  
}
  