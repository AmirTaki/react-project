
import { useEffect, useState } from 'react';
import logo from "../assets/logo.webp";
import HeaderTop from './headerTop';
import HeaderBottom from './headerBottom';


const Header = () => {
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
        <header>
        
        <HeaderTop />
        <HeaderBottom />

     
        </header>
    )
}

export default Header;