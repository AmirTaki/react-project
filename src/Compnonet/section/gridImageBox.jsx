import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.jpg"
import img10 from "../../assets/img10.jpg"
import img11 from "../../assets/img11.jpg"
const GridImageBox = () => {
    return(
        <div className="w-[100%]  bg-red-400 grid grid-cols-2! max-lg:grid-cols-1!">
            <div className="h-[300px] bg-blue-200"></div>
            <div className="h-[300px] bg-blue-400"></div>
            <div className="h-[300px] bg-yellow-200"></div>
            <div className="h-[300px] bg-yellow-400"></div>
          
        </div>
    )
}
export default GridImageBox;