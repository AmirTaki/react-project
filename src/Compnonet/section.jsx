import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"

const Section = () => {
    const handler = () => {
        const SliderImage =  document.querySelector(".sliderImage")
        SliderImage.style.scrollBehvior = "smooth"
    }

    return(
        <div className={`bg-red-500 mt-[101px] flex items-center justify-center h-[600px]`}>
         
            <div className="bg-blue-400 w-[500px] h-[300px]   sliderImage overflow-x-scroll flex  flex-col flex-wrap overflow-y-hidden   ">
                <div className="bg-green-200 w-[500px]! h-[300px]!  ">
                    <img src={img1} className="w-[100%]! h-[100%]!" alt="" />
                </div>
                <div className="bg-green-200 w-[500px]! h-[300px]!  ">
                    <img src={img2} className="w-[100%]! h-[100%]!" alt="" />
                </div>
                <div className="bg-green-200 w-[500px]! h-[300px]!  ">
                    <img src={img3} className="w-[100%]! h-[100%]!" alt="" />
                </div>
                <div className="bg-green-200 w-[500px]! h-[300px]!  ">
                    <img src={img4} className="w-[100%]! h-[100%]!" alt="" />
                </div>
               
            </div>


          
        </div>
    )
}

export default Section;