import { useEffect, useState } from "react";
import HeaderPanelAdmin from "../../header/header";
import api from "../../../../axiosConfig";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const CreateMegaMenuList = () => {
    const [title, setTitle] = useState([])
    const navigate =  useNavigate('')
    const getTitle = async() => {
        try{
            await api.get('tables/megaMenu/menus/menu.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setTitle(data);
            })
        }
        catch(err){
            console.error('message: ', err);
        }
    }
    
    useEffect(() => {getTitle()}, [])

    const reducer = (state, action) => {
        switch(action.type){
            case "list":
                return {...state, list: action.payload}
            
            case "title":
             
                return {...state, title: action.payload}

            case "warning":
                return {...state, warningTitle : action.payload.title, warningList: action.payload.list}
            
            default: 
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        title: '',
        list: '',
        warningTitle: '',
        warningList: ''
    })

    const addList = async (event) => {
        event.preventDefault();
        dispatch({type: 'warning', payload : {title: '', list : ''}})

        try{
            await api.post('tables/megaMenu/menuList/add.php', state, {withCredentials: true}).then((res) => {
                res;
                navigate("/panelAdmin/megaMenu/list");

            })
        }
        catch(err){
            if(err.message == 'Request failed with status code 422'){
                dispatch({type: 'warning', payload : {title: 'title not is empty!', list : 'list not is empty!'}})
            }
            if(err.message == 'Request failed with status code 405'){
                navigate('/');
            }
            else if(err.message == 'Request failed with status code 415'){
                dispatch({type: 'warning', payload : {title: '', list : 'name list repeat ??? change name list !!!'}})
            }
            console.error('message: ', err)
        }
    }
    return (
        <div className="">
            <HeaderPanelAdmin  id = {3}/>
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">ADD ITEM</h1>

                    <form>
                        {/* list */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="name" className="text-blue-500">list</label>
                            <input 
                                value = {state.list}
                                type="text" id = "name" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'list', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.warningList}
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
                                {state.warningTitle}
                            </span>
                        </div>
                     
                            
                        <hr className="my-8"/>
                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {addList(event)}}
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

export default CreateMegaMenuList;