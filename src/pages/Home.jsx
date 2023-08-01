import React from 'react'
import { ReactComponent as Logo } from '../asserts/d-logo-white.svg'
import "./styles/Homecss.css"

export default function Home() {
  return (
    <>
        <a href='https://deva.asia' className='pt-4 pl-4 lg: lg:absolute flex flex-col lg:flex-row items-end justify-center items-center' title='deva.asia'>
            <div className='w-10'>
                <Logo/>
            </div>
            
            <span className=' hidden lg:block italic font-bold text-white'>Deva.asia</span>
        </a>

        <main className={`lg:flex `}>

          <div className='lg:w-[50%] lg:h-screen lg:flex flex-col justify-center	items-center '>
            <p className='text-center text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-white'>Welcome To Deva.asia</p>
            <p className='hidden lg:block text-center lg:text-sm xl:text-xl italic font-bold text-white'>Do it until your expectation gets satisfied</p>
          </div>

          <div className=' mt-10 lg:w-[50%] lg:flex flex-col justify-center items-center'>
            <div className='w-[90%] lg:w-[80%] mx-auto text-center text-2xl font-bold p-3 rounded-t-lg  border-t-2 border-l-2 border-r-2 backdrop-blur-sm bg-white/25 text-white'>Login Form</div>
            <form className='w-[90%] lg:w-[80%] rounded-b-lg p-5 mx-auto border-b-2 border-l-2 border-r-2 backdrop-blur-sm bg-white/25'>
              
              <div className='w-full relative '>
                <input type="text" id='email' name='email' className='p-2 w-full outline-none input-box rounded border-4 border-white ' required/>
                <span className='absolute pointer-events-none	top-3 left-4 transition-all rounded text-gray-500'>Email ID</span>
                <p className='mt-1 mb-2 text-right mr-2 text-sm text-red-500 font-semibold invisible'>*invalid email</p>
              </div>

              <div className='w-full relative '>
                <input type="password" className='p-2 w-full outline-none input-box rounded border-4 border-white ' required/>
                <span className='absolute pointer-events-none	top-3 left-4 transition-all rounded text-gray-500'>Password</span>
                <p className='mt-1 text-right mr-2 text-sm text-red-500  font-semibold invisible'>*invalid password</p>
              </div>

              <div className='mb-4 text-right italic '>
                <a href='/#' className=''>forget password?</a>
              </div>

              <button type='submit' className=' bg-gradient-to-r from-indigo-500 to-pink-500 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600  w-full p-2 rounded text-xl font-bold text-white'>Login</button>

              <div className=' mt-4 w-full h-0.5 bg-white rounded'></div>
              
              <div className='mt-4 mx-auto bg-red-500 hover:bg-red-700 w-[80%] p-2 rounded text-xl font-bold text-white text-center hover:cursor-pointer'>Login with google</div>
            </form>
            
            <a href='/#'  className='w-[90%] lg:w-[80%] mt-2 mx-auto p-4 border-2 rounded-lg block underline text-center backdrop-blur-sm bg-white/25 hover:bg-white/50 '>Create an account</a>
          </div>
        </main>
        
    </>
  )
}
