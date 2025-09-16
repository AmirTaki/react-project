import img1 from "../../assets/advert1.jpg"
import img2 from "../../assets/advert2.jpg"
import img3 from "../../assets/advert3.jpg"
import img4 from "../../assets/advert4.jpg"
import img5 from "../../assets/advert5.jpg"

const ImageAdvert = () => {
    const listImg = [img2, img3, img4, img5]
    return(
        <>
            <div className="w-[100%] h-[500px] bg-white flex flex-col flex-wrap overflow-x-scroll ">
                
                <div className=" w-[50%] h-[100%]   relative max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%]">
                    <img src={img1} className="w-[100%] h-[100%]! object-cover" alt="" />
                    <div className="bg-black bg-opacity-30 absolute bottom-0 text-white p-3 " >
                        <h4 className="text-gray-400">0-The ROG Pelta wireless gaming headset :</h4>
                        <p className="text-gray-200">The ROG Pelta's ergomomic, comfort-focused design, high-end audio spaecs, and stunning battery life make it an ideal match for any gamer.</p>
                    </div>
                </div>

                {listImg.map((item, index) => (
                    <div key = {index} className="w-[25%] h-[50%] bg-blue-300  max-lg:w-[50%] max-lg:h-[100%] max-sm:w-[100%] max-sm:h-[100%] relative">
                        <img src={item} className="w-[100%] h-[100%]! object-cover" alt="" />
                        <div className="bg-black bg-opacity-30 absolute bottom-0 text-white p-3 " >
                            <h4 className="text-gray-400">{index + 1}-The ROG Pelta wireless gaming headset :</h4>
                            <p className="text-gray-200">The ROG Pelta's ergomomic, comfort-focused design, high-end audio spaecs, and stunning battery life make it an ideal match for any gamer.</p>
                        </div>
                    </div>

                ))}
            </div>
        </>
        // flex   flex-col flex-wrap overflow-x-scroll
     

    )
}

export default ImageAdvert