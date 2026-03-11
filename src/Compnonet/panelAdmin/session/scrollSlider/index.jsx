import { Link } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header";

const ScrollSliderPanelAdmin  = () => {
    return(
        <div className="">
            <HeaderPanelAdmin id = {8} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col items-center justify-around ">
                    <Link to = "/panelAdmin/session/AddBackGroundSlider">
                        <button className="mt-10 border-0 flex items-center justify-center text-green-500  text-lg hover:tracking-[.2rem] duration-200">create Image</button>
                    </Link>
                    
                    <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200">session: scroll slider table</h1> 
                </div>
            </div>
        </div>
    )
}

export default ScrollSliderPanelAdmin;