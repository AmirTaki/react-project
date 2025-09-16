import img1 from "../../assets/advert1.jpg"
import img2 from "../../assets/advert2.jpg"
import img3 from "../../assets/advert3.jpg"
import img4 from "../../assets/advert4.jpg"
import img5 from "../../assets/advert5.jpg"

const ImageAdvert = () => {
    return(
        <>
            <div className="w-[100%] h-[500px] bg-red-500 flex flex-col flex-wrap ">
                <div className="w-[25%] h-[50%] bg-blue-300 max-md:w-[50%] max-md:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-blue-400 max-md:w-[50%] max-md:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-blue-500 max-md:w-[50%] max-md:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-blue-600 max-md:w-[50%] max-md:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-blue-700 max-md:w-[50%] max-md:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-green-300 max-md:w-[50%] max-md:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-green-400 max-md:w-[50%] max-md:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-green-500 max-md:w-[50%] max-md:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-green-600 max-md:w-[50%] max-md:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-green-700 max-md:w-[50%] max-md:h-[100%]"></div>
            </div>
        </>
        // flex   flex-col flex-wrap overflow-x-scroll
     

    )
}

export default ImageAdvert