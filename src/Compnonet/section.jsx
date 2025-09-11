import { useEffect, useLayoutEffect, useRef, useState } from "react"
import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"

const Section = () => {
    const imgScroll =  useRef(null)
    
    

    const [t, St] = useState(0)
    
    useEffect(() => {
        
        setInterval(() => {
            const SliderImage =  document.querySelector(".sliderImage")
            
            SliderImage.style.scrollBehavior = "smooth"
            SliderImage.scrollLeft += window.innerWidth - 10

            if(SliderImage.scrollLeft >= SliderImage.scrollWidth - window.innerWidth ){
                SliderImage.scrollLeft = 0
            }    
            St((t) => (t+1))
        }, 5000)
            console.log('ok')
    }, [])
    
    const handlerRight = () => {
        const SliderImage =  document.querySelector(".sliderImage")
        
        SliderImage.style.scrollBehavior = "smooth"
        SliderImage.scrollLeft += window.innerWidth - 10

        if(SliderImage.scrollLeft >= SliderImage.scrollWidth - window.innerWidth ){
            SliderImage.scrollLeft = 0
        }  
    }

    
    const handlerImage = () => {
        const SliderImage =  document.querySelector(".sliderImage")
        SliderImage.style.scrollBehavior = "smooth"
        SliderImage.scrollLeft = 0
    }
   

    useEffect(() => {
        return() => {
            window.addEventListener('resize', handlerImage  )     
        }
    },[])

    const handlerLeft = () => {
        const SliderImage =  document.querySelector(".sliderImage")
        
        SliderImage.style.scrollBehavior = "smooth"
        SliderImage.scrollLeft -= window.innerWidth - 10

        if(SliderImage.scrollLeft < window.innerWidth - 10){
            SliderImage.scrollLeft = SliderImage.scrollWidth
        }
        
    }



    useEffect (() => {
        window.addEventListener('resize', handlerImage, )
        // clearInterval(Time)
        const SliderImage =  document.querySelector(".sliderImage")
        SliderImage.addEventListener("wheel", (e) => {
            // e.preventDefault()
        })

        return()=> {
            SliderImage.addEventListener("wheel", (e) => {
            // e.preventDefault()
            })  
        }

    }) 
 
    return(
        <div className={`bg-red-500 mt-[101px]  h-[600px]`}>
            
            <div className="">
                <div ref = {imgScroll} className="bg-blue-400 w-[100%] h-[600px]   sliderImage  overflow-hidden! flex  flex-col flex-wrap  relative!  ">
                    <div className="bg-green-200 w-[100%]! h-[600px]!  itemImg">
                        <img src={img1} className="w-[100%]! h-[100%]! object-cover" alt="" />
                    </div>
                    <div className="bg-green-200 w-[100%]! h-[600px]! itemImg ">
                        <img src={img2} className="w-[100%]! h-[100%]! object-cover" alt="" />
                    </div>
                    <div className="bg-green-200 w-[100%]! h-[600px]! itemImg ">
                        <img src={img3} className="w-[100%]! h-[100%]! object-cover" alt="" />
                    </div>
                    <div className="bg-green-200 w-[100%]! h-[600px]! itemImg ">
                        <img src={img4} className="w-[100%]! h-[100%]! object-cover" alt="" />
                    </div>
               
                </div>
                <div onClick = {handlerRight} className="bg-transparent absolute! top-[50%] right-[4%]">
                    <i className="bi bi-arrow-right-circle cursor-pointer text-3xl text-red-200 hover:text-red-800 duration-300"></i>
                </div>
                <div onClick  = {handlerLeft} className="bg-transparent absolute! top-[50%] left-[4%]">
                    <i className="bi bi-arrow-left-circle cursor-pointer text-3xl text-red-200 hover:text-red-800 duration-300"></i>
                </div>

                <div className="">
                    <div className=""></div>
                </div>
            </div>
          {t}
        </div>
    )
}

export default Section;