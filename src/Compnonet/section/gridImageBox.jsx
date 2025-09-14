import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.jpg"
import img10 from "../../assets/img10.jpg"
import img11 from "../../assets/img11.jpg"
const GridImageBox = () => {
    return(
        <div className="w-[100%]  grid grid-cols-2! max-lg:grid-cols-1! ">
            <div className=" relative">
                <img src={img8} className="w-[100%]  max-lg:h-[600px]! object-cover!  " alt="" />
                <div className="w-[300px] h-[400px] bg-transparent absolute right-0 top-0 flex flex-col items-start pl-5 justify-center gap-4">
                    <div className="bg-white text-gray-400 hover:text-amber-500! hover:duration-600 duration-600 rounded-md hover:scale-120 ml-3 w-[50%]  text-center flex items-center justify-center h-[40px]  hover:bg-amber-300/10!">For Rain or Shine</div>
                    
                    <div className="group hover:cursor-pointer p-2 w-[80%] h-[50px] bg-white hover:bg-amber-300/10! hover:text-amber-500! duration-500! hover:duration-500! rounded-md flex text-gray-500 items-center">tick
                       <i className=" pl-2 bi bi-arrow-right group-hover:translate-x-19! group-hover:duration-900!    transform  group-[:not(:hover)]:translate-x-0! group-[:not(:hover)]:duration-900! "></i>
                    </div>
                    
                    <div className="bg-white h-[100px] text-gray-700 text-sm line-clamp-3 p-2 w-[80%] rounded-md overflow-hidden duration-700! hover:duration-700! hover:text-amber-500! hover:bg-amber-300/10!  flex items-center">LeBorn XXll 'Currency'
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    
                    <div className="w-[35%] h-[40px]">
                        <button className="bg-white w-[100%] h-[100%] rounded-3xl hover:text-amber-500! hover:bg-amber-300/10! duration-500! hover:duration-500!">SHOP</button>
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