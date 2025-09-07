import logo from "../../assets/logo.webp";
import { act, createContext, useContext, useEffect, useReducer, useState } from 'react';
import labtop from "../../assets/fwebp.webp"
import { GlobalHeaderScroll } from "./header";



const initialStateHeader = {
  search : false,
  moveNavbar : false,
  productMenu : false,
  productMenuNavbar : false,
  animationProductMenu : false
}

const ACTIONTYPE = {
  search : "search",
  searchResize : "searchResize",

  moveNavbar : "moveNavbar",
  moveNavbarResize : "moveNavbarResize",

  productMenu : "productMenu",
  productMenuResize : "productMenuResize",


  productMenuNavbar : "productMenuNavbar",
  productMenuNavbarResize : "productMenuNavbarResize",

  animationProductMenu : "animationProductMenu",
  animationProductMenuResize : "animationProductMenuResize"
}

const  HeaderBottom = () => {
 
    const {scrollTop} = useContext(GlobalHeaderScroll);
    const [navbar, setNavbar] = useState(false);

    const reducer = (state, action) => {
      // console.log(state)
      switch(action.type){
        // search
        case ACTIONTYPE.search :
          return {...state, search : !state.search };

        case ACTIONTYPE.searchResize : 
          return {...state, search : false}
        
        // MoveNaveBar 
        case ACTIONTYPE.moveNavbar : 
          return {...state, moveNavbar : !state.moveNavbar};

        case ACTIONTYPE.moveNavbarResize : 
          return {...state, moveNavbar : false};

        // productMenu
        case ACTIONTYPE.productMenu : 
          return {...state, productMenu : !state.productMenu}

        case ACTIONTYPE.productMenuResize :
          return {...state, productMenu : action.payload}

        // productMenuNavbar 
        case ACTIONTYPE.productMenuNavbar :
          return {...state, productMenuNavbar : !state.productMenuNavbar}

        case ACTIONTYPE.productMenuNavbarResize : 
          return {...state, productMenuNavbar : action.payload}

        //animationProductMenu
        case ACTIONTYPE.animationProductMenu : 
          return {...state, animationProductMenu : !state.animationProductMenu }

        case ACTIONTYPE.animationProductMenuResize : 
          return {...state, animationProductMenu : action.payload}
        
        // default 
        default :
          return {...state}
      }
    }
    
    const [state, dispatch]  =   useReducer (reducer,initialStateHeader);


    const handerResize = () =>{
      
      setNavbar(window.innerWidth <= 768 ? true : false);
      
      dispatch({type: ACTIONTYPE.searchResize })
      dispatch({type: ACTIONTYPE.moveNavbarResize})
      dispatch({type : ACTIONTYPE.productMenuResize, payload : false});
      dispatch({type : ACTIONTYPE.productMenuNavbarResize, payload : false});
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

    const listHandler = ()  => {
      window.innerWidth <= 768 ?  dispatch({type : ACTIONTYPE.productMenuNavbar}) : dispatch({type : ACTIONTYPE.productMenu})
    }
    const handlerProductMenu = (e) => {
      dispatch({type : ACTIONTYPE.animationProductMenuResize , payload : true});
      setTimeout(() => {
        dispatch({type : ACTIONTYPE.productMenuResize , payload : false})
        dispatch({type : ACTIONTYPE.animationProductMenuResize , payload : false});

      }, 500);
    }

    const exitNavbar = () => {
      dispatch({type : ACTIONTYPE.productMenuNavbarResize , payload : false})
      setTimeout(() => {
        dispatch({type : ACTIONTYPE.moveNavbarResize})
      },700)
     
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
          
          {/* Menu */}
          <div className={` ${navbar ? "menu group/menu duration-500! bg-transparent " : "group/menu hover:border-b-2!  hover:border-b-gray-950!  relative "}`}>
            {/* title menu */}
            <div className= {`${navbar? "flex justify-between px-3 bg-transparent h-[50px] items-center cursor-pointer  " : "h-[60px] flex items-center justify-center cursor-pointer   "}`}>
              <div className={`${navbar ? "text-gray-400 group-hover/menu:text-gray-600! " : ""}`}>menu 1</div>
              <div className={`${navbar ?  "text-gray-400 group-hover/menu:rotate-180 group-hover/menu:text-red-500! duration-300!" : "hidden"}`}><i className="bi bi-chevron-down"></i></div>
            </div>
            {/* megaMenu   =>    */}
            <div className={`${navbar ? "bg-gray-100 h-[0] overflow-hidden group-hover/menu:h-[200px] duration-500!" : "bg-white h-[0] hidden   rounded-2xl shadow-2xl absolute top-[62px] -right-110 group-hover/menu:h-[500px]! group-hover/menu:flex!  duration-500!    animate-mege!  "}`}>
              {/* container list */}
              <div className={` ${navbar ? "list": "list flex  items-center bg-transparent  h-[500px] flex-col w-[900px]   "}`}>
                {/* category */}
                <div className = {`${navbar ? "hidden" : "h-[30px] flex items-center text-gray-900/30   "}`}>Category Tilte </div> 
                {/* container List  */}
                <div className={`${navbar ? "" : "    hover:bg-gray-100 duration-300  group/list w-[800px]  m-2"}`}>    
                  {/* title List */}
                  <div onClick = {listHandler} className={`${navbar ? "flex justify-between px-4 bg-transparent  text-gray-400 hover:text-gray-700 cursor-pointer hover:bg-sky-100!  duration-150 h-[50px] items-center" : "   h-[40px]  justify-center  text-xl flex flex-col  pl-[10px] text-gray-600   hover:text-blue-600 cursor-pointer hover:bg-gray-100 duration-300  rounded-4xl!"}`}>
                      <div className={`${navbar ? "" : ""}`}>list 1</div>
                      <div className={`${navbar ? "" : "hidden"}`}><i className="bi bi-chevron-right"></i></div>
                  </div>


                  {/* container product ============================================================> Hidden  =>   */}
                  <div className={`${navbar ? "bg-white shadow-2xl top-0 w-full h-full flex-wrap! flex-col flex!   overflow-hidden containerProduct fixed! -left-300 " : "  z-10!  fixed!  w-[900px] top-0 -left-[0px]! bg-white shadow-2xl rounded-2xl border-l-1! hidden  h-[500px] ml-0 p-5  border-gray-300!  flex-row!  "}  ${state.productMenuNavbar ? "left-0! duration-500!" : "-left-300! duration-700!"} ${ state.productMenu  ? "flex! animate-productMenu!":"" } ${state.animationProductMenu & navbar === false? "animate-productMenuReverse!" : ""}` }>
                    <i onClick = {(e)=>{handlerProductMenu()}} className={`${navbar ? "hidden": "text-red-200 hover:text-red-500 duration-300 cursor-pointer font-bold right-3 text-2xl absolute bi bi-x-circle"}`}></i>
                  
                    <div className={`${navbar ? "bg-transparent h-[6%] w-full border-b-1! border-b-gray-100! fixed! flex justify-between items-center px-5": "hidden"}`}>
                      <div onClick={listHandler} className="text-gray-100 hover:scale-125 cursor-pointer duration-200 hover:text-gray-400"><i className="bi bi-chevron-left pr-2"></i>LEFT</div>
                      <div onClick={exitNavbar}  className="text-gray-100 hover:scale-125 cursor-pointer duration-200 hover:text-red-400"><i className="bi bi-x-circle"></i></div>
                    </div>
                    {/* category */}
                    <div className={`${navbar ? " flex flex-col w-[50%] h-[45%] mt-[9%] bg-transparent overflow-hidden border-l-gray-100 border-r-1!" :" flex flex-col  w-[300px]  overflow-hidden border-l-gray-100 border-r-1!"}`} >
                        <div className = "h-[50px] flex items-center text-gray-900/20 pl-[20px]  font-bold ">BY CATEGORY</div>
                        {/* category item */}
                        <div className=" flex bg-white h-[50px]  items-center!  pl-[10px] text-gray-500 cursor-pointer hover:bg-gray-100 duration-300 hover:text-blue-500   group/category">
                          <div className="pr-1 group-hover/category:text-gray-500!  hover:text-blue-500! "><i className="bi bi-anthropic"></i></div>
                          <div className="">category</div>
                        </div>
                    </div>
                    {/* serics */}
                    <div className={`${navbar ? "flex flex-col w-[50%] h-[45%] bg-transparent overflow-hidden border-l-gray-100 border-r-1! border-t-gray-100 border-t-1!" :"flex flex-col  w-[300px] overflow-hidden border-l-gray-100 border-r-1!"}`}>
                      <div className = "h-[50px] flex items-center text-gray-900/20 pl-[20px]  font-bold ">BY SERYS</div>
                      {/* serics item */}
                      <div className=" flex bg-white h-[50px] items-center!  pl-[10px] text-gray-500 cursor-pointer hover:bg-gray-100 duration-300 hover:text-blue-500  group/category">
                        <div className="">serics</div>
                      </div>
                    </div>
                    {/* image */}
                    <div className={`${navbar ? "flex flex-col justify-center h-[95%] bg-transparent w-[50%]  mt-[9%]  items-center gap-10 " : "flex flex-col w-[300px]    overflow-hidden  justify-center items-center gap-1"}`}>
                      {/* itemImages */} 
                      <div className={`${navbar ? "bg-gray-100 flex flex-col justify-center items-center w-[200px] h-[230px]" :
                        "w-[200px] h-[230px] bg-gray-100 flex flex-col justify-center items-center"
                      }`}>
                        <img src={labtop} alt = "" className="w-[150px] h-[150px]"/>
                        <div className=" w-[150px] h-[150px] text-center flex items-center text-gray-600 hover:text-blue-500 cursor-pointer duration-200">ASUS Zenbook Duo (2024) UX8406</div>
                      
                      </div>
                      {/* itemImages */} 
                      <div className={`${navbar ? "bg-gray-100 flex flex-col justify-center items-center w-[200px] h-[230px]" :
                        "w-[200px] h-[230px] bg-gray-100 flex flex-col justify-center items-center"
                      }`}>
                        <img src={labtop} alt=""className="w-[150px] h-[150px]"/>
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