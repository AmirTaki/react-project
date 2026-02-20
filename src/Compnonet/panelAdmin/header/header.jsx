import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { LiaCpanel } from "react-icons/lia";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import { RiMenuFoldFill } from "react-icons/ri";
import NavbarPanelAdmin from "./navbar";
import { useState } from "react";

const HeaderPanelAdmin = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <div className="bg-[#252525]! fixed w-full h-20 flex items-center border-b border-b-[#7c7c7c]! text-4xl justify-between px-8 z-50">
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

            <div className={`${navbar ? "fixed bg-[#252525]! w-full  border-l-2 right-0 top-20 bottom-0": "absolute -right-100 top-20"} max-lg:w-[10%] w-[20%]!   duration-400 z-50!`}>
                <NavbarPanelAdmin setNavbar = {setNavbar} />
            </div>
        </div>
    )
}

export default HeaderPanelAdmin