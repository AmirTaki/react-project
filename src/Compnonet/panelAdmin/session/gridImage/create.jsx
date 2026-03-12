import { useReducer } from "react"
import HeaderPanelAdmin from "../../header/header"
import { useNavigate } from "react-router-dom"
import api from "../../../../axiosConfig"

const CreateSessionGridImage = () => {
    const navigate =  useNavigate();
    const reducer = (state, action) => {
        switch(action.type){
            case "title":
                return {...state, title: action.payload}
            
            case "body":
                return {...state, body: action.payload}
            
            case "link":
                return {...state, link: action.payload }

            case "SET_IMAGE":
                return {...state, image: action.payload}

            case "SET_IMAGE_URL":
                return {...state, urlImage: action.payload}

            case "warning":
                const {title} = action.payload 
                const {body} = action.payload 
                const {image} = action.payload 
                const {link} = action.payload 
                return {...state, titleWarning: title, bodyWarning: body, linkWarning: link, imageWarning: image}
            
            default: 
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        title: '',
        titleWarning: '',
        body: '',
        bodyWarning: '',
        link: '',
        linkWarning: '',
        image: '',
        urlImage: '',
        imageWarning: ''
    })

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if(file){
            dispatch({type: 'SET_IMAGE', payload: file})
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            dispatch({type: 'SET_IMAGE_URL', payload: reader.result});
        }
        reader.readAsDataURL(file);
    }


    const addBoxGrid = async (event) => {
        event.preventDefault();
        dispatch({type: 'warning', payload : {image: '', title: '', link: '', body: ''}})

        const formData = new FormData();
        if(state.image){
            formData.append('image', state.image)
        }
        formData.append('body', state.body)
        formData.append('title', state.title)
        formData.append('link', state.link)

        try{
            await api.post('tables/session/gridImage/add.php', formData, {withCredentials: true}, {
                headers: {
                    'Content-Type': 'multipart/form-data',   
                }
            }).then((res) => {
                res;
                navigate('/panelAdmin/session/gridImage');
            })
              
        }
        catch(err){
            if(err.message == 'Request failed with status code 422'){
                dispatch({type: 'warning', payload : {title: 'title is requierd!', image: "image is requierd", body: 'body is requierd', link: 'link is requierd'}})
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
            <HeaderPanelAdmin id = {8} />
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
                                {state.imageWarning}
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
                                {state.titleWarning}
                            </span>
                        </div>

                        <hr className="my-8"/>                        
                        {/* body */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="body" className="text-blue-500">caption</label>
                       
                            <textarea
                                id = 'body'
                                className="border-2 w-[300px] rounded-md h-23  p-1"
                                onChange={(e) => {dispatch({type: 'body', payload: e.target.value})}}
                            ></textarea>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.bodyWarning}
                            </span>
                        </div>

                        <hr className="my-8"/>    
                        
                        {/* link */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="link" className="text-blue-500">link</label>
                            <input 
                                value = {state.link}
                                type="text" id = "link" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'link', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.linkWarning}
                            </span>
                        </div>      
                        
                        <hr className="my-8"/>               
                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {addBoxGrid(event)}}
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

export default CreateSessionGridImage;