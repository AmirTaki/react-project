import { useEffect, useReducer, useRef } from "react"
import img1 from "../../assets/resurse1.avif"
import img2 from "../../assets/resurse2.avif"
import img3 from "../../assets/resurse3.avif"
import img4 from "../../assets/resurse4.avif"
import img5 from "../../assets/resurse5.avif"
import img6 from "../../assets/resurse6.avif"
import img7 from "../../assets/resurse7.avif"

const ResourcesImage = () => {
    const listImg = [img1, img2, img3, img4, img5, img6, img7]
    const refResource =  useRef()

    const reducer = (state, action) => {
        switch(action.type){
            case"rightHandler" :
                const {slider} = action.payload
                if(slider){
                    slider.style.scrollBehavior = 'smooth'
                    slider.scrollLeft += 300
                }
                return {...state}

            default: 
                return state
        }
    }

    const [state, dispatch] =  useReducer(reducer, {
    })
    return(
        <>
           <div className="w-[90%] h-[400px]   mx-auto relative ">
            {/* [&::-webkit-scrollbar]:opacity-0 */}
                <div 
                    onMouseDown={(e) => {}}
                    ref = {refResource} className=" w-[100%] h-[350px] bg-red-500 flex items-center   flex-col flex-wrap    overflow-x-scroll   justify-center"
                    >
                    {listImg.map((img, key) => (
                        <div key = {key} className="w-[365px] h-[100%]  flex justify-center relative">
                            <img src={img} alt=""  className="w-[350px] h-[300px]!" />
                            <div className="bg-white w-[310px] h-[110px] flex flex-col px-3 justify-center  absolute right-1 bottom-8">
                                <h4 className="text-lg mb-2">How To Clean Shoes</h4>
                                <p className="text-[12px]">Get down and dirty with adidas and learn how to clean your sneakers the right way.</p>
                            </div>
                        </div>
                    ))} 
                </div>


                <button  
                    className="border-2 absolute top-50 -left-8 hover:bg-[blue]!"
                >
                    left
                </button>
                <button 
                    onClick={() => {dispatch({type: "rightHandler", payload: {slider: refResource.current}})}}
                    className="border-2 absolute top-50 -right-8 hover:bg-[blue]!"
                >
                    right
                </button>
            </div> 


            
        </>
    )
}

export default ResourcesImage;