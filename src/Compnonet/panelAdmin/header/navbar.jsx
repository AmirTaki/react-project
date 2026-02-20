import { BiSolidExit } from "react-icons/bi";
const NavbarPanelAdmin = ({setNavbar}) => {
    const list = ['users ', 'table2', 'table3', 'table4']
    return(
        <div className="w-80 min-h-screen border-l-2 flex flex-col items-left gap-4    ">
            <div 
                className=" border-b flex justify-end px-3 items-center h-10 text-2xl w-full"
            >
                <BiSolidExit 
                    className=" hover:text-yellow-300 duration-300 cursor-pointer"
                    onClick={() => {setNavbar(false)}}
                /> 
            </div>

            {list?.map((item, ind) => {
                return(
                    <div key = {ind} className=" text-[20px] px-4  ">
                        <div className=" cursor-pointer  hover:scale-90 hover:text-[silver] duration-400">  {item}</div>  
                    </div>
                )
            })}

            
        </div>
    )
}

export default NavbarPanelAdmin;