import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
const HeaderPanelAdmin = () => {
    return (
        <div className=" h-20 flex items-center border-b border-b-[#7c7c7c]! text-4xl justify-between px-8">
            <div className="flex gap-3 ">
                <FaReact />
                <FaPhp />
            </div>


            <div className="">
                panel admin
            </div>


            <div className="flex  gap-3">
                <FaHome />
                <BiLogOut />
                <CiLogin />
            </div>


        </div>
    )
}

export default HeaderPanelAdmin