const WhiteBoard = () => {
    const Menus = ['PRODUCTS', 'SPORTS', 'COLLECTIONS', 'SUPPORT', 'COMPANY INFO']
    const Items = ['Help', 'Returns & Exchanges', 'Shipping', 'Order Tracker', 'Store Locator', 'Size Charts', 'Gift Card Balance', 'How to Clean Shoes', 'Bra Fit Guide', 'Breathing for Running', 'Promotions', 'Sitemap']
    return(
        <>
            <div className="w-[100%] h-[500px] bg-gray-500 max-lg:hidden! flex items-center justify-evenly ">
                {Menus.map((menu, index) => (
                    <div key = {index} className="w-[200px] h-[400px] bg-white overflow-hidden  flex flex-col items-start gap-5">
                        <div className="text-2xl font-bold  ">{menu}</div>
                        <div className="flex flex-col gap-3 text-gray-400 text-xl ">
                            <div className="hover:text-gray-600 duration-500 cursor-pointer hover:underline">item 1</div>
                            <div className="hover:text-gray-600 duration-500 cursor-pointer hover:underline">item 2</div>
                            <div className="hover:text-gray-600 duration-500 cursor-pointer hover:underline">item 3</div>
                            <div className="hover:text-gray-600 duration-500 cursor-pointer hover:underline">item 4</div>
                            <div className="hover:text-gray-600 duration-500 cursor-pointer hover:underline">item 5</div>
                        </div>
                    </div>
                ))}
             
               
                
                

            </div>
        </>
    )
}

export default WhiteBoard;