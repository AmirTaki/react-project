import { useContext } from "react"
import { ContextHeaderBottom } from "./headerBottom"
import labtop from "../../assets/fwebp.webp"


const ProductMegaMenu = ({loc, pr , ind}) => {
    const { lists, navbar,  state,  listHandler, handlerProductMenu , exitNavbar, EnterHandler, LeaverHandler}  = useContext(ContextHeaderBottom)
    
    return(
        <div  key = {ind} className={`${navbar ? "" : "    hover:bg-gray-100 duration-300  group/list w-[80%]  m-2"}`}>    
            {/* title List */}
            <div onClick = {()=> {listHandler(`${loc}${ind}`)}} className={`listContainer ${navbar ? "flex justify-between px-4 bg-transparent  text-gray-400 hover:text-gray-700 cursor-pointer hover:bg-sky-100!  duration-150 h-[50px] items-center" : "   h-[40px]  justify-center  text-xl flex flex-col  pl-[10px] text-gray-600   hover:text-blue-600 cursor-pointer hover:bg-gray-100 duration-300  rounded-4xl!"}`}>
                <div className={`${navbar ? "" : ""}`}>{pr}</div>
                <div className={`${navbar ? "" : "hidden"}`}><i className="bi bi-chevron-right"></i></div>
            </div>


            {/* container product ============================================================> Hidden  =>   */}
            <div className={`${navbar ? "bg-white shadow-2xl top-0 w-full h-full flex-wrap! flex-col flex!   overflow-hidden containerProduct fixed! -left-300 " : "   z-10!  fixed!  w-[90vw] top-0 -left-[0px]! bg-white shadow-2xl rounded-2xl border-l-1!  hidden  h-[500px] ml-0 p-5  border-gray-300!  flex-row!  "}  
            ${state.productMenuNavbar[`${loc}${ind}`] ? "left-0! duration-500!" : "-left-300! duration-700!"} ${state.productMenu[`${loc}${ind}`] ? "flex! animate-productMenu!":"" } ${state.animationProductMenu[`${loc}${ind}`] & navbar === false? "animate-productMenuReverse!" : ""}` }>
            <i onClick = {()=>{handlerProductMenu(`${loc}${ind}`)}} className={`${navbar ? "hidden": "text-red-200 hover:text-red-500 duration-300 cursor-pointer font-bold right-3 text-2xl absolute bi bi-x-circle"}`}></i>
            
            <div className={`${navbar ? "bg-transparent h-[6%] w-full border-b-1! border-b-gray-100! fixed! flex justify-between items-center px-5": "hidden"}`}>
                <div onClick={()=> {listHandler(`${loc}${ind}`)}} className="text-gray-200 hover:scale-125 cursor-pointer duration-200 hover:text-gray-400"><i className="bi bi-chevron-left pr-2"></i>LEFT</div>
                <div onClick={()=>{exitNavbar(`${loc}${ind}`)}}  className="text-gray-200 hover:scale-125 cursor-pointer duration-200 hover:text-red-400"><i className="bi bi-x-circle"></i></div>
            </div>
            {/* category */}
            <div className={`${navbar ? " flex flex-col w-[50%] h-[45%] mt-[9%] bg-transparent overflow-hidden border-l-gray-100 border-r-1!" :" flex flex-col  w-[35vw]  overflow-hidden border-l-gray-100 border-r-1!"}`} >
                <div className = "h-[50px] flex items-center text-gray-900/20 pl-[20px]  font-bold ">BY CATEGORY</div>
                {/* category item */}
                <div className=" flex bg-white h-[50px]  items-center!  pl-[10px] text-gray-500 cursor-pointer hover:bg-gray-100 duration-300 hover:text-blue-500   group/category">
                    <div className="pr-1 group-hover/category:text-gray-500!  hover:text-blue-500! "><i className="bi bi-anthropic"></i></div>
                    <div className="">category</div>
                </div>
            </div>
            {/* serics */}
            <div className={`${navbar ? "flex flex-col w-[50%] h-[45%] bg-transparent overflow-hidden border-l-gray-100 border-r-1! border-t-gray-100 border-t-1!" :"flex flex-col  w-[35vw] overflow-hidden border-l-gray-100 border-r-1!"}`}>
                <div className = "h-[50px] flex items-center text-gray-900/20 pl-[20px]  font-bold ">BY SERYS</div>
                {/* serics item */}
                <div className=" flex bg-white h-[50px] items-center!  pl-[10px] text-gray-500 cursor-pointer hover:bg-gray-100 duration-300 hover:text-blue-500  group/category">
                <div className="">serics</div>
                </div>
            </div>
            {/* image */}
            <div className={`${navbar ? "flex flex-col justify-center h-[95%] bg-transparent w-[50%]  mt-[9%]   items-center gap-10 " : "flex flex-col w-[35vw]    overflow-hidden   justify-center! items-center! gap-5 "}`}>
            
                {/* item image */}
                <div className={` bg-gray-100 flex items-center justify-center flex-col ${navbar ? "w-[225px] h-[225px] mx-30" : "w-[190px] h-[200px] mx-30 "}`}>
                <img src={labtop} className={`${navbar ? "w-[150px] h-[150px]" : "bg-transparent w-[150px] h-[150px]"}`}  alt="" />
                <div className={`text-center text-gray-400  hover:text-blue-600 duration-300 cursor-pointer ${navbar ? "w-[150px] text-[14px]" : "bg-transparent w-[130px] text-[12px] "}`}>ASUS Zenbook Duo (2024) UX8406</div> 
                </div>

                {/* item image */}
                <div className={` bg-gray-100 flex items-center justify-center flex-col ${navbar ? "w-[225px] h-[225px] mx-30" : "w-[190px] h-[200px] mx-30 "}`}>
                <img src={labtop} className={`${navbar ? "w-[150px] h-[150px]" : "bg-transparent w-[150px] h-[150px]"}`}  alt="" />
                <div className={`text-center text-gray-400  hover:text-blue-600 duration-300 cursor-pointer ${navbar ? "w-[150px] text-[14px]" : "bg-transparent w-[130px] text-[12px] "}`}>ASUS Zenbook Duo (2024) UX8406</div> 
                </div>
                                                                    
            </div>
            </div>
        </div>
    )

}

export default ProductMegaMenu;