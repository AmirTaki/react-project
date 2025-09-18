const AdvertYellow = () => {
    return(
        <>
            <div className=" bg-[rgb(238,232,55)] h-[120px] w-[100%] flex justify-center items-center gap-7 relative
            max-lg:flex-col max-lg:h-[180px]">
                <div className="text-2xl font-bold">
                    <h2>JOIN OUR ADICLUB & GET 15% OFF.</h2>
                </div>
                <div className=" bg-black text-white w-100 h-16 flex items-center p-2 cursor-pointer group z-20!
                    hover:shadow-[10px_10px_1px_black]! duration-500
                     rounded ">
                    <div>SIGN UP FOR FREE</div>
                    <div className=" transform pl-2  group-hover:translate-x-26!  duration-500!"><i className="group-hover:text-red-500 text-white duration-200 bi bi-caret-right-fill"></i></div>
                </div>
            </div>
            </>
        )
    }
    
export default AdvertYellow;