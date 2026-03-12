import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.jpg"
import img10 from "../../assets/img10.jpg"
import img11 from "../../assets/img11.jpg"
import { useEffect, useState } from "react"
import api from "../../axiosConfig"
import baseURL from "../../baseUrl"
const GridImageBox = () => {
    const listImg = [img8, img9, img10, img11]
    const [gridImages, setGridImages] =  useState([])
    const getGridImage = async () => {
        try{
            await api.get(`tables/session/gridImage/reading.php`).then((res) => {
                const data = Array.isArray(res.data)? res.data : []
                setGridImages(data)
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    useEffect(() => {
        getGridImage();
    }, [])
    return(
        <div className="w-[100%]  grid grid-cols-2! max-lg:grid-cols-1! ">
           {/* item image */}
            {gridImages.map((item, i) => (
                <div key = {i} className=" relative">
                    <img src={baseURL + item.image} className="w-[100%]  max-lg:h-[600px]! object-cover!  " alt="" />
                    <div className="w-[300px] h-[400px] bg-transparent absolute right-10 top-5 flex flex-col  items-center pl-5 justify-start gap-4">
                        <div className="bg-white text-gray-400 hover:text-amber-500! hover:duration-600 duration-600 rounded-md hover:scale-140  w-[80%]  text-center flex items-center justify-center h-[40px]  hover:bg-amber-300/10!">
                        {/* For Rain or Shine */}
                        {item.title}
                        </div>
                        
                        <div className="group hover:cursor-pointer p-2 w-[80%] h-[50px] bg-white hover:bg-amber-300/10! hover:text-amber-500! duration-500! hover:duration-500! rounded-md flex text-gray-500 items-center">tick
                        <i className=" pl-2 bi bi-arrow-right group-hover:translate-x-19! group-hover:duration-900!    transform  group-[:not(:hover)]:translate-x-0! group-[:not(:hover)]:duration-900! "></i>
                        </div>
                        
                        <div className="max-lg:flex! hidden bg-white h-[70px] text-gray-700 text-sm line-clamp-3 p-2 w-[80%] rounded-md overflow-hidden duration-700! hover:duration-700! hover:text-amber-500! hover:bg-amber-300/10!   items-center">
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                            {item.body}
                        </div>
                        
                        <div className="w-[35%] h-[40px]">
                            <button className="bg-white w-[100%] h-[100%] rounded-3xl hover:text-amber-500! hover:bg-amber-300/10! duration-500! hover:duration-500!">
                                {/* SHOP */}
                                {item.link}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
       
           
            
        </div>
    )
}
export default GridImageBox;