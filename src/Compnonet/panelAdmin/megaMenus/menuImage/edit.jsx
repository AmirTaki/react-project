import { useNavigate, useParams } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header";
import { useEffect, useReducer, useState } from "react";
import api from "../../../../axiosConfig";
import baseURL from "../../../../baseUrl";

const EditMegaMenuImage = () => {
    const {id} = useParams()
    const navigate =  useNavigate()
    const [titles, setTitles] =  useState([])
    const [lists, setLists] = useState([])
    
    const getImageMegaMenus = async (id) => {
        try{
            await api.get(`tables/megaMenu/menuImage/image.php/${id}`, {withCredentials: true}).then((res) => {
                dispatch({type: 'GetRequest', payload: res.data});
            })

            await api.get('tables/megaMenu/menus/menu.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setTitles(data);
            })
           
            // await api.get('tables/megaMenu/menuList/list.php', {withCredentials: true}).then((res) => {
            //     const data = Array.isArray(res.data) ? res.data : [];
            //     setLists(data);
            // })        
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
                    image: action.payload.image,
                    backimage: action.payload.image,
                    body: action.payload.body
                }

            case "image": 
                return {...state, image: action.payload}

            case "SET_IMG_URL":
                return {...state, urlImage: action.payload}

            case "caption":
                return {...state, body: action.payload}   
                
            case 'title':
                return {...state, title: action.payload}

            case "list": 
                return {...state, list: action.payload}

            case "warning":
                return {...state, imageWarning: action.payload.image,  bodyWarning: action.payload.body, titleWarning: action.payload.title, listWarning: action.payload.list }

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
        backimage: '',
    })


    const getListRequest = async (title) => {
        try{
            await api.post(`tables/megaMenu/menuList/list.php`,{'title' : title}, {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setLists(data);
            })
        }
        catch(err){
            console.error('message: ',err);
        }
    }

    useEffect(() => {
        getListRequest(state.title);
        dispatch({type: 'list', payload: ''})
    }, [state.title])

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if(file){
            dispatch({type: 'image', payload: file});

            const reader = new FileReader();
            reader.onload = () => {
                dispatch({type: 'SET_IMG_URL', payload: reader.result});
            }
            reader.readAsDataURL(file);
        }
    }

    const editImage = async (event) => {
        event.preventDefault();
        dispatch({type: 'warning', payload: {image: '', body: '', title: '', list : ''}})

        const formData = new FormData();
       
        if(state.image){
            formData.append('image', state.image);
        }
        formData.append('title', state.title);
        formData.append('body', state.body);
        formData.append('list', state.list);
        formData.append('id', state.id);
        formData.append('backImage', state.backimage);
   

        try{
            await api.post('tables/megaMenu/menuImage/edit.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then((res) => {
                res.data;
                navigate('/panelAdmin/megaMenu/image');
            })
        }
        catch(err){
      
            if(err.message == "Request failed with status code 422"){
                dispatch({type : "warning", payload: {title: 'empty title !!!', list: 'empty list !!!', body: 'empty body !!'}});
            }

            else if(err.message == 'Request failed with status code 405'){
                navigate('/');
            }
            
            else if(err.message == 'Request failed with status code 404'){
                dispatch({type: 'warning', payload : {image: "not upload image please repeat !!"}})
            }
        }

    }

    return (
        <div className="">
            <HeaderPanelAdmin id = {6} />
            
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">EDIT ITEM</h1>

                    <form  enctype="multipart/form-data">
                        {/* image view */}
                        <div className="flex gap-5 items-center justify-center m-4">
                            <img src={state.urlImage === "" ? baseURL + state.image : state.urlImage} style={{width: 150}}></img>
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

                        {/* title */}
                        <div className="flex gap-5 items-center justify-center">
                            
                            <label htmlFor="title" className="text-blue-500">title</label>
                            <select
                                onChange={(e) => {dispatch({type: 'title', payload: e.target.value})}}
                                id = "title" className="bg-[#252525]!  text-white border-2 w-[300px] rounded-md h-13 p-2 "
                            >
                                {titles?.map((t) => {
                                    return(
                                        <option  
                                            key = {t.id} 
                                            value={t.title}
                                            selected = {t.title === state.title}
                                        >
                                            {t.title}
                                        </option>
                                    )
                                })}
                            </select>
                        </div> 
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.titleWarning}
                            </span>
                        </div>

                             
                       <hr className="my-8"/>
                        {/* list */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="list" className="text-blue-500">list</label>
                            <select
                                onChange={(e) => {dispatch({type: 'list', payload: e.target.value})}}
                                id = "list" className="bg-[#252525]!  text-white border-2 w-[300px] rounded-md h-13 p-2 "
                            >
                                <option value= "" className="hidden" selected>select one option ?</option>
                                {lists?.map((li) => {
                                    return(
                                        <option  
                                            key = {li.id} 
                                            value={li.list}
                                            selected = {li.list === state.list}
                                        >
                                            {li.list}
                                        </option>
                                    )
                                })}
                            </select>
                        </div> 

                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.listWarning}
                            </span>
                        </div>
                        
                        <hr className="my-8"/>

                        {/* edit button -> submit */}
                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {editImage(event)}}
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
export default EditMegaMenuImage;