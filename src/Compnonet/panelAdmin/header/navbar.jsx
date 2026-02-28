import { useReducer, useState } from "react";
import { BiSolidExit } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavbarPanelAdmin = ({setNavbar}) => {

    const reducer = (state, action) => {
        switch(action.type){
            case "":
                return {...state}

            default :
                return state
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        list: [
            {      
                id: 0, 
                name: 'panelAdmin',
                flag: true, 
                link: "/PanelAdmin"
            },
            {
                id: 1, 
                name: 'users',
                flag: false, 
                link: "/PanelAdmin/UsersPanelAdmin"
            },
            {
                id: 2, 
                name: 'Header menus',
                flag: false, 
                link: "/PanelAdmin/header/menus"
            },
        ]
    })

    // const list = ['users ', 'table2', 'table3', 'table4']
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

            {state.list?.map((item) => {
                return(           
                    <div key = {item.id} className=" text-[20px] px-4 "
                        onClick={() => {handlerClick(item.id)}}
                    >
                        <Link to = {item.link}>
                            <div className={`cursor-pointer  hover:scale-90 hover:text-[silver] duration-400 ${item.flag ? "text-red-500 scale-90 " : ""}`}>  {item.name}</div>  
                        </Link>
                    </div>
                )
            })}
            
            {/* <div className=" text-[20px] px-4  ">
                <Link to = "">
                    <div className=" cursor-pointer  hover:scale-90 hover:text-[silver] duration-400">  users</div>  
                </Link>            
            </div>
            
            <div className=" text-[20px] px-4  ">
                <Link to = "">
                    <div className=" cursor-pointer  hover:scale-90 hover:text-[silver] duration-400"> Header menus</div>  
                </Link>
            </div>
              */}

            
        </div>
    )
}

export default NavbarPanelAdmin;