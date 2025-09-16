import img1 from "../../assets/advert1.jpg"
import img2 from "../../assets/advert2.jpg"
import img3 from "../../assets/advert3.jpg"
import img4 from "../../assets/advert4.jpg"
import img5 from "../../assets/advert5.jpg"

const ImageAdvert = () => {
    return(
        <>
            <div className="w-[100%] h-[500px] bg-red-500 flex flex-col flex-wrap overflow-x-scroll ">
                <div className="bg-pink-500 w-[50%] h-[100%] max-lg:hidden "></div>
                <div className="bg-orange-500 max-lg:flex! max-sm:flex! max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%] hidden "></div>
                <div className="w-[25%] h-[50%] bg-blue-300  max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-blue-400  max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-blue-500  max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-blue-600  max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-blue-700  max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-green-300 max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-green-400 max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-green-500 max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-green-600 max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]"></div>
                <div className="w-[25%] h-[50%] bg-green-700 max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]"></div>
            </div>
        </>
        // flex   flex-col flex-wrap overflow-x-scroll
     

    )
}

export default ImageAdvert