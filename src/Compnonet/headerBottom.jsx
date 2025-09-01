import logo from "../assets/logo.webp";
import { createContext, useEffect, useState } from 'react';
import MegaMenu from "./megaMenu";



export const MegaMenuContext =  createContext("")
const  HeaderBottom = () => {
    
    const [search, setSecarch] =  useState(false);
    const [navbar, setNavbar] = useState(false);
    const [moveNavbar, setMoveNavbar] =  useState(false)
    const [megeMenu , setMegMenu] = useState(false);


    

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


    const handlerMegaMenu = () => {
        setMegMenu(false)
        setMegMenu(true)
    }
    const HandlerMouseLeaveMegaMenu = () => {
        setMegMenu(false)
    }

    return(
        <div className="h-[60px] bg-white- flex items-center justify-between shadow-lg shadow-gray-600 px-6">
            <div className="flex gap-3 max-md:block  md:hidden ">
              <i onClick={menuHandler} className="bi bi-list text-gray-400 hover:text-gray-900 duration-300 cursor-pointer text-lg hover:scale-140"></i>
              <i className="bi bi-heart  text-gray-400 hover:text-gray-900 duration-300 cursor-pointer text-lg" ></i>
            </div>
      

            <div className="" >
                <img src={logo} alt="" className='w-20' />
            </div>
            <div className= {`${navbar ? "bg-white fixed w-full top-0  -left-full z-30! ": "flex gap-7"} ${moveNavbar ? "-left-0! duration-800": "-left-full! duration-800"}` }>
                {/* row 1 */}

                <div className={navbar ? "flex justify-between items-center p-3 shadow-gray-300 border border-b-1 border-b-gray-300 h-[50px] " : "hidden"}>
                    <i className="bi bi-x-lg text-gray-300  hover:text-gray-700 cursor-pointer  duration-200 hover:scale-130" onClick={menuHandler} ></i>
                    <img src={logo} alt="" className='w-10' />
                    <div className="relative">
                        <input type="search" placeholder='search' className={search ? 'w-[200px] duration-900 ease-in bg-gray-100 px-3 focus:outline-hidden rounded-md h-[30px]' : 'w-[0px] duration-900 ease-out'}    />
                        <i className="bi bi-search text-gray-400 cursor-pointer text-lg hover:scale-130    max-md:right-[10px] absolute hover:text-gray-900 duration-300"   onClick={handlerSerch}></i>
                    </div>
                </div>

                {/* <userContext.Provider   value = {{search, setSecarch, navbar, setNavbar,moveNavbar, setMoveNavbar, megeMenu , setMegMenu}}>
                    <MegaMenu />
                </userContext.Provider> */}
            

            {/* ------------- */}
  
            

      
       
          
          </div>

            {/*  */}
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