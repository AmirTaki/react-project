const WhiteBoard = () => {
    // 'SUPPORT', 'COMPANY INFO'
    const Menus = ['PRODUCTS', 'SPORTS', 'COLLECTIONS','SUPPORT', 'COMPANY INFO' ]
    const Items = ['Help', 'Returns & Exchanges', 'Shipping', 'Order Tracker', 'Store Locator', 'Size Charts', 'Gift Card Balance', 'How to Clean Shoes', 'Bra Fit Guide', 'Breathing for Running', 'Promotions', 'Sitemap']
    return(
        <>
            <div className="w-[100%] h-[100%] bg-r max-md:hidden! flex items-start justify-center gap-14 ">
                {Menus.map((menu, index) => (
                    <div key = {index} className="w-[15%]     bg-white  my-20  flex flex-col   gap-5">
                        <div className="text-xl font-bold  ">{menu}</div>
                        <div className="flex flex-col gap-5 text-gray-400 text-md ">                      
                            {Items.map((item, key) => (
                                <div key = {key} className="hover:text-gray-600 duration-500 cursor-pointer hover:underline">{item}</div>
                            ))}
                        </div>
                    </div>
                ))}
             
               
                
                

            </div>
        </>
    )
}

export default WhiteBoard;