import { Link } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header"

const BackGroundSliderPanelAdmin = () => {
    return(
        <div>
            <HeaderPanelAdmin id = {7} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col items-center justify-around ">
                    <Link to = "">
                        <button className="mt-10 border-0 flex items-center justify-center text-green-500  text-lg hover:tracking-[.2rem] duration-200">create Image</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default BackGroundSliderPanelAdmin;