import img1 from "../../assets/resurse1.avif"
import img2 from "../../assets/resurse2.avif"
import img3 from "../../assets/resurse3.avif"
import img4 from "../../assets/resurse4.avif"
import img5 from "../../assets/resurse5.avif"
import img6 from "../../assets/resurse6.avif"
import img7 from "../../assets/resurse7.avif"

const ResourcesImage = () => {
    const listImg = [img1, img2, img3, img4, img5, img6, img7]
    return(
        <>
           <div className="w-[90%] h-[700px] bg-blue-500  mx-auto">
                <div className="w-[100%] h-[350px] bg-white flex items-center   flex-col flex-wrap   overflow-scroll   justify-center">
                    {listImg.map((img, key) => (
                        <div key = {key} className="w-[400px] h-[100%]  flex justify-center">
                            <img src={img} alt=""  className="w-[350px] h-[300px]!" />
                        </div>
                    ))}
              
               
                </div>
            </div> 


            
        </>
    )
}

export default ResourcesImage;