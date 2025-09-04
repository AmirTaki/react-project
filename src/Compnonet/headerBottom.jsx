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
              <div className={` ${navbar ? "menu group/menu duration-500! " : "group/menu hover:border-b-2! hover:border-b-gray-950! relative  "}`}>
                {/* title menu */}
                <div className= {`${navbar? "flex justify-between px-3 bg-white h-[50px] items-center cursor-pointer  " : "h-[60px] flex items-center justify-center cursor-pointer   "}`}>
                  <div className={`${navbar ? "text-gray-400 group-hover/menu:text-gray-600! " : ""}`}>menu 1</div>
                  <div className={`${navbar ?  "text-gray-400 group-hover/menu:rotate-180 group-hover/menu:text-red-500! duration-300!" : "hidden"}`}><i class="bi bi-chevron-down"></i></div>
                </div>
                {/* megaMenu   => h-[0]  absolute top-[62px] -left-[130px] group-hover/menu:h-[500px]!   */}
                <div className={`${navbar ? "" : "bg-green-500 fixed w-full left-0 hidden  group-hover/menu:flex! duration-500!  animate-mege! justify-center overflow-hidden"}`}>
                  {/* container list */}
                 <div className={` ${navbar ? "list": "list flex  items-center bg-transparent h-[500px] flex-col w-[300px]   "}`}>
                      {/* category */}
                      <div className = {`${navbar ? "hidden" : "h-[30px] flex items-center text-gray-900/30   "}`}>Category Tilte </div> 
                      {/* container List  */}
                      <div className={`${navbar ? "" : "    hover:bg-gray-100 duration-300  group/list w-[300px]"}`}>    
                        {/* title List */}
                        <div className={`${navbar ? "flex justify-between px-4 bg-transparent text-gray-400 hover:text-gray-700 cursor-pointer hover:bg-sky-100! duration-150 h-[50px] items-center" : "   h-[40px]  justify-center text-xl flex flex-col  pl-[10px] text-gray-600   hover:text-blue-600  hover:bg-gray-100 duration-300 "}`}>
                            <div className={`${navbar ? "" : ""}`}>list 1</div>
                            <div className={`${navbar ? "" : "hidden"}`}><i class="bi bi-chevron-right"></i></div>
                        </div>


                            {/* container product ============================================================> Hidden  =>   */}
                        <div className={`${navbar ? "bg-yellow-500 fixed h-0 overflow-hidden containerProduct" : "   hidden  fixed  w-[60%] left-[30%] mr-[10%] top-[101px] bg-white border-l-1!  h-[500px] ml-0 p-5  border-gray-300! flex-row!    group-hover/list:flex! "}`}>
                          {/* category */}
                          <div className=" flex flex-col  w-[33.3%]  overflow-hidden border-l-gray-100 border-r-1!" >
                              <div className = "h-[50px] flex items-center text-gray-900/20 pl-[20px]  font-bold ">BY CATEGORY</div>
                              {/* category item */}
                              <div className=" flex bg-white h-[50px]  items-center!  pl-[10px] text-gray-500 cursor-pointer hover:bg-gray-100 duration-300 hover:text-blue-500   group/category">
                                <div className="pr-1 group-hover/category:text-gray-500!  hover:text-blue-500! "><i class="bi bi-anthropic"></i></div>
                                <div className="">category</div>
                              </div>
                          </div>
                          {/* serics */}
                          <div className=" flex flex-col  w-[33.3%] overflow-hidden border-l-gray-100 border-r-1!">
                            <div className = "h-[50px] flex items-center text-gray-900/20 pl-[20px]  font-bold ">BY SERYS</div>
                            {/* serics item */}
                            <div className=" flex bg-white h-[50px] items-center!  pl-[10px] text-gray-500 cursor-pointer hover:bg-gray-100 duration-300 hover:text-blue-500  group/category">
                              <div className="">serics</div>
                            </div>
                          </div>
                          {/* image */}
                          <div className="flex flex-col  w-[33.3%] overflow-hidden  justify-center items-center gap-2">
                            {/* itemImages */}
                            <div className="w-[200px] h-[230px] bg-gray-100 flex flex-col justify-center items-center">
                              <img src={labtop} alt=""className="w-[150px] h-[150px]  "/>
                              <div className=" w-[150px] h-[150px] text-center flex items-center text-gray-600 hover:text-blue-500 cursor-pointer duration-200">ASUS Zenbook Duo (2024) UX8406</div>
                            </div>
                            {/* itemImages */}
                            <div className="w-[200px] h-[230px] bg-gray-100 flex flex-col justify-center items-center">
                              <img src={labtop} alt=""className="w-[150px] h-[150px]  "/>
                              <div className=" w-[150px] h-[150px] text-center flex items-center text-gray-600 hover:text-blue-500 cursor-pointer duration-200">ASUS Zenbook Duo (2024) UX8406</div>
                            </div>
                      
                            
                      
                          </div>
                        </div>
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