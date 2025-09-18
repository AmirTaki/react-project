const WhiteBoard = () => {
    const Menus = ['PRODUCTS', 'SPORTS', 'COLLECTIONS', 'SUPPORT', 'COMPANY INFO']
    const Items = ['Help', 'Returns & Exchanges', 'Shipping', 'Order Tracker', 'Store Locator', 'Size Charts', 'Gift Card Balance', 'How to Clean Shoes', 'Bra Fit Guide', 'Breathing for Running', 'Promotions', 'Sitemap']
    return(
        <>
            <div className="w-[100%] h-[500px] bg-gray-500 max-lg:hidden! flex items-center justify-evenly">
                <div className="w-[10%] h-[400px] bg-green-400"></div>
                <div className="w-[10%] h-[400px] bg-red-400"></div>
                <div className="w-[10%] h-[400px] bg-blue-400"></div>
                <div className="w-[10%] h-[400px] bg-pink-400"></div>
            </div>
        </>
    )
}

export default WhiteBoard;