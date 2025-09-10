
import { useContext } from "react"
import { ContextHeaderBottom } from "./headerBottom"
import ProductMegaMenu from "./productMegaMenu"
import { GlobalHeaderScroll } from "./header"



const MenuMegaMenu = ({menu, loc}) => {
    const {scrollTop} = useContext (GlobalHeaderScroll)
    const { lists, navbar,  state,  listHandler, handlerProductMenu , exitNavbar, EnterHandler, LeaverHandler}  = useContext(ContextHeaderBottom)
    return(
        <div key = {loc} className={`${navbar ? "" :""}`}>
            {/* Menu  onMouseEnter={(e)=> {handlerHeightNavbar(loc)}} */}
            <div onMouseLeave={ ()=> {LeaverHandler(loc)}} onMouseEnter={()=>{EnterHandler(loc)}}    className={`${navbar ? "menu group/menu duration-500! bg-transparent " : "group/menu hover:border-b-2!  hover:border-b-gray-950!  relative "}`}>
            {/* title menu */}
            <div className= {`${navbar? "flex justify-between px-3 bg-transparent h-[50px] items-center cursor-pointer  " : "h-[60px] flex items-center justify-center cursor-pointer "}`}>
                <div className={`${navbar ? "text-gray-400 group-hover/menu:text-gray-600! " : "p-3"}`}>{menu}</div>
                <div className={`${navbar ?  "text-gray-400 group-hover/menu:rotate-180 group-hover/menu:text-red-500! duration-300!" : "hidden"}`}><i className="bi bi-chevron-down"></i></div>
            </div>
            {/* {heightNav} */}
            {/* megaMenu   => group-hover/menu:h-[200px]   */}
            {/*  group-hover/menu:h-[${state.heightNavbar}]!  */}
            <div   
                style={{height: state.heightNavbar[loc]}} 
                className={` megaContainer  h-[0]    
                    ${navbar ? "bg-gray-100  overflow-hidden  duration-500!" : "bg-white h-[0] hidden!   rounded-2xl shadow-2xl left-[10%] top-[101px] fixed group-hover/menu:flex!  duration-500! group-hover/menu:h-[500px]!  overflow-hidden  animate-mege!  "}
                    ${scrollTop > 90 ? "top-[60.40px]!":"top-[101px]!"}
                    `}  
                >
                {/* container list */}
                <div className={` ${navbar ? "list": "list flex  items-center bg-transparent  h-[500px] flex-col w-[80vw]   "}`}>
                {/* category */}
                    <div className = {`${navbar ? "hidden" : "h-[30px] flex items-center text-gray-900/30   "}`}>Category Tilte </div> 
                    {/* container List  */}
                
                    {lists.map((pr, ind ) => (
                        <ProductMegaMenu key = {ind} loc = {loc}  pr = {pr} ind = {ind} />
        
                    ))}      
                </div>
            </div>
            </div>
        </div>
    )
}

export default MenuMegaMenu;