import { useEffect, useReducer, useRef } from "react"
import img1 from "../../assets/img1.webp"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"
import img6 from  "../../assets/img2.jpg"
import img7 from  "../../assets/img3.jpg"
import img8 from  "../../assets/img4.jpg"
import img9 from  "../../assets/img5.jpg"
import img10 from  "../../assets/img7.jpg"
import img11 from  "../../assets/img9.jpg"

const ImageAdvert = () => {
    const listImg = [img1 ,img2, img3, img4, img5, img6, img7, img8, img9 , img10, img2]
    const refSlider = useRef()
  

    const reducer = (state, action) => {
        switch(action.type) {
            case "conter" : 
                return {...state, conter : 0}
            case "right" : 
                return {...state, conter : state.conter + action.payload }
          
            case "left" : 
                return {...state, conter : state.conter - action.payload }

            case "handerClick" :
                return {...state , conter : action.payload}

            case 'slide' : 
                if(refSlider.current){
                    refSlider.current.style.scrollBehavior = "smooth";     
                    refSlider.current.scrollLeft = refSlider.current.offsetWidth * state.conter
                    return {...state}
                }
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        conter : 0,
        maxConterLg : Math.ceil(listImg.length /  2 ) , 
        maxConter : Math.ceil(listImg.length /  4 ) ,
        color : {0: 'red', 1: "blue", 2:'green', 3: "yellow", 4:'pink' } 
    })
    
    const RightButton = () => {
        dispatch({type : "right", payload : 1})
    }
    
    const LeftButton = () => {
        dispatch({type : "left", payload : 1})
    }
    useEffect(()=> {
        dispatch({type : 'slide'})
    },[state.conter])
    
    const changeItem = (index) => {
        dispatch({type : 'handerClick' , payload : index})
    } 

    useEffect(() => {
        const handlerSlide = () => {
            dispatch({type : "conter"})
        }

        window.addEventListener("resize", handlerSlide)
        return() => {
            window.addEventListener('resize', handlerSlide)
        }
    },[])

    
    return(
        <>

        <div className="flex h-[500px] w-[100%] bg-gray-300 relative!">
            <div className="h-[500px] w-[50%] bg-red-500 max-lg:hidden "></div>
            
            <div ref = {refSlider} className="h-[500px] w-[50%] max-lg:w-[100%] bg-green-500 flex flex-col flex-wrap overflow-x-scroll">
                {listImg.map(((item, index) => (
                    <div key = {index} className="h-[50%] w-[50%] max-lg:h-[100%] max-sm:w-[100%]  ">
                        <img src={item} className="h-[100%]!" alt="" />
                    </div>
                )))}
   
            </div>

            <div className={` ${state.conter  >= state.maxConterLg - 1 ? "max-lg:hidden!" : "flex!" }  ${state.conter >= state.maxConter - 1 ? "lg:hidden!" : "flex!"} flex! absolute top-[50%] right-3 max-sm:hidden! hover:scale-150 duration-300 text-white hover:text-gray-400 cursor-pointer`}>
                <i onClick = {RightButton} className="bi bi-caret-right text-2xl"></i>
            </div>
            <div className={`${state.conter <= 0 ? "hidden!" : "flex!"} absolute top-[50%] left-[52%] max-lg:left-3! max-sm:hidden! hover:scale-150 duration-300 text-white hover:text-gray-400 cursor-pointer`}>
                <i onClick={LeftButton} className="bi bi-caret-left  text-2xl"></i>
            </div>

            <div className="absolute flex items-center justify-center  w-[100%] bottom-30 sm:hidden">
                <div className="bg-gray-500 flex items-center justify-center  w-[40%] rounded-4xl">
                    {listImg.map((_, index)=> (
                        <div onClick={() => {changeItem(index)}} key = {index} className="w-6 h-3 cursor-pointer hover:grayscale-50 rounded-4xl bg-red-600"></div>
                    ))}
                </div>
             
            </div>
        </div>     



        <div className="h-[300px] w-[100%]"></div>
        </>
      
    )
}

export default ImageAdvert

/*

<div className="relative flex h-[500px] w-[100]! bg-blue-400 flex">
            <div className="bg-white h-[500px] w-[50%] max-lg:hidden!  ">
                <img src={img1} className="w-[100%] h-[100%]!" alt="" />
            </div>
            <div ref = {refSlider} className="w-[50%] h-[500px] max-lg:w-[100%]! bg-white flex flex-col flex-wrap  overflow-hidden ">
                {listImg.map((item, index) => (
                <div key = {index} className="w-[50%] bg-blue-500 h-[50%]  max-lg:h-[99%] max-sm:w-[100%]! max-sm:h-[100%]!   hover:scale-105 duration-300 max-lg:[&:not(:hover)]:scale-105!   max-lg:cursor-default! cursor-pointer  relative! ">
                        <div style={{backgroundColor : state.color[index]}} className={` bg-amber-200 w-[100%] h-[100%]`}></div>


                        { <img src={item} className="w-[100%]! h-[100%]! object-" alt="" /> }
                        <div className="bg-red-500 bg-opacity-100 absolute! bottom-2 text-white p-6 max-lg:w-[300px] max-lg:m-3! left-0! right-0 max-sm:w-[95.5%] " >
                            <h4 className="text-gray-400">{index + 1}-The ROG Pelta wireless gaming headset :</h4> 
                            <p className="text-gray-200 text-sm">The ROG Pelta's ergomomic, comfort-focused design, high-end audio spaecs, and stunning battery life make it an ideal match for any gamer.</p>
                        </div> 
                    </div>
                ))}
               
            </div>
            <div className={` ${state.conter  >= state.maxConterLg - 1 ? "max-lg:hidden!" : "flex!" }  ${state.conter >= state.maxConter - 1 ? "lg:hidden!" : "flex!"} flex! absolute top-[50%] right-3 max-sm:hidden! hover:scale-150 duration-300 text-white hover:text-gray-400 cursor-pointer`}>
                <i onClick = {RightButton} className="bi bi-caret-right text-2xl"></i>
            </div>
            <div className={`${state.conter <= 0 ? "hidden!" : "flex!"} absolute top-[50%] left-[52%] max-lg:left-3! max-sm:hidden! hover:scale-150 duration-300 text-white hover:text-gray-400 cursor-pointer`}>
                <i onClick={LeftButton} className="bi bi-caret-left  text-2xl"></i>
            </div>
           
        </div>
       
 */