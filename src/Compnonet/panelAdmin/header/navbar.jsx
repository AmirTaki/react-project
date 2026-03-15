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
                name: 'header menus',
                flag: false, 
                link: "/PanelAdmin/header/menus"
            },
            {
                id: 3, 
                name: 'megaMenu List',
                flag: false, 
                link: "/panelAdmin/megaMenu/list"
            },
            {
                id: 4, 
                name: 'megaMenu Category',
                flag: false, 
                link: "/panelAdmin/megaMenu/category"
            },
            {
                id: 5, 
                name: 'megaMenu Series',
                flag: false, 
                link: "/panelAdmin/megaMenu/series"
            },
            {
                id: 6, 
                name: 'megaMenu Image',
                flag: false, 
                link: "/panelAdmin/megaMenu/image"
            },
            {
                id: 7, 
                name: 'background Slider',
                flag: false, 
                link: "/panelAdmin/session/backgroundslider"
            },
            {
                id: 8, 
                name: 'scroll Slider',
                flag: false, 
                link: "/panelAdmin/session/scrollSlider"
            },
            {
                id: 9, 
                name: 'grid Image',
                flag: false, 
                link: "/panelAdmin/session/gridImage"
            },
            {
                id: 10, 
                name: 'slider Page',
                flag: false, 
                link: "/panelAdmin/session/SliderPage"
            },
            {
                id: 11, 
                name: 'image Advert',
                flag: false, 
                link: "/panelAdmin/session/ImageAdvert"
            },
            {
                id: 12, 
                name: 'popular',
                flag: false, 
                link: "/panelAdmin/session/Popular"
            },
            {
                id: 13, 
                name: 'resources Image ',
                flag: false, 
                link: "/panelAdmin/session/resourceImage"
            },
            {
                id: 14, 
                name: 'session Menu',
                flag: false, 
                link: "/panelAdmin/session/menuSession"
            },
            {
                id: 15, 
                name: 'session Menu Item',
                flag: false, 
                link: "/panelAdmin/session/menuItemSession"
            },
            {
                id: 16, 
                name: 'advert Board',
                flag: false, 
                link: "/panelAdmin/session/advertBoard"
            },
            
            {
                id: 17, 
                name: 'advert Yellow',
                flag: false, 
                link: "/panelAdmin/footer/advertYellow"
            },
            
        ]
    })
    return(
        <div className=" flex flex-col items-left  bg-[#252525]! border-l border-white h-screen border-b border-b-[1px_solid_white]">
            <div 
                className=" border-b flex justify-end px-3 items-center h-10 text-2xl w-full"
            >
                <BiSolidExit 
                    className=" hover:text-yellow-300 duration-300 cursor-pointer"
                    onClick={() => {setNavbar(false)}}
                /> 
            </div>
            <div className="overflow-y-auto   gap-3 flex flex-col navbarPanelAdmin   ">
                {state.list?.map((item) => {
                    return(           
                        <div key = {item.id} className=" text-[20px] px-4 my-2 ">
                            <Link to = {item.link}>
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
        </div>
    )
}

export default NavbarPanelAdmin;