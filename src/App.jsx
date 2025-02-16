import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css'
import Multiple from './components/Multiple'
import DragAndDrop from './components/DragAndDrop'
export default function App() {
  return (
    <div className='poppins-regular app-container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/multiple-choice/:id' element={<Multiple/>}/>
          <Route path='/drag-and-drop' element={<DragAndDrop/>}/>
        </Routes>
        
      </Router>      
    </div>

    
  )
}
