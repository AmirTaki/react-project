const BlackBoard = () => {
    return (
        <>
            <div className="w-[100%] h-[300px] bg-black flex  items-center justify-around overflow-hidden">
                <div className="w-[150px] h-[250px] bg-tra text-white flex flex-col  gap-5 ">
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Help</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Returns & Exchanges</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Order Tracker</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Shipping</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Promotions</div>
                    <div className="hover:text-gray-400 cursor-pointer duration-300">Sitemap</div>
                </div>
                <div className="w-[100px] h-[250px] bg-green-500"></div>

            </div>
        </>
    )
}

export default BlackBoard;