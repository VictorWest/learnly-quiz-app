import React, {useState} from 'react'
import UnitMultiple from './UnitMultiple'
import { questionsAndAnswers } from '../utils'
import { useLocation } from 'react-router-dom'

export default function Multiple() {
  const [questions, setQuestions] = useState(questionsAndAnswers)
  const location = useLocation()
  const pathNo = location.pathname[17]
  
  const filteredQuestions = questions.filter((item, index) => {
    return item.Category === parseInt(pathNo, 10);
  });
  console.log(filteredQuestions);

  return (
<div>
      {filteredQuestions.map((item, index) => {
        return (
          <UnitMultiple
            key={index} 
            num={item.Category}
            question={item.Question}
            arr={item.Options}
          />
        );
      })}
    </div>
  )
}