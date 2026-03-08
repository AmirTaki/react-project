import { useParams } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header";
import { useEffect, useReducer } from "react";
import api from "../../../../axiosConfig";
import baseURL from "../../../../baseUrl";

const EditMegaMenuImage = () => {
    const {id} = useParams()
    const getImageMegaMenus = async (id) => {
        try{
            await api.get(`tables/megaMenu/menuImage/image.php/${id}`, {withCredentials: true}).then((res) => {
                dispatch({type: 'GetRequest', payload: res.data});
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    useEffect(() => {getImageMegaMenus(id)}, [])
    const reducer = (state, action) => {
        switch(action.type){
            case "GetRequest":
                return {...state,
                    title: action.payload.title,
                    list: action.payload.list,
                    id: action.payload.id,
                    urlImage: action.payload.image,
                    body: action.payload.body

                }

            default :
                return state;
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        urlImage: '', 
        image: '',
        imageWarning: '',
        body: '',
        bodyWarning: '',
        title: '',
        titleWarning: '',
        list: '',
        listWarning: '',
    })

    console.log(state)
    return (
        <div className="">
            <HeaderPanelAdmin id = {6} />
            
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">EDIT ITEM</h1>

                    <form>
                        {/* image view */}
                        <div className="flex gap-5 items-center justify-center m-4">
                            {state.urlImage && (
                                <img src={baseURL + state.urlImage} style={{width: 150}}></img>
                            )}
                        </div>

                        {/* image */}
                        <div className="flex gap-5 items-center justify-center">
                            

                            <label htmlFor="image" className="text-blue-500">image</label>
                            <input 
                                type="file" id = "image" className="border-2 w-[300px] rounded-md h-10 p-2"
                                placeholder="select image ...." 
                                // onChange={(event) => {handleImageChange(event)}}
                                accept="image/*"
                            ></input>
                        </div>

                                <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {/* {state.imageWarning} */}
                            </span>
                        </div>
                        <hr className="my-8"/>

                        {/* caption -> body*/} 
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="caption" className="text-blue-500">caption</label>
                            <textarea 
                                value = {state.body}
                                type="text" id = "caption" className="border-2 w-[300px] rounded-md h-30 p-2"
                                onChange={(e) => {dispatch({type: 'caption', payload: e.target.value})}}
                            ></textarea>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.bodyWarning}
                            </span>
                        </div>
                        <hr className="my-8"/>

                    </form>
                </div>

            </div>
        </div>
    )
}
export default EditMegaMenuImage;