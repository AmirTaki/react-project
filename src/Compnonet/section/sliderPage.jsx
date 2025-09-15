import { useEffect, useRef, useState } from "react"
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
    const [conter, setConter] = useState(1)
    const listImg = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14 ]

    const right = () => {
       if (refSlide.current){



        // console.log(refSlide.current.scrollWidth);

        refSlide.current.style.scrollBehavior = "smooth";
        refSlide.current.scrollLeft += refSlide.current.offsetWidth
        // refSlide.current.scrollLeft = refSlide.current.offsetWidth * conter
        // console.log(refSlide.current.offsetWidth * conter)
        // setConter(conter + 1)

       }
    }
    const left = () => {
       if (refSlide.current){
        refSlide.current.style.scrollBehavior = "smooth";
        refSlide.current.scrollLeft -= refSlide.current.offsetWidth        
        // refSlide.current.scrollLeft = refSlide.current.offsetWidth * conter
        //         console.log(refSlide.current.offsetWidth * conter)
        //     setConter(conter - 1)

       }
    }
    if(refSlide.current){
        console.log(refSlide.current.scrollLeft)
    }
    useEffect(() => {
        const  handleImage = () => {
            refSlide.current.style.scrollBehavior = "smooth"
            refSlide.current.scrollLeft = 0
            setConter((conter) => (conter = 1))
        }

        window.addEventListener("resize", handleImage)

        return()=> {
            window.addEventListener('resize', handleImage )
        }
    }, [])

    return(
        <div  className="w-[100%] h-[700px] bg-gray-500 flex items-center justify-center relative">
            <div ref = {refSlide} className="w-[80%] h-[500px] bg-white flex flex-col flex-wrap  overflow-hidden! ">

                {listImg.map((item, index) => (
                    <div key = {index} className="w-[33.35%] p-3 max-lg:w-[50%] flex-col flex justify-center max-sm:w-[100%] h-[500px]  bg-white">
                        <img src={item} className="w-[100%] h-[100%]" alt="" />
                        <div className="bg-gray-300 h-[60px]  flex justify-center items-center text-center text-sm">AI-powered Everyday with AI PCs from ASUS</div>
                    </div>
                ))}
        
            </div>


            <div onClick={right} className="absolute top-[50%] right-[4%] hover:scale-125 duration-300 cursor-pointer text-gray-400 hover:text-black hover:duration-300!">
                <i className="text-2xl bi bi-arrow-right-square"></i>
            </div>
            <div onClick={left} className="absolute top-[50%] left-[4%] hover:scale-125 duration-300 cursor-pointer text-gray-400 hover:text-black hover:duration-300!">
                <i className="text-2xl  bi bi-arrow-left-square"></i>
            </div>
        </div>
    )
}

export default SliderPage