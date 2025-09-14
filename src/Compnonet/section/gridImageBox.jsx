import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.jpg"
import img10 from "../../assets/img10.jpg"
import img11 from "../../assets/img11.jpg"
const GridImageBox = () => {
    return(
        <div className="w-[100%]  grid grid-cols-2! max-lg:grid-cols-1! ">
            <div className=" relative">
                <img src={img8} className="w-[100%]  max-lg:h-[600px]! object-cover!  " alt="" />
                <div className="w-[300px] h-[400px] bg-yellow-300 absolute right-0 top-0 flex flex-col">
                    <div className="">For Rain or Shine</div>
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