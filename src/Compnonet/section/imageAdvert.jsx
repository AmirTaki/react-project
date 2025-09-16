import img1 from "../../assets/advert1.jpg"
import img2 from "../../assets/advert2.jpg"
import img3 from "../../assets/advert3.jpg"
import img4 from "../../assets/advert4.jpg"
import img5 from "../../assets/advert5.jpg"

const ImageAdvert = () => {
    return(
        <>
            <div className="bg-red-500 h-[500px] w-[50%] max-lg:w-[100%] block  "></div>
            <div className="bg-green-500 h-[50%] w-[25%] max-lg:w-[100%]  inline-block "></div>
            <div className="bg-pink-500 h-[50%] w-[25%] max-lg:w-[100%]  block   "></div>
            <div className="bg-amber-500 h-[50%] w-[25%] max-lg:w-[100%]    block "></div>
        </>
        // flex   flex-col flex-wrap overflow-x-scroll
     

    )
}

export default ImageAdvert