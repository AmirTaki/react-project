import { useEffect, useReducer, useState } from "react";
import { BiSolidExit } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavbarPanelAdmin = ({setNavbar, id}) => {

    useEffect(() =>{
        dispatch({type : "clickLink", payload: {id : id}})
    }, [])

    const reducer = (state, action) => {
        switch(action.type){
            case "clickLink":
                const {id} = action.payload
          
                const newList = state.list.map((item) => ({...item, flag : item.id === id ? true : false}));
              
                return {...state, list: newList}
                

            default :
                return state
        }
    
    }
    const [state, dispatch] =  useReducer(reducer, {
        list: [
            {      
                id: 0, 
                name: 'panelAdmin',
                flag: false, 
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
            {
                id: 3, 
                name: 'MegaMenu List',
                flag: false, 
                link: "/panelAdmin/megaMenu/list"
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
                        
                    >
                        <Link to = {item.link}
     
                        >
                            <div 
                                // onClick={() => {dispatch({type: 'clickLink', payload: {id: item.id}})}}
                              className={`cursor-pointer  hover:scale-90 hover:text-[silver] duration-400 ${item.flag ? "text-red-500 scale-90 " : ""}`}
                            >
                                {item.name} 
                            </div>
        
                        </Link>
                    </div>
                )
            })}    
        </div>
    )
}

export default NavbarPanelAdmin;