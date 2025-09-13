import IMG from "../../assets/t-shirt.avif";
const ImageSlider = () => {
    return (
       <div className="w-[100%] h-[600px] bg-blue-500 flex items-center justify-center">
            <div className="
                w-[90%] h-[500px] bg-red-500 lg:bg-yellow-500 sm:bg-green-500
                lg:flex! lg:flex-wrap lg:flex-col lg:justify-center! lg:items-center lg:overflow-x-scroll! 
                sm:grid sm:grid-cols-2 sm:justify-items-center sm:items-center sm:overflow-hidden
                grid grid-cols-1 justify-items-center items-center overflow-hidden
                "
            
            >
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-sky-200 lg:mx-3 my-1 overflow-hidden rounded-2xl">
                    <div className="relative">
                        <div className=""><i class="bi bi-heart"></i></div>
                        <div className=""><i class="bi bi-heart-fill"></i></div>
                        <img src={IMG} alt=""  />
                    </div>
                </div>
                
                
                
                {/* <div className="w-[250px] lg:h-[400px]  h-[240px] bg-sky-300 lg:mx-3 my-1"></div>
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-sky-400 lg:mx-3 my-1"></div>
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-sky-500 lg:mx-3 my-1"></div>
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-sky-600 lg:mx-3 my-1"></div>
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-sky-700 lg:mx-3 my-1"></div>
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-red-200 lg:mx-3 my-1"></div>
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-red-300 lg:mx-3 my-1"></div>
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-red-400 lg:mx-3 my-1"></div>
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-red-500 lg:mx-3 my-1"></div>
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-red-600 lg:mx-3 my-1"></div>
                <div className="w-[250px] lg:h-[400px]  h-[240px] bg-red-700 lg:mx-3 my-1"></div> */}

            </div>
       </div>
    )
}
//  sm:grid sm:grid-cols-3 sm:justify-items-center sm:items-center
export default ImageSlider