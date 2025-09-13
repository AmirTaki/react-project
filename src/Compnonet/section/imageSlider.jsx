const ImageSlider = () => {
    return (
       <div className="w-[100%] h-[600px] bg-blue-500 flex items-center justify-center">
            <div className="
                w-[90%] h-[500px] bg-red-500 lg:bg-yellow-500 sm:bg-green-500
                lg:flex! lg:flex-wrap lg:flex-col lg:justify-center! lg:items-center lg:overflow-x-scroll! lg:gap-3
                "
            
            >
                <div className="w-[200px] h-[400px] bg-sky-200"></div>
                <div className="w-[200px] h-[400px] bg-sky-300"></div>
                <div className="w-[200px] h-[400px] bg-sky-400"></div>
                <div className="w-[200px] h-[400px] bg-sky-500"></div>
                <div className="w-[200px] h-[400px] bg-sky-600"></div>
                <div className="w-[200px] h-[400px] bg-sky-700"></div>
                <div className="w-[200px] h-[400px] bg-red-200"></div>
                <div className="w-[200px] h-[400px] bg-red-300"></div>
                <div className="w-[200px] h-[400px] bg-red-400"></div>
                <div className="w-[200px] h-[400px] bg-red-500"></div>
                <div className="w-[200px] h-[400px] bg-red-600"></div>
                <div className="w-[200px] h-[400px] bg-red-700"></div>

            </div>
       </div>
    )
}

export default ImageSlider