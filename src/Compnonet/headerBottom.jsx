import logo from "../assets/logo.webp";
import { createContext, useEffect, useState } from 'react';





const  HeaderBottom = () => {
 
    const [search, setSecarch] =  useState(false);
    const [navbar, setNavbar] = useState(false);
    const [moveNavbar, setMoveNavbar] =  useState(false)
   
    
    

    const handerResize = () =>{
        setNavbar(window.innerWidth <= 768 ? true : false);
        setSecarch(false)
        setMoveNavbar(false)

    }
    window.addEventListener('resize',handerResize )
    useEffect(() => {
        handerResize()
    }, [])

    const handlerSerch = () => {
        setSecarch(!search);
    }


    const menuHandler = () => {
        setMoveNavbar(!moveNavbar)

    }
  
    return(
        <div className="h-[60px] bg-white- flex items-center justify-between shadow-lg shadow-gray-600 px-6">
            {/* LEFT */}
            <div className="flex gap-3 max-md:block  md:hidden ">
              <i onClick={menuHandler} className="bi bi-list text-gray-400 hover:text-gray-900 duration-300 cursor-pointer text-lg hover:scale-140"></i>
              <i className="bi bi-heart  text-gray-400 hover:text-gray-900 duration-300 cursor-pointer text-lg" ></i>
            </div>
            <div className="" >
                <img src={logo} alt="" className='w-20' />
            </div>

            {/* MEDDLE */}
            {/* container Menu */}
            <div className={` ${navbar ?"bg-orange-900 w-full left-0 top-0 fixed" :  "static bg-blue-800 flex items-center " }`}>
              {/* Menu */}
              <div className={` ${navbar ? "menu" : ""}`}>
                {/* title menu */}
                <div className= {`${navbar? "" : "bg-amber-400 h-[60px] flex items-center justify-center cursor-pointer hover:border-b-2! hover:border-b-gray-950! "}`}>
                  menu 1
                </div>

                {/* container List */}
                <div className = {`${navbar ? "bg-blue-500 h-0 overflow-hidden containerList" : "fixed bg-white left-0  flex flex-col border-r-1! w-[25%] border-r-gray-300!   pl-30 h-[500px] shadow-2xl"}`}>
                  {/* category */}
                  <div className="">Category Tilte </div>
                  {/* List */}
                  <div className={` ${navbar ? "list": "list w-full bg--500 "}`}>
                    {/* title List */}
                    <div className="">list 1</div>


                    {/* container product */}
                    <div className={`${navbar ? "bg-yellow-500 fixed h-0 overflow-hidden containerProduct" : " bg-amber-300 fixed left-[25%] w-[75%] z-10! top-[100px] h-[500px] pr-30!"}`}>
                      {/* product */}
                      <div className="bg-green-700">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                    </div>
                    
                  </div>
                  {/* List */}
                  <div className={` ${navbar ? "list": "list w-full bg-white "}`}>
                    {/* title List */}
                    <div className="">list 1</div>


                    {/* container product */}
                    <div className={`${navbar ? "bg-yellow-500 fixed h-0 overflow-hidden containerProduct" : " bg-amber-300 fixed left-[25%] w-[75%] top-[100px] pr-20!"}`}>
                      {/* product */}
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                    </div>
                    
                  </div>
                  {/* List */}
                  <div className={` ${navbar ? "list": "list w-full bg-red-500 "}`}>
                    {/* title List */}
                    <div className="">list 1</div>


                    {/* container product */}
                    <div className={`${navbar ? "bg-yellow-500 fixed h-0 overflow-hidden containerProduct" : " bg-amber-300 fixed left-[25%] w-[75%] top-[100px] pr-20!"}`}>
                      {/* product */}
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                    </div>
                    
                  </div>
                  {/* List */}
                  <div className={` ${navbar ? "list": "list w-full bg-red-500 "}`}>
                    {/* title List */}
                    <div className="">list 1</div>


                    {/* container product */}
                    <div className={`${navbar ? "bg-yellow-500 fixed h-0 overflow-hidden containerProduct" : " bg-amber-300 fixed left-[25%] w-[75%] top-[100px] pr-20!"}`}>
                      {/* product */}
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                    </div>
                    
                  </div>
                  {/* List */}
                  <div className={` ${navbar ? "list": "list w-full bg-red-500 "}`}>
                    {/* title List */}
                    <div className="">list 1</div>


                    {/* container product */}
                    <div className={`${navbar ? "bg-yellow-500 fixed h-0 overflow-hidden containerProduct" : " bg-amber-300 fixed left-[25%] w-[75%] top-[100px] pr-20!"}`}>
                      {/* product */}
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                    </div>
                    
                  </div>
                 

               

                </div>
              </div>
              {/* Menu */}
              <div className="bg-red-500 menu ">
                {/* title menu */}
                <div className="">
                  menu 1
                </div>

                {/* container List */}
                <div className="bg-blue-500 h-0 overflow-hidden containerList">
                  {/* List */}
                  <div className="list">
                    {/* title List */}
                    <div className="">list 1</div>

                    {/* container product */}
                    <div className="bg-yellow-500 h-0 overflow-hidden  duration-300 containerProduct">
                      {/* product */}
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                    </div>

                    
                  </div>
                  {/* List */}
                  <div className="list">
                    {/* title List */}
                    <div className="">list 2</div>

                    {/* container product */}
                    <div className="bg-yellow-500 h-0 overflow-hidden duration-300 containerProduct">
                      {/* product */}
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                    </div>

                    
                  </div>
                </div>
              </div>
             
            </div>

            {/* RIGHT  */}
          <div className="flex items-center justify-center">
            <div className="relative flex gap-4 z-1">
              <input type="search" placeholder='search' className={search ? 'w-[200px] duration-900 ease-in bg-gray-100 px-3 focus:outline-hidden rounded-md h-[30px]' : 'w-[0px] duration-900 ease-out'}    />
              <i className="bi bi-search hover:scale-130  text-gray-400 cursor-pointer text-lg  md:right-[115px] max-md:right-[80px] absolute hover:text-gray-900 duration-300"   onClick={handlerSerch}></i>
              <i className="bi bi-person text-gray-400 cursor-pointer text-lg hover:text-gray-900 duration-300"></i>
              <i className="bi bi-handbag text-gray-400 cursor-pointer text-lg hover:text-gray-900 duration-300"></i>
              <i className="bi bi-heart max-md:hidden  md:block text-gray-400 cursor-pointer text-lg hover:text-gray-900 duration-300" ></i>
            </div>
            <div className="">
             
            </div>
          </div>
        </div>
    )
}

export default HeaderBottom ;