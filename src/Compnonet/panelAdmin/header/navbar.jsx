import { BiSolidExit } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavbarPanelAdmin = ({setNavbar}) => {
    const list = ['users ', 'table2', 'table3', 'table4']
    return(
        <div className=" flex flex-col items-left gap-4 ">
            <div 
                className=" border-b flex justify-end px-3 items-center h-10 text-2xl w-full"
            >
                <BiSolidExit 
                    className=" hover:text-yellow-300 duration-300 cursor-pointer"
                    onClick={() => {setNavbar(false)}}
                /> 
            </div>

    
            <div className=" text-[20px] px-4  ">
                <Link to = "/PanelAdmin">
                    <div className=" cursor-pointer  hover:scale-90 hover:text-[silver] duration-400">  panelAdmin</div>  
                </Link>
            </div>
            
            <div className=" text-[20px] px-4  ">
                <Link to = "/PanelAdmin/UsersPanelAdmin">
                    <div className=" cursor-pointer  hover:scale-90 hover:text-[silver] duration-400">  users</div>  
                </Link>            
            </div>
            
            <div className=" text-[20px] px-4  ">
                <div className=" cursor-pointer  hover:scale-90 hover:text-[silver] duration-400">  table 2</div>  
            </div>
             

            
        </div>
    )
}

export default NavbarPanelAdmin;