import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.jpg"
import img10 from "../../assets/img10.jpg"
import img11 from "../../assets/img11.jpg"
const GridImageBox = () => {
    return(
        <div className="w-[100%]  bg-red-400 grid grid-cols-2! max-lg:grid-cols-1!">
            <div className="h-[600px] bg-blue-200">
                <img src={img8} className="w-[100%]  h-[100%] " alt="" />
            </div>
            <div className="h-[600px] bg-blue-200">
                <img src={img9} className="w-[100%]  h-[100%]" alt="" />
            </div>
            <div className="h-[600px] bg-blue-200">
                <img src={img10} className="w-[100%]  h-[100%] " alt="" />
            </div>
            <div className="h-[600px] bg-blue-200">
                <img src={img11} className="w-[100%]  h-[100%]" alt="" />
            </div>
            
        </div>
    )
}
export default GridImageBox;