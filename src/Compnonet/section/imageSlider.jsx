import { useRef, useState } from "react";
import IMG from "../../assets/t-shirt.avif";
const ImageSlider = () => {
    const [heart, setHeart] = useState('bi bi-heart')
    const imgSlider =  useRef(null)
    const LISTIMG = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const leftHandler = () => {
        if(imgSlider.current)
        {
            imgSlider.current.style.scrollBehavior  = "smooth"
            imgSlider.current.scrollLeft -= 300 
        }
    }
    const rightHandler = () => {
        if(imgSlider.current)
        {
            imgSlider.current.style.scrollBehavior  = "smooth"
            imgSlider.current.scrollLeft += 300 
        }
    }
    const handlerHeart = () => {
       setHeart (heart === 'bi bi-heart' ?  'bi bi-heart-fill' : 'bi bi-heart') 
    }
    return (
       <div className="w-[100%] h-[600px] bg-white flex items-center justify-center relative">
        {/*  max-sm:bg-green-500! max-md:bg-amber-300! bg-red-500 */}
            <div
                ref = {imgSlider}
                className="
                    sliderImage
                    w-[90%] h-[520px] bg-white
                    flex! flex-wrap flex-col justify-center! items-center overflow-x-scroll 
                    max-md:grid! max-md:grid-cols-2! max-md:justify-items-center max-md:items-center max-md:overflow-hidden! 
                    max-sm:grid! max-sm:grid-cols-1! max-sm:justify-items-center max-sm:items-center max-sm:overflow-hidden! 
                "
            
            >
                {LISTIMG.map((item) => (
                    <div key = {item} className="w-[260px] h-[430px]  max-md:h-[250px] border-[1px]! max-md:border-0! border-gray-200 bg-white mx-3 my-1 overflow-hidden rounded-2xl">
                        <div className="relative ">
                            <div onClick = {handlerHeart} 
                            className={`absolute right-2 top-2 cursor-pointer hover:text-gray-900  duration-300 
                                        ${heart === 'bi bi-heart' ? "text-gray-500" : "text-red-600!"}
                            `}>
                                <i className={`${heart}`}></i>
                            </div>
                            <img src={IMG} alt="" className="w-[100%] h-[100%] object-cover" />
                        </div>
                        <div className="bg-white flex flex-col  items-center  max-md:hidden max-sm:hidden">
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
                ))}

            </div>
            <div onClick={rightHandler} className=" text-gray-300 hover:text-gray-700 cursor-pointer duration-300 max-md:hidden absolute top-[50%] right-[2%]">
                <i class="bi bi-chevron-double-right"></i>
            </div>
            <div onClick={leftHandler} className="text-gray-300 hover:text-gray-700 cursor-pointer duration-300 max-md:hidden absolute top-[50%] left-[2%]">
                <i class="bi bi-chevron-double-left"></i>
            </div>
       </div>
    )
}
export default ImageSlider