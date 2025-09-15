import { useRef } from "react"
import slide1 from "../../assets/slide1.webp"
import slide2 from "../../assets/slide2.webp"
import slide3 from "../../assets/slide3.webp"
import slide4 from "../../assets/slide4.webp"
import slide5 from "../../assets/slide5.webp"
import slide6 from "../../assets/slide6.webp"
import slide7 from "../../assets/slide7.webp"
import slide8 from "../../assets/slide8.webp"
import slide9 from "../../assets/slide9.webp"
import slide10 from "../../assets/slide10.webp"
import slide11 from "../../assets/slide11.webp"
import slide12 from "../../assets/slide12.webp"
import slide13 from "../../assets/slide13.webp"
import slide14 from "../../assets/slide14.webp"

const SliderPage = () => {
    const refSlide =    useRef()
    const right = () => {
       if (refSlide.current){
        refSlide.current.style.scrollBehavior = "smooth"
        refSlide.current.scrollLeft += refSlide.current.offsetWidth

       }
    }
    const left = () => {
       if (refSlide.current){
        refSlide.current.style.scrollBehavior = "smooth"
        refSlide.current.scrollLeft -= refSlide.current.offsetWidth

       }
    }
    return(
        <div  className="w-[100%] h-[700px] bg-gray-600 flex items-center justify-center relative">
            <div ref = {refSlide} className="w-[80%] h-[500px] bg-blue-200 flex flex-col flex-wrap  overflow-hidden!">

                <div className="w-[33.34%] max-lg:w-[50%] flex-col flex justify-center max-sm:w-[100%] h-[500px] bg-amber-400">
                    <img src={slide1} className="w-[100%] h-[100%]" alt="" />
                    <div className="bg-gray-300 h-[50px] flex justify-center items-center text-sm">AI-powered Everyday with AI PCs from ASUS</div>
                </div>
                <div className="w-[33.34%] max-lg:w-[50%] max-sm:w-[100%] h-[500px] bg-red-400"></div>
                <div className="w-[33.34%] max-lg:w-[50%] max-sm:w-[100%] h-[500px] bg-blue-400"></div>
                <div className="w-[33.34%] max-lg:w-[50%] max-sm:w-[100%] h-[500px] bg-green-400"></div>
                <div className="w-[33.34%] max-lg:w-[50%] max-sm:w-[100%] h-[500px] bg-yellow-400"></div>
                <div className="w-[33.34%] max-lg:w-[50%] max-sm:w-[100%] h-[500px] bg-green-400"></div>
                <div className="w-[33.34%] max-lg:w-[50%] max-sm:w-[100%] h-[500px] bg-red-400"></div>
                <div className="w-[33.34%] max-lg:w-[50%] max-sm:w-[100%] h-[500px] bg-blue-400"></div>
                <div className="w-[33.34%] max-lg:w-[50%] max-sm:w-[100%] h-[500px] bg-green-400"></div>
                <div className="w-[33.34%] max-lg:w-[50%] max-sm:w-[100%] h-[500px] bg-yellow-400"></div>

            </div>


            <div onClick={right} className="absolute top-[50%] right-[4%]">
                <i className="text-2xl bi bi-arrow-right-square"></i>
            </div>
            <div onClick={left} className="absolute top-[50%] left-[4%] hover:scale-125 duration-300 cursor-pointer">
                <i className="text-2xl  bi bi-arrow-left-square"></i>
            </div>
        </div>
    )
}

export default SliderPage