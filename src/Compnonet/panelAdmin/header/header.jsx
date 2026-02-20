import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { LiaCpanel } from "react-icons/lia";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";

const HeaderPanelAdmin = () => {
    return (
        <div className=" h-20 flex items-center border-b border-b-[#7c7c7c]! text-4xl justify-between px-8">
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
            </div>


        </div>
    )
}

export default HeaderPanelAdmin