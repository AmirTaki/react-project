import logo from "../../assets/logo.webp";
import { act, createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';
import { GlobalHeaderScroll } from "./header";
import { initialStateHeader, reducerHeader } from "./reducerHeader";
import { ACTIONTYPE } from "./FactHeader";
import MenuMegaMenu from "./menuMegaMenu";

export const ContextHeaderBottom =  createContext();

const  HeaderBottom = () => {

  const menus = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6', 'menu7'] 
  const lists = ['list1', 'list2', 'list3','list4','list5','list1', 'list2', 'list3', 'list4']

    const {scrollTop} = useContext(GlobalHeaderScroll);
    const [navbar, setNavbar] = useState(false);   
    const [state, dispatch]  =   useReducer (reducerHeader,initialStateHeader);
 
    const handerResize = () =>{
      
      setNavbar(window.innerWidth <= 768 ? true : false);
      dispatch({type: ACTIONTYPE.searchResize })
      dispatch({type: ACTIONTYPE.moveNavbarResize})
      dispatch({type:ACTIONTYPE.productMenuResize})
      dispatch({type:ACTIONTYPE.productMenuNavbarResize})
    }

    useEffect(() => {
      handerResize()
      return() => {
        window.addEventListener('resize', handerResize)
      }
    },[] )

    useEffect(() => {
      document.documentElement.style.overflow  = state.moveNavbar ? "hidden" : 'auto'
      return()=> {
        document.documentElement.style.overflow  = state.moveNavbar ? "hidden" : 'auto'
      }
    })

    const listHandler = (id)  => {
      window.innerWidth <= 768 ? dispatch({type : ACTIONTYPE.productMenuNavbar , payload : {index : id}}): dispatch({type : ACTIONTYPE.productMenu, payload : {id : id}}) ;
    }
    const handlerProductMenu = (index) => {
      dispatch({type : ACTIONTYPE.animationProductMenu, payload : {page : index, animation : true}})
      setTimeout(() => {
        dispatch({type : ACTIONTYPE.productMenu, payload : {id : index}})
        dispatch({type : ACTIONTYPE.animationProductMenu, payload : {page : index, animation : false}})
      }, 500);
    }

    const exitNavbar = (index) => {
      dispatch({type : ACTIONTYPE.productMenuNavbarResize})
      setTimeout(() => {
        dispatch({type : ACTIONTYPE.moveNavbarResize})
      },700)
     
    }

    const EnterHandler = (index) => {
      const LI = document.querySelectorAll(".megaContainer")[index]
      const Size  = LI.querySelectorAll(".listContainer").length
      dispatch({type : ACTIONTYPE.heightNavbar, payload :{height :  `${Size*50}px` , place  : index}})
    }
    const LeaverHandler = (index) => {
      dispatch({type : ACTIONTYPE.heightNavbar, payload :{height :  `0` , place  : index}})
    }

    return(    
      <div className={`h-[60px] bg-white flex items-center justify-between shadow-lg shadow-gray-600 top-10 px-6 z-100! fixed w-full
          ${ scrollTop > 90 ? "top-0! duration-300":"top-10! duration-300"}`
      }>
    
        {/* LEFT */}
        <div className="flex gap-3 max-md:block  md:hidden ">
          <i onClick={()=> {dispatch({type : ACTIONTYPE.moveNavbar})}} className="bi bi-list text-gray-400 hover:text-gray-900 duration-300 cursor-pointer text-lg hover:scale-140"></i>
          <i className="bi bi-heart  text-gray-400 hover:text-gray-900 duration-300 cursor-pointer text-lg" ></i>
        </div>
        <div className="" >
            <img src={logo} alt="" className='w-20' />
        </div>

        {/* MEDDLE */}
        {/* container Menu */}
        <div className={` ${navbar ?"bg-white h-[100%] shadow-2xl   w-full duration-500 -left-200! top-0 fixed z-40! " :  "static  flex items-center z-10! " } ${state.moveNavbar ? "left-0! duration-500" : ""} `}>
          {/* exit menu  */}
          <div className={`${navbar ? "h-[50px] flex justify-between items-center bg-transparent px-3 border-b-gray-200! border-b-1! " : "hidden"}`}>
            <i className="bi bi-x-lg text-gray-300  hover:text-gray-700 cursor-pointer  duration-200 hover:scale-130"  onClick={() => {dispatch({type : ACTIONTYPE.moveNavbar})}}></i>
            <img src={logo} alt="" className='w-10' />
            <div className="relative">
              <input type="search" placeholder='search' className={state.search ? 'w-[200px] duration-900 ease-in bg-gray-100 px-3 focus:outline-hidden rounded-md h-[30px]' : 'w-[0px] duration-900 ease-out'}    />
              <i className="bi bi-search text-gray-400 cursor-pointer text-lg hover:scale-130    max-md:right-[10px] absolute hover:text-gray-900 duration-300"    onClick={()=>{dispatch({type : ACTIONTYPE.search})}}></i>
            </div>
          </div>
        
          <ContextHeaderBottom.Provider value = {{menus, lists, navbar, setNavbar, state, dispatch, reducerHeader, listHandler, handlerProductMenu , exitNavbar, EnterHandler, LeaverHandler}}>
            {menus.map((menu, loc) => (
              <MenuMegaMenu menu = {menu} loc = {loc} />
            ))}        
      
          </ContextHeaderBottom.Provider>
       

          
        
      
      
        
      
        </div>

        {/* RIGHT  */}
        <div className="flex items-center justify-center">
          <div className="relative flex gap-4 z-1!">
            <input type="search" placeholder='search' className={state.search ? 'w-[200px] duration-900 ease-in bg-gray-100 px-3 focus:outline-hidden rounded-md h-[30px]' : 'w-[0px] duration-900 ease-out'}    />
            <i className="bi bi-search hover:scale-130  text-gray-400 cursor-pointer text-lg  md:right-[115px] max-md:right-[80px] absolute hover:text-gray-900 duration-300"   onClick={()=>{dispatch({type : ACTIONTYPE.search})}}></i>
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