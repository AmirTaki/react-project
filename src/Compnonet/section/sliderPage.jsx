import { useRef } from "react"

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
        <div  className="w-[100%] h-[700px] bg-gray-600 flex items-center justify-center">
            <div ref = {refSlide} className="w-[70%] h-[500px] bg-blue-200 flex flex-col flex-wrap  overflow-hidden!">

                <div className="w-[33.34%] max-md:w-[50%] max-sm:w-[100%] h-[500px] bg-amber-400"></div>
                <div className="w-[33.34%] max-md:w-[50%] max-sm:w-[100%] h-[500px] bg-red-400"></div>
                <div className="w-[33.34%] max-md:w-[50%] max-sm:w-[100%] h-[500px] bg-blue-400"></div>
                <div className="w-[33.34%] max-md:w-[50%] max-sm:w-[100%] h-[500px] bg-green-400"></div>
                <div className="w-[33.34%] max-md:w-[50%] max-sm:w-[100%] h-[500px] bg-yellow-400"></div>
                <div className="w-[33.34%] max-md:w-[50%] max-sm:w-[100%] h-[500px] bg-green-400"></div>
                <div className="w-[33.34%] max-md:w-[50%] max-sm:w-[100%] h-[500px] bg-red-400"></div>
                <div className="w-[33.34%] max-md:w-[50%] max-sm:w-[100%] h-[500px] bg-blue-400"></div>
                <div className="w-[33.34%] max-md:w-[50%] max-sm:w-[100%] h-[500px] bg-green-400"></div>
                <div className="w-[33.34%] max-md:w-[50%] max-sm:w-[100%] h-[500px] bg-yellow-400"></div>

            </div>


            <div onClick={right} className="">click right</div>
            <div onClick={left} className="">click left</div>
        </div>
    )
}

export default SliderPage