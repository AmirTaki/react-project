import {  useEffect,  useReducer, useRef,  } from "react"
import img1 from "../../assets/img1.webp"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"


function useInterval (callback, delay) {
    const savedCallBack  = useRef();

    useEffect(()=> {
        savedCallBack.current = callback;
    }, [callback])

    useEffect(() => {
        const tick = () => {
            savedCallBack.current();
        }

        if(delay !== null){
            const id = setInterval(tick ,delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

const BackGroundSlider = () => {

    const sliderRef  =  useRef(null)
  
    const reducer = (state, action) => {
        switch(action.type){
            case "conter" : 
                return {...state, conter : action.payload}
            
            case "changeImage" :
                if(sliderRef.current){
                    sliderRef.current.style.scrollBehavior = "smooth";
                    sliderRef.current.scrollLeft = action.payload * sliderRef.current.offsetWidth;
                }
                return {...state}
             
            case  "changeColors" : 
                const newColors =  Object.keys(state.changeColor).reduce((color, item) =>{
                    color[item] = false;
                    return color
                },{})

                const Colors =  {...newColors, [action.payload] : true}
                    return {...state,
                        changeColor : Colors
                }
            
            case "nextSlide" : {
                // imgList.length
                const nextConunter = state.conter >=  (document.querySelectorAll('.itemImg').length ) - 1 ? 0 :  state.conter + 1             
                return {...state, conter : nextConunter}
            }
                
            case "prevSlide" : {
                const prevCounter = state.conter <= 0 ? (document.querySelectorAll('.itemImg').length ) - 1 :  state.conter -1 ;
                return {...state, conter : prevCounter}
            }


            case "handlerMouseDown": {
                const {client} = action.payload
                const {slider} = action.payload
                slider.style.scrollBehavior = 'auto'
                return {...state, isDrag: true, startX: client, startScroll: slider.scrollLeft}
            }
        
            default :{
                return {...state}
            }

        }
    }
    const [state, dispatch] =  useReducer(reducer ,{
        conter : 0,
        changeColor : {},
        items: [img1, img2, img3, img4, img5], 
        isDrag: false,
        startX: 0,
        startScroll: 0

    })

    const handleClickItem = (index) => {
        dispatch({type : 'conter', payload : index})
    }

    const handlerRight = () => {
        dispatch({type : "nextSlide"  })
    }

    const handlerLeft = () => {
        dispatch({type : 'prevSlide'})

    }
    useEffect(() => {
        dispatch({type : 'changeImage', payload : state.conter})
        dispatch({type : 'changeColors', payload : state.conter})
    }, [state.conter])

  
    useEffect(() => {
        const setHandlerImg = () => {
            handleClickItem(0)
        }
        setHandlerImg();
        window.addEventListener('resize', setHandlerImg);
        return() => {
            window.addEventListener('resize', setHandlerImg)
        }
    }, [])


    // useEffect(()=> {
    //     const time = setInterval(() => {
    //        dispatch({type : "nextSlide"  })
    //     },4000)
    //     return() => {
    //         window.addEventListener('resize', clearInterval(time))
    //     }
    // },)
   
    useInterval(() => {
        dispatch({type : "nextSlide"  })

    }, 4000)
  
    return(
        <div className={` mt-[101px]  h-[600px] `}>           
            <div className=" relative!"    >
                <div 
                    ref = {sliderRef} 
                    className="bg-blue-400 w-[100%] h-[600px]   sliderImage  overflow-hidden! flex  flex-col flex-wrap  relative! select-none touch-pan-y "
                    onMouseDown={(event) => {dispatch({type : 'handlerMouseDown', payload: {client: event.clientX, slider: sliderRef.current}})}}
                    onMouseMove = {() => {}}
                    onMouseUp = {() => {}}
                    onMouseLeave = {() => {}}
                >
                    {state.items?.map((item) => {
                        return(
                            <div   className="bg-green-200 w-[100%]! h-[600px]!  itemImg">
                                <img src={item} className="w-[100%]! h-[100%]! object-cover" alt="" 
                                    draggable = {false}
                                />
                            </div>
                        )
                    })}
 
                </div>
                <div onClick = {handlerRight} className="bg-transparent absolute! top-[50%] right-[4%]">
                    <i className="bi bi-arrow-right-circle cursor-pointer! text-3xl text-red-200 hover:text-red-800! duration-300"></i>
                </div>
                <div onClick  = {handlerLeft} className="bg-transparent absolute! top-[50%] left-[4%]">
                    <i className="bi bi-arrow-left-circle cursor-pointer! text-3xl text-red-200 hover:text-red-800! duration-300"></i>
                </div>

                <div className=" w-[100%] h-10 flex gap-5 absolute bottom-[5%] bg-transparent  items-center justify-center">
                    {state.items.map((item, index) => (
                        
                        <div onClick = {() => {handleClickItem(index)}} 
                        className={`clickImgItem rounded-2xl w-[20px] h-[10px]  bg-sky-300 hover:bg-blue-500! cursor-pointer! duration-300! ${state.changeColor[index] ? "bg-red-800! scale-150! w-10!" : "bg-gray-300! scale-100!"}`} key  = {index}> </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BackGroundSlider;