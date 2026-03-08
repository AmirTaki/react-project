import { useParams } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header";
import { useEffect, useReducer } from "react";
import api from "../../../../axiosConfig";

const EditMegaMenuImage = () => {
    const {id} = useParams()
    const getImageMegaMenus = async (id) => {
        try{
            await api.get(`tables/megaMenu/menuImage/image.php/${id}`, {withCredentials: true}).then((res) => {
                res
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    useEffect(() => {getImageMegaMenus(id)}, [])
    const reducer = (state, action) => {
        switch(action.type){
            case "":
                return {...state}

            default :
                return state;
        }
    }
    const [state, dispatch] =  useReducer(reducer, {})
    return (
        <div className="">
            <HeaderPanelAdmin id = {6} />
            
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">EDIT ITEM</h1>

                    <form>
                        {/* image view */}
                        <div className="flex gap-5 items-center justify-center m-4">
                            {/* {state.urlImage && (
                                <img src={state.urlImage} style={{width: 100}}></img>
                            )} */}
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default EditMegaMenuImage;