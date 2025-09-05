import { useEffect, useState } from "react";


const HeaderTop = () => {

    const [scrollTop, setScrollTop]  =  useState(0);
    const handleScroll = () => {
        setScrollTop(window.scrollY);
    }
   
    useEffect(() => {
       
        window.addEventListener('scroll', handleScroll)
        console.log(scrollTop)
        return() => {
            window.addEventListener("scroll", handleScroll);
            
        }
    },[])
 
    
    return(
   
        <div className="bg-gray-100 flex items-center justify-end h-[40px] border-b-[2px] border-amber-300 fixed! w-full! top-0 left-0"  >
                 {scrollTop}
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