import { useEffect, useReducer, useRef } from "react"
import img1 from "../../assets/advert1.jpg"
import img2 from "../../assets/advert2.jpg"
import img3 from "../../assets/advert3.jpg"
import img4 from "../../assets/advert4.jpg"
import img5 from "../../assets/advert5.jpg"
import img6 from  "../../assets/img2.jpg"
import img7 from  "../../assets/img3.jpg"
import img8 from  "../../assets/img4.jpg"
import img9 from  "../../assets/img5.jpg"
import img10 from  "../../assets/img7.jpg"
import img11 from  "../../assets/img9.jpg"

const ImageAdvert = () => {
    const listImg = [img1 ,img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]
    const refSlider = useRef()
  

    const reducer = (state, action) => {
        switch(action.type) {
            case "right" : 
                return {...state, conter : state.conter + action.payload }
          
            case "left" : 
                return {...state, conter : state.conter - action.payload }

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
        maxConter : Math.round(listImg.length / 2)
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
    
    return(
        <>
        <div className="relative">
            <div ref = {refSlider} className="w-[100%] h-[500px] bg-white flex flex-col flex-wrap overflow-x-scroll  ">
                
                <div className=" w-[50%] h-[100%]   relative max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%] p-1 max-sm:p-0!">
                    <img src={img1} className="w-[100%] h-[100%]! object-fill" alt="" />
                    <div className="bg-black bg-opacity-20 absolute bottom-1 w-[90%] text-white p-3 max-sm:w-[100%]!" >
                        <h4 className="text-gray-400">0-The ROG Pelta wireless gaming headset :</h4>
                        <p className="text-gray-200 text-sm">The ROG Pelta's ergomomic, comfort-focused design, high-end audio spaecs, and stunning battery life make it an ideal match for any gamer.</p>
                    </div>
                </div>

                {listImg.map((item, index) => (
                    <div key = {index} className="w-[25%] h-[50%]   max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%] relative p-1 max-sm:p-0!">
                        <img src={item} className="w-[100%] h-[100%]! object-fill" alt="" />
                        <div className="bg-black bg-opacity-20 absolute bottom-1 text-white p-3 w-[98%] max-sm:w-[100%]!  " >
                            <h4 className="text-gray-400">{index + 1}-The ROG Pelta wireless gaming headset :</h4>
                            <p className="text-gray-200 text-sm">The ROG Pelta's ergomomic, comfort-focused design, high-end audio spaecs, and stunning battery life make it an ideal match for any gamer.</p>
                        </div>
                    </div>
                ))}
               
            </div>
            <div className={` absolute top-[50%] right-3 hover:scale-150 duration-300 text-white hover:text-gray-400 cursor-pointer`}>
                <i onClick = {RightButton} className="bi bi-caret-right text-2xl"></i>
            </div>
            <div className={`${state.conter <= 0 ? "hidden!" : "flex!"} absolute top-[50%] left-3  hover:scale-150 duration-300 text-white hover:text-gray-400 cursor-pointer`}>
                <i onClick={LeftButton} className="bi bi-caret-left  text-2xl"></i>
            </div>
        </div>
       
           
        </>     
    )
}

export default ImageAdvert