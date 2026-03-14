import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { LiaCpanel } from "react-icons/lia";
import { ImExit } from "react-icons/im";
import { Link,  } from "react-router-dom";
import { RiMenuFoldFill } from "react-icons/ri";
import NavbarPanelAdmin from "./navbar";
import { use, useEffect, useRef, useState } from "react";
import CheckSession from "../checkSession";
import "./styles.css"

const HeaderPanelAdmin = ({id}) => {
    const [navbar, setNavbar] = useState(false)
    const ref =  useRef(null)

    useEffect(() => {
        if(navbar == false){
            const timer = setInterval(() => {
                ref.current.style.display = 'none'
            }, 500)
            return() => {clearInterval(timer)}
        }
        else {
            ref.current.style.display = 'flex'
        }
    }, [navbar])
    return (
        <>
            <CheckSession />
            <div className="bg-[#252525]! fixed w-full h-20 flex items-center border-b border-b-[#7c7c7c]! text-4xl justify-between px-8 z-50 text-white relative">
                <div className="flex gap-4 group  ">
                    <FaReact className="group-hover:text-rose-400  duration-1000" />
                    <FaPhp className="group-hover:text-sky-400 duration-1000"/>
                </div>


                <div className="text-9xl hover:scale-150 duration-1000">
                    <LiaCpanel />
                </div>


                <div className="flex  gap-6">
                
                    <Link to = "/">
                        <FaHome title="home" className="hover:text-[#00e9d6] duration-300 cursor-pointer"/>
                    </Link>
                
                    <Link to = "/LogOut">
                        <BiLogOut title ="logout" className="hover:text-[red] duration-300 cursor-pointer"/>
                    </Link>
                
                    <Link to = "/validation">
                        <CiLogin title = "login"  className="hover:text-[blue] duration-300 cursor-pointer"/>
                    </Link>
                
                    <Link to = "/">
                        <ImExit title = "exit" className="hover:text-rose-600 duration-300 cursor-pointer"/>
                    </Link>

                    <div 
                        className=""
                        onClick={() => {setNavbar(true)}}
                    >
                        <RiMenuFoldFill className="text-3xl hover:text-[silver] duration-200 cursor-pointer"/>
                    </div>

                </div>
                <div ref = {ref} className={`${navbar ? "     border-l-2  top-20 bottom-0 animationOpen  ": "   bottom-0 top-20 animationClose"}     bottom-0 top-20  absolute  duration-400 z-50! `}>
                    <NavbarPanelAdmin setNavbar = {setNavbar} id = {id} />
                </div>
            </div>
        </>
    )
}

export default HeaderPanelAdmin