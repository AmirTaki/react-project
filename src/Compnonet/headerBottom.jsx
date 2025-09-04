import logo from "../assets/logo.webp";
import { createContext, useEffect, useState } from 'react';
import labtop from "../assets/fwebp.webp"




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
            <div className={` ${navbar ?"bg-white w-full duration-500 -left-200! top-0 fixed z-40" :  "static  flex items-center " } ${moveNavbar ? "left-0! duration-500" : ""} `}>
              {/* exit menu  */}
              <div className={`${navbar ? "h-[50px] flex justify-between items-center bg-white px-3 border-b-gray-200! border-b-1! " : "hidden"}`}>
                <i className="bi bi-x-lg text-gray-300  hover:text-gray-700 cursor-pointer  duration-200 hover:scale-130" onClick={menuHandler} ></i>
                <img src={logo} alt="" className='w-10' />
                <div className="relative">
                  <input type="search" placeholder='search' className={search ? 'w-[200px] duration-900 ease-in bg-gray-100 px-3 focus:outline-hidden rounded-md h-[30px]' : 'w-[0px] duration-900 ease-out'}    />
                  <i className="bi bi-search text-gray-400 cursor-pointer text-lg hover:scale-130    max-md:right-[10px] absolute hover:text-gray-900 duration-300"    onClick={handlerSerch}></i>
                </div>
              </div>
             
              {/* Menu */}
              <div className={` ${navbar ? "menu group/menu duration-500! " : "group/menu hover:border-b-2! hover:border-b-gray-950!  "}`}>
                {/* title menu */}
                <div className= {`${navbar? "flex justify-between px-3 bg-white h-[50px] items-center cursor-pointer  " : "h-[60px] flex items-center justify-center cursor-pointer   "}`}>
                  <div className={`${navbar ? "text-gray-400 group-hover/menu:text-gray-600! " : ""}`}>menu 1</div>
                  <div className={`${navbar ?  "text-gray-400 group-hover/menu:rotate-180 group-hover/menu:text-red-500! duration-300!" : "hidden"}`}><i class="bi bi-chevron-down"></i></div>
                </div>
                {/* megaMenu */}
                <div className={`${navbar ? "" : "bg-green-500 h-[500px] w-[100%] fixed left-0  top-25.5  group-hover/menu:flex! duration-500!  animate-mege! flex justify-center"}`}>
                  {/* container list */}
                  <div className={`${navbar ? "" : "h-500px bg-red-500 w-[300px] relative"}`}>
             
                  </div>
                  {/* container product */}
                  <div className={`${navbar ? "" : "bg-orange-500 w-[50%] h-[500px]  "}`}>
                    
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