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

const ImageAdvert = () => {
    const listImg = [img1 ,img2, img3, img4, img5, img6, img7, img8, img9 , img10]
    const refSlider = useRef()
  

    const reducer = (state, action) => {
        switch(action.type) {
            case "conter" : 
                return {...state, conter : 0}

            case 'changeImage' : 
                return {...state, imgSelect : action.payload }
            case "right" : 
                return {...state, conter : state.conter + action.payload }
          
            case "left" : 
                return {...state, conter : state.conter - action.payload }

            case "handerClick" :
                return {...state , conter : action.payload}

            case "color" : 
                const NewColor =  Object.keys(state.colorButton).reduce((a,b) => {
                    a[b] = false
                    return a
                },{})
                  const Colors =    {...NewColor, [state.conter] : true}
                return{...state,
                    colorButton : Colors
                }
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
        imgSelect : 0,
        maxConterLg : Math.ceil(listImg.length /  2 ) , 
        maxConter : Math.ceil(listImg.length /  4 ) ,
        colorButton : {}
    })
    
    const RightButton = () => {
        dispatch({type : "right", payload : 1})
    }
    
    const LeftButton = () => {
        dispatch({type : "left", payload : 1})
    }
    useEffect(()=> {
        dispatch({type : 'slide'})
        dispatch({type : "color"})
    },[state.conter])
    
    const changeItem = (index) => {
        dispatch({type : 'handerClick' , payload : index})
    } 

    const clickImage = (index) => {
        dispatch({type:"changeImage" , payload : index})
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
            <div className="h-[500px] w-[50%]  max-lg:hidden ">
                <img src={listImg[state.imgSelect]} className="h-[100%]! duration-200" alt="" />
            </div>
            
            <div ref = {refSlider} className="h-[500px] w-[50%] max-lg:w-[100%]  flex flex-col flex-wrap overflow-hidden">
                {listImg.map(((item, index) => (
                    <div key = {index} className="h-[50%] w-[50%] max-lg:h-[100%] max-sm:w-[100%] relative ">
                        <img onClick={()=>{clickImage(index)}}  src={item} className="h-[100%]! lg:hover:grayscale-75 lg:hover:scale-110 lg:cursor-pointer cursor-default duration-500 " alt="" />
                        <div className=" absolute  bg-[rgba(0,0,0,0.2)]  bottom-0  p-3 flex flex-col ">
                            <h6 className="text-sm text-gray-400">{index + 1}-ROG Travel books another killer vacation</h6>
                            <p className="text-sm text-gray-200">Troy Baker and Ned Luke team up to offer a killer vacation plan in a post-apocalyptic paradise.</p>
                        </div>
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
                        <div onClick={() => {changeItem(index)}} key = {index} className={`${state.colorButton[index] ?  "bg-red-500 ":"bg-gray-500"} w-6 h-3 cursor-pointer hover:grayscale-50 rounded-4xl `}></div>
                    ))}
                </div>
             
            </div>
        </div>     



        <div className="h-[300px] w-[100%]"></div>
        </>
      
    )
}

export default ImageAdvert

