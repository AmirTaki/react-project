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
            <div className={` ${navbar ?"bg-white w-full duration-500 -left-200! top-0 fixed z-40" :  "static bg-blue-800 flex items-center " } ${moveNavbar ? "left-0! duration-500" : ""} `}>
              {/* exit menu  */}
              <div className={`${navbar ? "h-[50px] flex justify-between items-center bg-white px-3 border-b-gray-200! border-b-1! " : "hidden"}`}>
                <i className="bi bi-x-lg text-gray-300  hover:text-gray-700 cursor-pointer  duration-200 hover:scale-130" onClick={menuHandler} ></i>
                <img src={logo} alt="" className='w-10' />
                <div className="relative">
                  <input type="search" placeholder='search' className={search ? 'w-[200px] duration-900 ease-in bg-gray-100 px-3 focus:outline-hidden rounded-md h-[30px]' : 'w-[0px] duration-900 ease-out'}    />
                  <i className="bi bi-search text-gray-400 cursor-pointer text-lg hover:scale-130    max-md:right-[10px] absolute hover:text-gray-900 duration-300"   onClick={handlerSerch}></i>
                </div>
              </div>
              {/* Menu */}
              <div className={` ${navbar ? "menu group/menu duration-500! " : "menu"}`}>
                {/* title menu */}
                <div className= {`${navbar? "flex justify-between px-3 bg-white h-[50px] items-center cursor-pointer  " : "bg-amber-400 h-[60px] flex items-center justify-center cursor-pointer hover:border-b-2! hover:border-b-gray-950! "}`}>
                  <div className={`${navbar ? "text-gray-400 group-hover/menu:text-gray-600! " : ""}`}>menu 1</div>
                  <div className={`${navbar ?  "text-gray-400 group-hover/menu:rotate-180 group-hover/menu:text-red-500! duration-300!" : "hidden"}`}><i class="bi bi-chevron-down"></i></div>
                </div>

                {/* container List */}
                <div className = {`${navbar ? "bg-blue-500 h-0 overflow-hidden group-hover/menu:h-[400px]! duration-500! " : " containerList  hidden fixed bg-white left-0   flex-col border-r-1! w-[25%] border-r-gray-300!   pl-30 h-[500px] shadow-2xl"}`}>
                  {/* category */}
                  <div className = {`${navbar ? "hidden" : "h-[30px] flex items-center text-gray-900/30"}`}>Category Tilte </div>
                  {/* List */}
                  <div className={` ${navbar ? "list": "list w-full bg-white h-[40px] text-xl flex items-center pl-[2px] text-gray-600  hover:text-blue-600 hover:bg-gray-100 duration-300"}`}>
                    {/* title List */}
                    <div className={`${navbar ? "flex justify-between px-4 bg-white text-gray-400 hover:text-gray-700 cursor-pointer hover:bg-sky-100! duration-150 h-[50px] items-center" : ""}`}>
                        <div className={`${navbar ? "" : ""}`}>list 1</div>
                        <div className={`${navbar ? "" : "hidden"}`}><i class="bi bi-chevron-right"></i></div>
                    </div>


                    {/* container product */}
                    <div className={`${navbar ? "bg-yellow-500 fixed h-0 overflow-hidden containerProduct" : " bg-white fixed left-[25%] shadow-2xl w-[75%] z-10! top-[100px] h-[500px] pr-30!"}`}>
                      {/* product */}
                      <div className="bg-green-700">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                    </div>
                    
                  </div>
                  {/* List */}
                  <div className={` ${navbar ? "list": "list w-full bg-white h-[40px] text-xl flex items-center pl-[2px] text-gray-600  hover:text-blue-600 hover:bg-gray-100 duration-300"}`}>
                    {/* title List */}
                    <div className={`${navbar ? "flex justify-between px-4 bg-white text-gray-400 hover:text-gray-700 cursor-pointer hover:bg-sky-100! duration-150 h-[50px] items-center" : ""}`}>
                        <div className={`${navbar ? "" : ""}`}>list 1</div>
                        <div className={`${navbar ? "" : "hidden"}`}><i class="bi bi-chevron-right"></i></div>
                    </div>


                    {/* container product */}
                    <div className={`${navbar ? "bg-yellow-500 fixed h-0 overflow-hidden containerProduct" : " bg-white fixed left-[25%] shadow-2xl w-[75%] z-10! top-[100px] h-[500px] pr-30!"}`}>
                      {/* product */}
                      <div className="bg-green-700">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                    </div>
                    
                  </div>
                  {/* List */}
                  <div className={` ${navbar ? "list": "list w-full bg-white h-[40px] text-xl flex items-center pl-[2px] text-gray-600  hover:text-blue-600 hover:bg-gray-100 duration-300"}`}>
                    {/* title List */}
                    <div className={`${navbar ? "flex justify-between px-4 bg-white text-gray-400 hover:text-gray-700 cursor-pointer hover:bg-sky-100! duration-150 h-[50px] items-center" : ""}`}>
                        <div className={`${navbar ? "" : ""}`}>list 1</div>
                        <div className={`${navbar ? "" : "hidden"}`}><i class="bi bi-chevron-right"></i></div>
                    </div>


                    {/* container product */}
                    <div className={`${navbar ? "bg-yellow-500 fixed h-0 overflow-hidden containerProduct" : " bg-white fixed left-[25%] shadow-2xl w-[75%] z-10! top-[100px] h-[500px] pr-30!"}`}>
                      {/* product */}
                      <div className="bg-green-700">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                      <div className="">product</div>
                    </div>
                    
                  </div>
                  {/* List */}
                  <div className={` ${navbar ? "list": "list w-full bg-white h-[40px] text-xl flex items-center pl-[2px] text-gray-600  hover:text-blue-600 hover:bg-gray-100 duration-300"}`}>
                    {/* title List */}
                    <div className={`${navbar ? "flex justify-between px-4 bg-white text-gray-400 hover:text-gray-700 cursor-pointer hover:bg-sky-100! duration-150 h-[50px] items-center" : ""}`}>
                        <div className={`${navbar ? "" : ""}`}>list 1</div>
                        <div className={`${navbar ? "" : "hidden"}`}><i class="bi bi-chevron-right"></i></div>
                    </div>


                    {/* container product */}
                    <div className={`${navbar ? "bg-yellow-500 fixed h-0 overflow-hidden containerProduct" : " bg-white fixed left-[25%] shadow-2xl w-[75%] z-10! top-[100px] h-[500px] pr-30!"}`}>
                      {/* product */}
                      <div className="bg-green-700">product</div>
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