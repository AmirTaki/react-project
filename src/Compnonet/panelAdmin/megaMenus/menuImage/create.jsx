import { useEffect, useReducer, useState } from "react"
import HeaderPanelAdmin from "../../header/header"
import api from "../../../../axiosConfig"
import { useNavigate } from "react-router-dom"

const CreateMegaMenuImage = () => {
    const navigate =  useNavigate()
    const [title, setTitle] =  useState([])
    const [lists, setLists] =  useState([])
    
    const getTitleList = async () => {
        try{
            await api.get('tables/megaMenu/menus/menu.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setTitle(data);
            })
            await api.get('tables/megaMenu/menuList/list.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setLists(data);
            })        
        }
        catch(err){
            console.error('message: ', err)
        }
    }

    useEffect(() => {getTitleList()}, [])

    const reducer = (state, action) => {
        switch(action.type){
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
                return {...state, imageWarning: action.payload.image, bodyWarning: action.payload.body, titleWarning: action.payload.title, listWarning: action.payload.list}

            default : 
                return state
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        urlImage: '', // پیش نمایش url عکس برای ذخیره
        image: '',
        imageWarning: '',
        body: '',
        bodyWarning: '',
        title: '',
        titleWarning: '',
        list: '',
        listWarning: '',

    })

    const addImage = async (event) => {
        event.preventDefault();
        
        dispatch({type: 'warning', payload: {image: '', body: '', title: ''}})



        try{
            await api.post('tables/megaMenu/menuImage/add.php', state, {withCredentials: true}).then((res) => {
                res.data;
                navigate('/panelAdmin/megaMenu/image');
            })
        }
        catch(err){
            if(err.message == 'Request failed with status code 422'){
                dispatch({type: 'warning', payload : {title: 'title not is empty!', list : 'list not is empty!', image: "image not is empty", body: "body not is empty"}})
            }
            else if(err.message == 'Request failed with status code 405'){
                navigate('/');
            }
            console.error('message: ', err);
        }
      
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file){
            dispatch({type : 'image', payload: file});

            const reader = new FileReader();
            reader.onload = () => {
                dispatch({type: 'SET_IMG_URL', payload: reader.result})
            };
            reader.readAsDataURL(file);

        }
    }

    return (
        <div className="">
            <HeaderPanelAdmin id = {6} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">ADD ITEM</h1>
                   
                    <form >
                        {/* image */}
                        {state.urlImage && (
                            <img src={state.urlImage} style={{width: 100}}></img>
                        )}
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
                                <option value= "" className="hidden">select one option ?</option>
                                {title?.map((t) => {
                                    return(
                                        <option  key = {t.id} value={t.title}>
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
                                <option value= "" className="hidden">select one option ?</option>
                                {lists?.map((li) => {
                                    return(
                                        <option  key = {li.id} value={li.list}>
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
                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {addImage(event)}}
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
export default CreateMegaMenuImage