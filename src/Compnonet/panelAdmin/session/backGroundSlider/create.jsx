import { useReducer } from "react";
import HeaderPanelAdmin from "../../header/header";
import api from "../../../../axiosConfig";
import { useNavigate } from "react-router-dom";

const CreateSessionBackGroundSlider = () => {
    const navigate =  useNavigate()
    const reducer = (state, action) => {
        switch(action.type){
            case "title":
                return {...state, title: action.payload}
            
            case "warning": 
                return {...state, warningImage: action.payload.image, warningTitle: action.payload.title}    

            case "SET_IMAGE":
                return {...state, image: action.payload}

            case "SET_IMAGE_URL":
                return {...state, urlImage: action.payload}

            default :
                return state;
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        urlImage: '',
        image: '',
        title: '',
        warningImage: '',
        warningTitle: '',
    })  

    const handleImageChange = (event) => {
        const file =  event.target.files[0]
        if(file){
            dispatch({type: 'SET_IMAGE', payload: file})
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            dispatch({type: "SET_IMAGE_URL", payload: reader.result})
        }
        reader.readAsDataURL(file);
    }

    const addSlider = async (event) => {
        event.preventDefault();
        dispatch({type: 'warning', payload: {image: '', title: ''}})

        const formData = new FormData();
        if(state.image){
            formData.append('image', state.image);
            // formData.append('imageURL', state.urlImage);
        }
        formData.append('title', state.title)

        try{
            await api.post('tables/session/backGroundSlider/add.php', formData, {withCredentials: true}, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then((res) => {
                res;
                navigate('/panelAdmin/session/backgroundslider');
            })
            
        }
        catch(err){
            if(err.message == 'Request failed with status code 422'){
                dispatch({type: 'warning', payload : {title: 'title not is empty!', image: "image not is empty"}})
            }
            else if(err.message == 'Request failed with status code 405'){
                navigate('/');
            }
            else if(err.message == 'Request failed with status code 404'){
                dispatch({type: 'warning', payload : {image: "not upload image please repeat !!"}})
            }
            console.error('message: ', err)
        }
    }
    return(
        <div className="">
            <HeaderPanelAdmin id = {7} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">ADD SLIDER</h1>

                    <form>
                        {/*image view  */}
                        <div className="flex gap-5 items-center justify-center m-4">
                            {state.urlImage && (
                                <img src={state.urlImage} style={{width: 100}}></img>
                            )}
                        </div>

                        {/* image */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="image" className="text-blue-500">image</label>
                            <input 
                                type="file" id = "image" className="border-2 w-[300px] rounded-md h-10 p-2"
                                placeholder="select image ...." 
                                onChange={(event) => {handleImageChange(event)}}
                                accept="image/*"
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.warningImage}
                            </span>
                        </div>
                        
                        <hr className="my-8"/>

                        {/* title */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="title" className="text-blue-500">title</label>
                            <input 
                                value = {state.title}
                                type="text" id = "title" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'title', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.warningTitle}
                            </span>
                        </div>

                        <hr className="my-8"/>                        
                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {addSlider(event)}}
                                type="submit" value = "ADD" 
                                className="border-2 px-4 py-2 rounded-xl cursor-pointer hover:text-green-600 duration-300 hover:border-green-600" 
                            />
                        </div>

                    </form>
                </div>
            </div>
                   
        </div>
    )
}
export default CreateSessionBackGroundSlider;