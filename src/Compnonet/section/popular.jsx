const Popular = () => {
    const Items = ['ultraboost', 'samba', 'campus', 'gazelle', 'soccer', 'spezial']
    return(
        <div className="flex justify-center  mt-20 bg-red-500 h-[250px] max-lg:h-[500px] overflow-hidden">
            <div className="flex flex-col gap-3 bg-transparent w-[90vw]  h-[300px]">
                <div className=" font-black text-2xl" >
                    <h1>Popular right now</h1>
                </div>
        
            <div className="grid grid-cols-3 h-[100px]   mt-5 gap-10 max-lg:grid-cols-1! w-[90vw] ">
                {Items.map((item, index) => (

                    <div key = {index} className=" bg-white w-[20vw] max-lg:w-[90vw]!  h-[33px]  duration-300 cursor-pointer group ">
                        <h1 className="font-bold">{item}</h1>
                        <div className="bg-black mt-3 w-[20vw] max-lg:w-[90vw] h-[2px] group-hover:h-[7px] duration-100"></div>
                    </div>
                ))}
              
            </div>
        </div>
        </div>
       
    )
}

export default Popular