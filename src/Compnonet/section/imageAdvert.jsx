import img1 from "../../assets/advert1.jpg"
import img2 from "../../assets/advert2.jpg"
import img3 from "../../assets/advert3.jpg"
import img4 from "../../assets/advert4.jpg"
import img5 from "../../assets/advert5.jpg"

const ImageAdvert = () => {
    return(
        <div className="w-[100%] h-[500px] bg-blue-500 flex   flex-col flex-wrap overflow-x-scroll">
            <div className="bg-red-500 h-[500px] w-[50%] max-lg:w-[100%]   ">


            </div>
            <div className="bg-green-500 h-[500px] w-[50%] max-lg:w-[100%] flex">
                <div className="bg-purple-600 h-[500px] w-[50%] max-lg:w-[100%]"></div>
                <div className="bg-pink-500 h-[500px] w-[50%] max-lg:w-[100%]"></div>
                <div className="bg-gray-500 h-[500px] w-[50%] max-lg:w-[100%]"></div>
                <div className="bg-amber-500 h-[500px] w-[50%] max-lg:w-[100%]"></div>  
            </div>
            <div className="bg-pink-500 h-[500px] w-[50%] max-lg:w-[100%]"></div>
            <div className="bg-gray-500 h-[500px] w-[50%] max-lg:w-[100%]"></div>
            <div className="bg-amber-500 h-[500px] w-[50%] max-lg:w-[100%]"></div>

        </div>
    )
}

export default ImageAdvert