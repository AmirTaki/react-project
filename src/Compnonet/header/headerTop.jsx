import { useContext } from "react";
import { GlobalHeaderScroll } from "./header";

const HeaderTop = () => {

     
            // ${scrollTop > '250px' ? "-top-0 duration-600! " : "top-0 duration-600!"}  
    const {scrollTop}  = useContext(GlobalHeaderScroll)
    return(
        
        <div className={`bg-gray-100 flex items-center justify-end h-[40px] border-b-[2px] border-amber-300  fixed! w-full! top-0 left-0 
            z-50!
        `}  >
       
            <div className="flex gap-4 p-5 justify-between items-center">
              <a className='cursor-pointer text-gray-500 hover:text-gray-950! hover:underline  '>help</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950! hover:underline'>orders and returns</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950! hover:underline'>gift cards</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950! hover:underline'>join</a>
              <a className='cursor-pointer text-gray-500 hover:text-gray-950! hover:underline'>adClud</a>
            </div>
        </div>
    )
}

export default HeaderTop;