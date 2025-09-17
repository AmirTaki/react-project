const Popular = () => {
    return(
        <div className="flex bg-green-500 w-[100%] items-center justify-center h-[400px]">
             <div className="flex flex-col bg-amber-200  w-[90%] h-[300px]">
            <div className="bg-red-500" >
                <h1>Popular right now</h1>
            </div>
            <div className="bg-blue-500 grid grid-cols-3 h-[100px]">
                <div className="bg-gray-200 w-[140px] h-[10px]">
                    <h1>Ultraboost</h1>
                </div>
                <div className="bg-gray-300 w-[140px] h-[10px]"></div>
                <div className="bg-gray-400 w-[140px] h-[10px]"></div>
                <div className="bg-gray-500 w-[140px] h-[10px]"></div>
                <div className="bg-gray-600 w-[140px] h-[10px]"></div>
                <div className="bg-gray-700 w-[140px] h-[10px]"></div>
            </div>
        </div>
        </div>
       
    )
}

export default Popular