import { useParams } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header";
import { useEffect, useReducer } from "react";
import api from "../../../../axiosConfig";

const EditSessionBackGroundSlider = () => {
    const {id} = useParams();

    const reducer = (state, action) => {
        switch(action.type){
            case "":
                return {...state}
            
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        image: '',
        urlImage:'',
        imageWarning: '',
        title: '',
        titleWarning: ''
    })
    
    const GetBackGroundSlider = async (id) => {
        try{
            await api.get(`tables/session/backGroundSlider/slider.php/${id}`, {withCredentials: true}).then((res) => {

            })
        }
        catch(err){
            console.error('message: ', err);
        }
    }
    useEffect(() => {GetBackGroundSlider(id)}, [])

    return(
        <div className="">
            <HeaderPanelAdmin id = {7}/>
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">EDIT ITEM</h1>
                   
                    {/* form */}
                    <form  enctype="multipart/form-data">
                        {/* image view */}
                        <div className="flex gap-5 items-center justify-center m-4">
                            {/* <img src={state.urlImage === "" ? baseURL + state.image : state.urlImage} style={{width: 150}}></img> */}
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

                        {/* title */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="title" className="text-blue-500">title</label>
                            <input 
                                // value = {state.title}
                                type="text" id = "title" className="border-2 w-[300px] rounded-md h-10 p-2"
                                // onChange={(e) => {dispatch({type: 'title', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {/* {state.warningTitle} */}
                            </span>
                        </div>
                        <hr className="my-8"/>     
                        
                        {/* edit button -> submit */}
                        <div className="flex justify-center items-center">
                            <input 
                                // onClick={(event) => {editImage(event)}}
                                type="submit" value = "EDIT" 
                                className="border-2 px-4 py-2 rounded-xl cursor-pointer hover:text-green-600 duration-300 hover:border-green-600" 
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default EditSessionBackGroundSlider;