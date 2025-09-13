import { useState } from "react";
import IMG from "../../assets/t-shirt.avif";
const ImageSlider = () => {
    const [heart, setHeart] = useState('bi bi-heart')
    const handlerHeart = () => {
       setHeart (heart === 'bi bi-heart' ?  'bi bi-heart-fill' : 'bi bi-heart') 
    }
    return (
       <div className="w-[100%] h-[600px] bg-blue-500 flex items-center justify-center">
            <div className="
                w-[90%] h-[520px] bg-red-500 lg:bg-yellow-500 sm:bg-green-500
                lg:flex! lg:flex-wrap lg:flex-col lg:justify-center! lg:items-center lg:overflow-x-scroll! 
                sm:grid! sm:grid-cols-2! sm:justify-items-center sm:items-center sm:overflow-hidden
                grid! grid-cols-1! justify-items-center items-center overflow-hidden
                "
            
            >
                <div className="w-[250px] lg:h-[430px]  h-[250px] bg-white lg:mx-3 my-1 overflow-hidden rounded-2xl">
                    <div className="relative ">
                        <div onClick = {handlerHeart} 
                        className={`absolute right-2 top-2 cursor-pointer hover:text-gray-900  duration-300 
                                    ${heart === 'bi bi-heart' ? "text-gray-500" : "text-red-600!"}
                        `}>
                            <i className={`${heart}`}></i>
                        </div>
                        <img src={IMG} alt="" className="w-[100%] h-[100%] object-cover" />
                    </div>
                    <div className="bg-white flex flex-col  items-center ">
                        <div className="bg-white w-[100%] p-2 font-bold text-gray-700">
                            30$
                        </div>
                        <div className=" w-[95%]  p-1 text-gray-400 text-[16px]  hover:text-gray-800 duration-300">
                            Texas Tech Red Raiders Women's  College World Series Participant
                        </div>
                        <div className="bg-b w-[100%] px-2 my-1 text-gray-500  text-[14px]">
                            Performance
                        </div>
                    </div>
                </div>
                <div className="w-[250px] lg:h-[430px]  h-[250px] bg-white lg:mx-3 my-1 overflow-hidden rounded-2xl">
                    <div className="relative ">
                        <div onClick = {handlerHeart} 
                        className={`absolute right-2 top-2 cursor-pointer hover:text-gray-900  duration-300 
                                    ${heart === 'bi bi-heart' ? "text-gray-500" : "text-red-600!"}
                        `}>
                            <i className={`${heart}`}></i>
                        </div>
                        <img src={IMG} alt="" className="w-[100%] h-[100%] object-cover" />
                    </div>
                    <div className="bg-white flex flex-col  items-center ">
                        <div className="bg-white w-[100%] p-2 font-bold text-gray-700">
                            30$
                        </div>
                        <div className=" w-[95%]  p-1 text-gray-400 text-[16px]  hover:text-gray-800 duration-300">
                            Texas Tech Red Raiders Women's  College World Series Participant
                        </div>
                        <div className="bg-b w-[100%] px-2 my-1 text-gray-500  text-[14px]">
                            Performance
                        </div>
                    </div>
                </div>
                <div className="w-[250px] lg:h-[430px]  h-[250px] bg-white lg:mx-3 my-1 overflow-hidden rounded-2xl">
                    <div className="relative ">
                        <div onClick = {handlerHeart} 
                        className={`absolute right-2 top-2 cursor-pointer hover:text-gray-900  duration-300 
                                    ${heart === 'bi bi-heart' ? "text-gray-500" : "text-red-600!"}
                        `}>
                            <i className={`${heart}`}></i>
                        </div>
                        <img src={IMG} alt="" className="w-[100%] h-[100%] object-cover" />
                    </div>
                    <div className="bg-white flex flex-col  items-center ">
                        <div className="bg-white w-[100%] p-2 font-bold text-gray-700">
                            30$
                        </div>
                        <div className=" w-[95%]  p-1 text-gray-400 text-[16px]  hover:text-gray-800 duration-300">
                            Texas Tech Red Raiders Women's  College World Series Participant
                        </div>
                        <div className="bg-b w-[100%] px-2 my-1 text-gray-500  text-[14px]">
                            Performance
                        </div>
                    </div>
                </div>
                <div className="w-[250px] lg:h-[430px]  h-[250px] bg-white lg:mx-3 my-1 overflow-hidden rounded-2xl">
                    <div className="relative ">
                        <div onClick = {handlerHeart} 
                        className={`absolute right-2 top-2 cursor-pointer hover:text-gray-900  duration-300 
                                    ${heart === 'bi bi-heart' ? "text-gray-500" : "text-red-600!"}
                        `}>
                            <i className={`${heart}`}></i>
                        </div>
                        <img src={IMG} alt="" className="w-[100%] h-[100%] object-cover" />
                    </div>
                    <div className="bg-white flex flex-col  items-center ">
                        <div className="bg-white w-[100%] p-2 font-bold text-gray-700">
                            30$
                        </div>
                        <div className=" w-[95%]  p-1 text-gray-400 text-[16px]  hover:text-gray-800 duration-300">
                            Texas Tech Red Raiders Women's  College World Series Participant
                        </div>
                        <div className="bg-b w-[100%] px-2 my-1 text-gray-500  text-[14px]">
                            Performance
                        </div>
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