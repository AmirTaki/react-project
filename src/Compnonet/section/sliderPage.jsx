const SliderPage = () => {
    return(
        <div className="w-[100%] h-[700px] bg-gray-600 flex items-center justify-center">
            <div className="w-[70%] h-[500px] bg-blue-200 flex flex-col flex-wrap overflow-scroll">

                <div className="w-[33.3%] h-[500px] bg-amber-400"></div>
                <div className="w-[33.3%] h-[500px] bg-red-400"></div>
                <div className="w-[33.3%] h-[500px] bg-blue-400"></div>
                <div className="w-[33.3%] h-[500px] bg-green-400"></div>
                <div className="w-[33.3%] h-[500px] bg-yellow-400"></div>

            </div>


            <div className="">click right</div>
        </div>
    )
}

export default SliderPage