import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='flex flex-col w-fit'>
            <header className='text-[#8659BB] bg-[#F6E7F6] text-2xl font-bold text-center p-5'>Welcome to Learnly</header>

            <div className='w-full flex flex-col gap-5 items-center justify-center mt-26' >
                <Link to={'/multiple-choice/1'} className='bg-[#5122A2] hover:bg-[#5140A9] text-[#DCD2EC] w-64 text-center px-5 py-3 rounded-lg cursor-pointer'>Multiple Choice</Link>
                <Link to={'/drag-and-drop'} className='bg-[#36373A] hover:bg-[#46474A] text-white w-64 px-5 py-3 rounded-lg text-center cursor-pointer'>Drag and Drop</Link>
            </div>    
        </div>        
    </div>


  )
}
