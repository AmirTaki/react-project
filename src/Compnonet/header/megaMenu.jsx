const MegaMenu = () => {
    return(
        <>
            {/* container mega menu */}
                <div className="flex" >
              
                    {/* row 2 */}
                    <div  onClick={handlerMegaMenu} onMouseLeave={HandlerMouseLeaveMegaMenu} className={` ${navbar ? "  group border-b-1!  border-b-gray-100! hover:bg-sky-100 flex items-center justify-between px-3 cursor-pointer hover:text-gray-950!" : "item bg-amber-500 "}`}>
                        <div className=" group-hover:text-black bg-transparent flex items-center justify-center h-[60px] border-b-white! border-b-2 hover:border-b-2 hover:border-b-gray-900! cursor-pointer max-md:border-0! max-md:text-gray-500 ">
                            item
                        </div>
                        <i className="bi bi-chevron-down text-gray-300 hover:text-red-500 md:hidden group-hover:rotate-180 duration-300 group-hover:text-red-500">
                        </i>

                        {/* MegaMenu */}
                        <div className={` ${navbar ? "fixed hidden" : " hidden  fixed top-[101px] left-0 w-[100%] h-[500px] bg-gray-100 z-50   justify-center  "   } ${megeMenu ? "flex! " : "hidden!"} `   } >
                            {/* column1 */}
                            <div className={`${navbar ? "" :"bg-yellow-200 w-[300px]"}`}>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                                <div>item</div>
                            </div>
                            <div className={`${navbar ? "" : "flex "}`}>
                                {/* column2 */}
                                <div className={`${navbar ? "" : "bg-red-200 w-[300px]"}`}>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                </div>
                                {/* column3 */}
                                <div className={`${navbar ? "" : "bg-blue-200 w-[300px]"}`}>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                </div>
                                {/* column4 */}
                                <div className={`${navbar ? "" : "bg-green-200 w-[300px]"}`}>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                    <div>item</div>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                </div>
            {/* end container mega menu */}
        </>
    )
}

export default MegaMenu;