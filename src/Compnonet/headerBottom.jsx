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
            <div className="menuContainer">
                <div className="menu">
                  <div className="titleMenu">
                    <div className="">menu</div>
                    <i>></i>
                  </div>
                </div>
                
                
                {/* anotehr menu */}
                <div className="menu">menu 2</div>
                <div className="menu">menu 3</div>
                <div className="menu">menu 4</div>
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