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

       
                {/* container mega menu */}
                   {/* row 2 */}
                    <div   className={` ${navbar ? "  group border-b-1!  border-b-gray-100! hover:bg-sky-100 flex items-center justify-between px-3 cursor-pointer hover:text-gray-950!" : "group bg-amber-500 "}`}>
                        <div className=" group-hover:text-black bg-transparent flex items-center justify-center h-[60px] border-b-white! border-b-2 hover:border-b-2 hover:border-b-gray-900! cursor-pointer max-md:border-0! max-md:text-gray-500 ">
                            item
                        </div>
                        <i className="bi bi-chevron-down text-gray-300 hover:text-red-500 md:hidden group-hover:rotate-180 duration-300 group-hover:text-red-500"></i>

                        {/* MegaMenu */}
                        <div className={` ${navbar ? "fixed hidden" : " group-hover:flex! hidden  fixed top-[101px] left-0 w-[100%] h-[500px] bg-gray-100 z-50   justify-center  "   } `   } >
                            {/* column1 */}
                            <div className={`${navbar ? "" :"bg-yellow-200 w-[300px]"}`}>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                            </div>
                            <div className={`${navbar ? "" : "flex "}`}>
                                {/* column2 */}
                                <div className={`${navbar ? "" : "bg-red-200 w-[300px]"}`}>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                </div>
                                {/* column3 */}
                                <div className={`${navbar ? "" : "bg-blue-200 w-[300px]"}`}>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                </div>
                                {/* column4 */}
                                <div className={`${navbar ? "" : "bg-green-200 w-[300px]"}`}>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                </div>
                            </div>
                        
                        </div>
                    </div>         
                {/* end container mega menu */}

            {/* ------------- */}
                {/* container mega menu */}
                 {/* row 2 */}
                    <div   className={` ${navbar ? "  group border-b-1!  border-b-gray-100! hover:bg-sky-100 flex items-center justify-between px-3 cursor-pointer hover:text-gray-950!" : "group bg-amber-500 "}`}>
                        <div className=" group-hover:text-black bg-transparent flex items-center justify-center h-[60px] border-b-white! border-b-2 hover:border-b-2 hover:border-b-gray-900! cursor-pointer max-md:border-0! max-md:text-gray-500 ">
                            item
                        </div>
                        <i className="bi bi-chevron-down text-gray-300 hover:text-red-500 md:hidden group-hover:rotate-180 duration-300 group-hover:text-red-500"></i>

                        {/* MegaMenu */}
                        <div className={` ${navbar ? "fixed hidden" : " group-hover:flex! hidden  fixed top-[101px] left-0 w-[100%] h-[500px] bg-gray-100 z-50   justify-center  "   } `   } >
                            {/* column1 */}
                            <div className={`${navbar ? "" :"bg-green-200 w-[300px]"}`}>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                            </div>
                            <div className={`${navbar ? "" : "flex "}`}>
                                {/* column2 */}
                                <div className={`${navbar ? "" : "bg-red-200 w-[300px]"}`}>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                </div>
                                {/* column3 */}
                                <div className={`${navbar ? "" : "bg-blue-200 w-[300px]"}`}>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                </div>
                                {/* column4 */}
                                <div className={`${navbar ? "" : "bg-green-200 w-[300px]"}`}>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                </div>
                            </div>
                        
                        </div>
                    </div>      
                {/* end container mega menu */}
  
            

      
       
          
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