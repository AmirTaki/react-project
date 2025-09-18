const BlackBoard = () => {
    return (
        <>
            <div className="lg:hidden! w-[100%] h-[330px] bg-black flex  items-center justify-evenly overflow-hidden">
                <div className="w-[150px] h-[250px] bg-tra text-white flex flex-col  gap-5 ">
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Help</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Returns & Exchanges</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Order Tracker</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Shipping</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Promotions</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Sitemap</div>
                </div>
                <div className="w-[150px] h-[250px] bg-tra text-white flex flex-col  gap-5 ">
                    <div className="hover:text-gray-400 cursor-pointer duration-300">adiClub</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Store Finder</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Gift Cards</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">adidas Apps</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Size Charts</div>
                </div>
            </div>

            <div className="w-[100%] h-[500px] bg-gray-500 max-lg:hidden"></div>
        </>
    )
}

export default BlackBoard;