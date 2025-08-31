
import { useState } from 'react'
import './App.css'
import logo from "./assets/logo.webp"

function App() {

 const [search, setSecarch] =  useState(false)
 const handlerSerch = () => {
  setSecarch(!search);
 }
  return (
    <>
      <header>
        <div className="bg-gray-100 flex items-center justify-end h-[40px] border-b-[2px] border-amber-300">
            <div className="flex gap-4 p-5 justify-between items-center">
              <a className='cursor-pointer text-gray-500 hover:text-gray-950! hover:underline  '>help</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950! hover:underline'>orders and returns</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950! hover:underline'>gift cards</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950! hover:underline'>join</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950! hover:underline'>adClud</a>
            </div>
        </div>
        <div className="h-[60px] bg-white- flex items-center justify-between shadow-lg shadow-gray-600 px-6">
          <i class="bi bi-heart max-md:block  md:hidden text-gray-400 hover:text-gray-900 duration-300 cursor-pointer" ></i>

          <div className="" >
            <img src={logo} alt="" className='w-20' />
          </div>
          <div className=" gap-7  max-md:hidden  md:flex ">
            <div className="bg-transparent flex items-center justify-center h-[60px] border-b-white! border-b-2 hover:border-b-2 hover:border-b-gray-900! cursor-pointer">item</div>
            <div className="bg-transparent flex items-center justify-center h-[60px] border-b-white! border-b-2 hover:border-b-2 hover:border-b-gray-900! cursor-pointer">item</div>
            <div className="bg-transparent flex items-center justify-center h-[60px] border-b-white! border-b-2 hover:border-b-2 hover:border-b-gray-900! cursor-pointer">item</div>
            <div className="bg-transparent flex items-center justify-center h-[60px] border-b-white! border-b-2 hover:border-b-2 hover:border-b-gray-900! cursor-pointer">item</div>
            <div className="bg-transparent flex items-center justify-center h-[60px] border-b-white! border-b-2 hover:border-b-2 hover:border-b-gray-900! cursor-pointer">item</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative flex gap-4">
              <input type="search" placeholder='search' className={search ? 'w-[200px] duration-900 ease-in bg-gray-100 px-3 focus:outline-hidden rounded-md h-[30px]' : 'w-[0px] duration-900 ease-out'}    />
              <i class="bi bi-search text-gray-400 cursor-pointer text-lg  md:right-[100px] max-md:right-[65px] absolute hover:text-gray-900 duration-300"   onClick={handlerSerch}></i>
              <i class="bi bi-person text-gray-400 cursor-pointer text-lg hover:text-gray-900 duration-300"></i>
              <i class="bi bi-handbag text-gray-400 cursor-pointer text-lg hover:text-gray-900 duration-300"></i>
              <i class="bi bi-heart max-md:hidden  md:block text-gray-400 cursor-pointer text-lg hover:text-gray-900 duration-300" ></i>
            </div>
            <div className="">
             
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default App

