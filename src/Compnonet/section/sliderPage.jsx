import { useEffect, useReducer, useRef, useState } from "react"
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
    const reduce = (state, action) => {
        switch(action.type){
            case 'conter' : 
                return {...state, conter : 0}

            case "increment" : 
                return {...state, conter : state.conter >= (state.listImg.length / 3) ? state.conter : state.conter + action.payload}
                
            case "decrement" : 
                return {...state, conter : state.conter <= 0 ? 0 : state.conter - action.payload}
            
            case "changeImge":
                if (refSlide.current){
                    refSlide.current.style.scrollBehavior = "smooth";
                    refSlide.current.scrollLeft = refSlide.current.offsetWidth * state.conter 
                    return{...state}   
                }

            case "changeIndex" : 
                return {...state, conter : action.payload}
            
            case "changeColor" : 
                const NewColors = Object.keys(state.changeColor).reduce((a, b) => {
                    a[b] = false;
                    return a
                }, {})
            
                return {...state, changeColor : {[state.conter] : true} }

            case "mouseDown" : 
                const {client} = action.payload
                const {slider} = action.payload
                slider.style.scrollBehavior = 'auto'
                return {...state, isDrag: true,  startX: client, startScroll: slider.scrollLeft}

            case "mosueMove": 
                if(state.isDrag){
                    const {client} = action.payload
                    const {slider} = action.payload
                   
                    const walk = client - state.startX                    
                    slider.scrollLeft = state.startScroll - walk
                    return{...state, diff: walk}
                }
                return {...state}

            case "mouseUp":
                if(state.isDrag){
                    state.isDrag = false
                    if(state.diff < 0){
                        state.conter += 1
                    }
                    else if (state.diff > 0){
                        state.conter -= 1
                    }
                    else {
                        
                    }
                    return {...state, isDrag: false, diff: 0, startX: 0, startScroll: 0}
                }
                return {...state}


            default :
                return {...state}
        }    
    }
        const [state, dispatch] = useReducer (reduce, {
            conter : 0,
            listImg : [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9 , slide10, slide11, slide12, slide13, slide14],
            changeColor : {},
            isDrag: false,
            startX: 0, 
            startScroll: 0,
            diff: 0

        })

        const listItemsTwo = Array.from({length : Math.round (state.listImg.length / 2) }, (_) => `${_}`)

   
   
    const right = () => {
        dispatch({type:'increment' , payload : 1})
    
    }

    const left = () => {
         dispatch({type:'decrement' , payload : 1})
    }
    
    const changeIndex = (index) => {
        dispatch({type:'changeIndex' , payload : index})
    }

    useEffect(() => {
        dispatch({type : 'changeImge'})
        dispatch({type : 'changeColor'})
    },[state.conter])

    useEffect(() => {
        const  handleImage = () => {
            dispatch({type : 'conter'})
        }

        window.addEventListener("resize", handleImage)

        return()=> {
            window.addEventListener('resize', handleImage )
        }
    }, [])


    return(
        <div  className="w-[100%] h-[600px] bg-white flex flex-col items-center justify-center relative cursor-grab active:cursor-grabbing">
            <div 
                ref = {refSlide} 
                className="w-[80%] h-[500px] bg-[blue] flex flex-col flex-wrap  overflow-hidden! select-none touch-pan-y  "
                onMouseDown = {(e) => {dispatch({type: 'mouseDown', payload: {client: e.clientX, slider: refSlide.current}})}}
                onMouseMove={(e) => {dispatch({type: 'mosueMove', payload: {client: e.clientX, slider: refSlide.current}})}}
                onMouseUp={() => {dispatch({type: 'mouseUp', })}}
            >
        
                {state.listImg.map((item, index) => (
                    <div key = {index} className="w-[33.35%] p-3 max-lg:w-[50%] flex-col flex justify-center max-sm:w-[100%] h-[500px]  ">
                        <img draggable = {false} src={item} className="w-[100%] h-[100%]" alt="" />
                        <div className="bg-gray-300 h-[60px]  flex justify-center items-center text-center text-sm">AI-powered Everyday with AI PCs from ASUS</div>
                    </div>
                ))}
        
            </div>


            <div onClick={right} className={`${state.conter >= (state.listImg.length / 3) - 1 ? "hidden!": "flex" } max-lg:hidden! absolute top-[50%] right-[4%] hover:scale-125 duration-300 cursor-pointer text-gray-400 hover:text-black hover:duration-300!`}>
                <i className="text-2xl bi bi-arrow-right-square"></i>
            </div>
            <div onClick={left} className={`${state.conter <= 0 ? "hidden!" : "flex"} max-lg:hidden! absolute top-[50%] left-[4%] hover:scale-125 duration-300 cursor-pointer text-gray-400 hover:text-black hover:duration-300!`}>
                <i className="text-2xl  bi bi-arrow-left-square"></i>
            </div>

            <div className=" gap-3 w-[80%]  justify-center hidden max-lg:flex! max-sm:hidden! absolute bottom-20">
                {listItemsTwo.map((_, index) => (                    
                    <div  onClick={()=>{changeIndex(index)}} key = {index} className={`${state.changeColor[index] ? "scale-155 bg-red-500!": "scale-100 bg-gray-300" } w-[25px] h-[10px] bg-gray-300 rounded-2xl cursor-pointer`}></div>
                ))}
            </div>
            <div className=" gap-3 w-[80%]  justify-center hidden max-sm:flex! absolute   bottom-17">
                {state.listImg.map((_, index) => (                    
                    <div  onClick={()=>{changeIndex(index)}} key = {index} className={`${state.changeColor[index] ? "scale-155 bg-blue-500  !": "scale-100 bg-gray-300" } w-[25px] h-[10px] bg-gray-300 rounded-2xl cursor-pointer`}></div>
                ))}
            </div>
        </div>
    )
}

export default SliderPage