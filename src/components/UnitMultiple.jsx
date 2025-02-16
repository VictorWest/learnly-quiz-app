import React, {useRef, useState} from 'react'
import { getAlphabet } from '../utils'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function UnitMultiple({num, question, arr}) {
  const [clickedAnswer, setClickedAnswer] = useState()
  const handleClick = (e) => {
    setClickedAnswer(e)
  }

  return (
    <div className='relative w-full h-screen flex items-center justify-center'>
        <div className=''>
            <div className='bg-[#5122A2] text-[#DCD2EC] p-4 rounded-md space-x-36'> 
                <span>Goal: 30 points</span>
                <span>Current Points: 0</span>
            </div>
            <div className='mt-5 ml-3'>
              <h1 className='font-bold'>Question {num}</h1>
              <p className='text-sm'>{question}</p>
            </div>
            <ol className='flex flex-col'>
              {arr.map((item, index) => {
                return <li 
                onClick={() => handleClick(item)} 
                className={`${clickedAnswer == item ? `bg-green-400`:`bg-white`} w-full h-14 rounded-lg shadow-2xl mt-2 pl-5 flex items-center border border-stone-100 text-sm font-light cursor-pointer`}>
                  {`${getAlphabet(index)}. ${item}`}
                </li>
              })}
            </ol>
        </div>
        <div className='absolute bottom-5 flex justify-center gap-24'>
          <Link to={num !== 1 && `/multiple-choice/${num-1}`} className={`bg-[#5122A2] px-5 py-2 text-[#DCC4D9] flex items-center gap-2 ${num == 1 && 'opacity-50'} cursor-pointer`}><span className='text-white'><FaArrowAltCircleLeft/></span>Previous</Link>
          <Link to={num !== 5 && `/multiple-choice/${num+1}`} className={`bg-[#5122A2] px-5 py-2 text-[#DCC4D9] flex items-center gap-2 ${num == 5 && 'opacity-50'} cursor-pointer`}>Next<span className='text-white'><FaArrowAltCircleRight/></span></Link>
        </div>
    </div>
  )
}
