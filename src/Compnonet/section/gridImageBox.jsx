import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.jpg"
import img10 from "../../assets/img10.jpg"
import img11 from "../../assets/img11.jpg"
const GridImageBox = () => {
    return(
        <div className="w-[100%]  grid grid-cols-2! max-lg:grid-cols-1! ">
            <div className=" relative">
                <img src={img8} className="w-[100%]  max-lg:h-[600px]! object-cover!  " alt="" />
                <div className="w-[300px] h-[400px] bg-yellow-300 absolute right-0 top-0 flex flex-col items-start pl-5 justify-center gap-4">
                    <div className="bg-white text-gray-300 hover:text-gray-700 hover:duration-600 duration-600 rounded-md hover:scale-110  w-[50%]  text-center flex items-center justify-center h-[40px] ">For Rain or Shine</div>
                    <div className="group hover:cursor-pointer p-2 w-[80%] h-[50px] bg-amber-400 rounded-md flex text-white items-center">tick
                       <i className=" pl-2 bi bi-arrow-right group-hover:translate-x-21! group-hover:duration-900!    transform  group-[:not(:hover)]:translate-x-0! group-[:not(:hover)]:duration-900! "></i>
                    </div>
                </div>
            </div>
            <div className=" bg-blue-200">
                <img src={img9} className="w-[100%]  max-lg:h-[600px]! object-cover! " alt="" />
            </div>
            <div className=" bg-blue-200">
                <img src={img10} className="w-[100%]  max-lg:h-[600px]! object-cover! " alt="" />
            </div>
            <div className=" bg-blue-200">
                <img src={img11} className="w-[100%] max-lg:h-[600px]! object-cover! " alt="" />
            </div>
            
        </div>
    )
}
export default GridImageBox;