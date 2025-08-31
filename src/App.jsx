
import { useState } from 'react'
import './App.css'
import logo from "./assets/logo.webp"

function App() {

 const [search, setSecarch] =  useState(false)
  return (
    <>
      <header>
        <div className="bg-gray-100 flex items-center justify-end h-[40px] border-b-[2px] border-amber-300">
            <div className="flex gap-4 p-5 justify-between items-center">
              <a className='cursor-pointer text-gray-500 hover:text-gray-950 hover:underline  '>help</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950 hover:underline'>orders and returns</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950 hover:underline'>gift cards</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950 hover:underline'>join</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950 hover:underline'>adClud</a>
            </div>
        </div>
        <div className="h-[60px] bg-gray-300 flex items-center justify-around">
          <div className="  " >
            <img src={logo} alt="" className='w-20' />
          </div>
          <div className="flex gap-7  ">
            <div className="bg-transparent flex items-center justify-center h-[60px] border-b-transparent border-b-2 hover:border-b-2 hover:border-b-gray-900 cursor-pointer">item</div>
            <div className="bg-transparent flex items-center justify-center h-[60px] border-b-transparent border-b-2 hover:border-b-2 hover:border-b-gray-900 cursor-pointer">item</div>
            <div className="bg-transparent flex items-center justify-center h-[60px] border-b-transparent border-b-2 hover:border-b-2 hover:border-b-gray-900 cursor-pointer">item</div>
            <div className="bg-transparent flex items-center justify-center h-[60px] border-b-transparent border-b-2 hover:border-b-2 hover:border-b-gray-900 cursor-pointer">item</div>
            <div className="bg-transparent flex items-center justify-center h-[60px] border-b-transparent border-b-2 hover:border-b-2 hover:border-b-gray-900 cursor-pointer">item</div>
          </div>
          <div className="">
            <div className="bg-amber-300">
              <input type="search" />
              <i class="bi bi-search"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
