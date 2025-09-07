
import HeaderTop from './headerTop';
import HeaderBottom from './headerBottom';
import { useEffect, useState } from 'react';


const Header = () => {
    const [scrollTop, setScrollTop]  =  useState(0);
    const handleScroll = () => {
        setScrollTop(window.scrollY);
    }
   
    useEffect(() => {
       
        window.addEventListener('scroll', handleScroll)
 
        return() => {
            window.addEventListener("scroll", handleScroll);
            
        }
    },[])

    return(
        <header>
        
        <HeaderTop />
        <HeaderBottom />

     
        </header>
    )
}

export default Header;