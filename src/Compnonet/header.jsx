
import HeaderTop from './headerTop';
import HeaderBottom from './headerBottom';
import { createContext, useEffect, useState } from 'react';

const GlobalHeaderScroll = createContext();

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
        <GlobalHeaderScroll.Provider >
            <header>
                <HeaderTop />
                <HeaderBottom />
            </header>
        </GlobalHeaderScroll.Provider>
    
    )
}

export default Header;