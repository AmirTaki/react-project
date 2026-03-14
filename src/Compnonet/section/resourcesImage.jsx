import { useEffect, useReducer, useRef } from "react"
import img1 from "../../assets/resurse1.avif"
import img2 from "../../assets/resurse2.avif"
import img3 from "../../assets/resurse3.avif"
import img4 from "../../assets/resurse4.avif"
import img5 from "../../assets/resurse5.avif"
import img6 from "../../assets/resurse6.avif"
import img7 from "../../assets/resurse7.avif"
import api from "../../axiosConfig"
import baseURL from "../../baseUrl"

const ResourcesImage = () => {
    const listImg = [img1, img2, img3, img4, img5, img6, img7]
    const refResource =  useRef()
    const reducer = (state, action) => {
        switch(action.type){
            case"rightHandler" :
              
                var {slider} = action.payload
                if(slider){
                    slider.style.scrollBehavior = 'smooth'
                    slider.scrollLeft += 300
                }
                return {...state}

            case "leftHandler": 
                var {slider} = action.payload
                if(slider){
                    slider.style.scrollBehavior = 'smooth'
                    slider.scrollLeft -= 300
                }
                    return {...state, }

            case "mosueDown":
                var {slider} = action.payload
                const {client} = action.payload
                slider.style.scrollBehavior = 'auto'
                return {...state, isDrag: true, startX: client, startScroll: slider.scrollLeft}
         
            case "mouseMove":
                if(state.isDrag){
                    const {slider} = action.payload
                    const {client} = action.payload
                    const walk = client - state.startX
                    slider.scrollLeft = state.startScroll -  walk
                    return {...state, diff: walk}
                }
                return {...state}

            case "mouseUp": 
                if(state.isDrag){
                    const {slider} = action.payload
                    slider.style.scrollBehavior = 'smooth'
                    slider.scrollLeft -= state.diff

                    return {...state, isDrag: false, diff: 0, startScroll: 0, startX: 0}
                }
                return {...state}

            case "GET_RESORURS_API":
                return {...state, listImg: action.payload}
                
            default: 
                return state
        }
    }

    const [state, dispatch] =  useReducer(reducer, {
        isDrag: false, 
        startX: 0,
        startScroll: 0,
        diff: 0,
        listImg: []
    })
    const readingRequsetResoursApi = async () => {
        try{
            await api.get('tables/session/resourceImage/reading.php').then((res) => {
                const data = Array.isArray(res.data) ? res.data : []
                dispatch( {type: 'GET_RESORURS_API', payload: data} )
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }

    useEffect(() => {readingRequsetResoursApi()}, [])

    return(
        <>
           <div className="w-[90%] h-[400px]   mx-auto relative cursor-grab active:cursor-grabbing select-none">
            {/* */}
                <div 
                    onMouseDown={(e) => {dispatch({type: 'mosueDown', payload : {client: e.clientX, slider: refResource.current}})}}
                    onMouseMove={(e) =>  {dispatch({type: 'mouseMove', payload: {client: e.clientX, slider: refResource.current}})}}
                    onMouseUp={() => {dispatch({type: 'mouseUp', payload: {slider: refResource.current}})}}
                    onMouseLeave={() => {if(state.isDrag) {dispatch({type: 'mouseUp', payload: {slider: refResource.current}})}}}
                    
                    onTouchStart={(e) => {dispatch({type: 'mosueDown', payload : {client: e.touches[0].clientX, slider: refResource.current}})}}
                    onTouchMove={(e) => {dispatch({type: 'mouseMove', payload : {client: e.touches[0].clientX, slider: refResource.current}})}}
                    onTouchEnd={() => {dispatch({type: 'mouseUp', payload: {slider: refResource.current}})}}

                    ref = {refResource} className=" [&::-webkit-scrollbar]:opacity-0  w-[100%] h-[350px]  flex items-center   flex-col flex-wrap    overflow-x-scroll   justify-center"
                    >
                    {state.listImg.map((item, key) => (
                        <div key = {key} className="w-[400px] h-[100%]  flex justify-center relative">
                            <img draggable = {false} src={baseURL + item.image} alt=""  className="w-[380px] h-[330px]!" />
                            
                            <div className="select-none bg-white w-[340px] h-[130px] flex flex-col px-3   absolute right-2 bottom-0">
                                <h4 className="text-[16px] mb-2 flex font-bold  items-center  h-[50px]">{item.title}</h4>
                                <p className="text-[13px] h-[70px] ">{item.body}</p>
                            </div>
                        </div>
                    ))} 
                </div>


                <button  
                    onClick={() => {dispatch({type: "leftHandler", payload: {slider: refResource.current}})}}
                    className="border-2 absolute top-50 -left-8 hover:bg-[blue]! hidden"
                >
                    left
                </button>
                <button 
                    onClick={() => {dispatch({type: "rightHandler", payload: {slider: refResource.current}})}}
                    className="border-2 absolute top-50 -right-8 hover:bg-[blue]! hidden"
                >
                    right
                </button>
            </div> 


            
        </>
    )
}

export default ResourcesImage;