import { useEffect, useLayoutEffect, useRef, useState } from "react"
import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"

const Section = () => {
    const imgScroll =  useRef(null)
    const imgList = [0, 1, 2, 3, 4]
    const [conter, setConter] = useState(0);
    const [changeColor, setChangeColor] = useState({
       
    })


    const handleClickItem = (index) => {        
        setConter((conter) => (conter = index))
        const SliderImage =  document.querySelector(".sliderImage")
        SliderImage.style.scrollBehavior = "smooth"
        SliderImage.scrollLeft = (index * window.innerWidth) - 10
        setChangeColor((colors) => {
            const newColors = {};
            for (const color in colors){
                colors[color] = false
            }
            return newColors;
        })
        setChangeColor((color) => ({...color, [index] : true}) )
    }

    const handlerRight = () => {
        (conter >= (document.querySelectorAll('.itemImg').length ) - 1 ) ? handleClickItem(0):handleClickItem(conter + 1)     
    }

    const handlerLeft = () => {
        (conter <= 0 ) ? handleClickItem((document.querySelectorAll('.itemImg').length ) - 1 ) : handleClickItem(conter - 1)
    }


    useEffect(() => {
      const timeLaps = setInterval(() => {
        (conter >= (document.querySelectorAll('.itemImg').length ) - 1 ) ? handleClickItem(0):handleClickItem(conter + 1)     
      },5000)
    //   return() => 
        // clearInterval(timeLaps)
      
    },[])
 
    useEffect(() => {
        handleClickItem(0)
        window.addEventListener('resize', setHandlerImg)
        return() => {
            window.addEventListener('resize',  setHandlerImg)    
        }
    },[])

    const setHandlerImg = () => {
        handleClickItem(0)
    }
  
 
    return(
        <div className={`bg-red-500 mt-[101px]  h-[600px]`}>
            
            <div className=" relative!">
                <div ref = {imgScroll} className="bg-blue-400 w-[100%] h-[600px]   sliderImage  overflow-hidden! flex  flex-col flex-wrap  relative!  ">
                    <div className="bg-green-200 w-[100%]! h-[600px]!  itemImg">
                        <img src={img1} className="w-[8%]! h-[100%]! object-cover" alt="" />
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
                    <div className="bg-green-200 w-[100%]! h-[600px]! itemImg ">
                        <img src={img5} className="w-[100%]! h-[100%]! object-cover" alt="" />
                    </div>
               
                </div>
                <div onClick = {handlerRight} className="bg-transparent absolute! top-[50%] right-[4%]">
                    <i className="bi bi-arrow-right-circle cursor-pointer! text-3xl text-red-200 hover:text-red-800! duration-300"></i>
                </div>
                <div onClick  = {handlerLeft} className="bg-transparent absolute! top-[50%] left-[4%]">
                    <i className="bi bi-arrow-left-circle cursor-pointer! text-3xl text-red-200 hover:text-red-800! duration-300"></i>
                </div>

                <div className=" w-fit h-10 flex gap-5 absolute bottom-[5%] left-[50%] right-[50%] bg-transparent  items-center justify-center">
                    {imgList.map((item, index) => (
                        
                        <div onClick = {() => {handleClickItem(index)}} 
                        className={`clickImgItem rounded-2xl w-[20px] h-[10px]  bg-sky-300 hover:bg-red-500! cursor-pointer! duration-300! ${changeColor[index] ? "bg-red-500! scale-150! w-10!" : "bg-sky-300! scale-100!"}`} key  = {index}> </div>
                    ))}
                </div>
            </div>
          {conter}
        </div>
    )
}

export default Section;