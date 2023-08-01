import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'

export default function App() {
  return (
    <>
      <div className='min-w-[20rem] lg:max-w-screen-2xl lg:m-auto w-full h-screen bg-gradient-to-br from-pink-500 to-indigo-500 ' >
        <BrowserRouter>
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/signup' Component={Signup} />
            <Route path='*' Component={Home} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}