import { useNavigate, useParams } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header";
import { useEffect, useState } from "react";
import api from "../../../../axiosConfig";
import { useReducer } from "react";

const EditFooterMenuItems = () => {
    const {id} = useParams()
    const [title, setTitle] =  useState([])
    const navigate =  useNavigate()
    
    const requestMenuFooter = async (id) => {
        try{
            await api.get(`tables/footer/menuItemFooter/item.php/${id}`, {withCredentials: true}).then((res) => {
                dispatch({type: 'GetResquest', payload: res.data});
            });

            await api.get('tables/footer/menuFooter/menu.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setTitle(data);
            })
        }
        catch(err){
            console.error('message: ', err);

        }
    }
    useEffect(() => {requestMenuFooter(id)}, [])

    const reducer = (state, action) => {
        switch(action.type){
            case "GetResquest": 
                return {
                    ...state, 
                    title: action.payload.title, 
                    titleOld: action.payload.title,
                    item: action.payload.item, 
                    itemOld: action.payload.item,
                    id: action.payload.id

                }

            case "item":  
                return {...state, item: action.payload}

            case "title": 
                return {...state, title: action.payload}

            case "warning": 
                return {...state, warningTitle: action.payload.title, warningItem: action.payload.item}
            
            default: 
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        title: '', 
        item: '',
        warningTitle: '', 
        warningItem: '',
        titleOld: '',
        itemOld: '',
        id: 0
    })
    
    const editItems = async (event, id) => {
        event.preventDefault();
        dispatch({type : "warning", payload: {title: '', item: ''}})

        try{
            await api.put(`tables/footer/menuItemFooter/edit.php/${id}`, state).then((res) => {
                res.data;
                navigate("/panelAdmin/footer/menuItemWhiteBoard");
            })
        }
        catch(err){
            if(err.message == "Request failed with status code 400"){
                dispatch({type : "warning", payload: {title: 'empty title !!!', item: 'item item !!!'}})
            }
            else if(err.message == 'Request failed with status code 405'){
                navigate('/');
            }
            else if(err.message == 'Request failed with status code 415'){
                dispatch({type : "warning", payload: { item: 'repeat item  !!!  change name item ???'}})
            }
            console.error('message: ', err)
        }
    }

    return(
        <div className="">
            <HeaderPanelAdmin  id = {20}/>
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                 <div className="flex justify-center items-center flex-col ">
                    <h1 className="my-4 text-4xl hover:tracking-[.3rem] duration-200 hover:text-sky-400">edit items</h1>
                
                    <form>
                        {/* item edit */}
                        <div className="flex gap-5 items-center justify-center mt-8">
                            <label htmlFor="name" className="text-blue-500">list</label>
                            <input 
                                type="text" id = "name" className="border-2 w-[300px] rounded-md h-10 p-2"
                                value={state.item}
                                onChange={(e) => {dispatch({type: 'item', payload: e.target.value})}}

                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.warningItem}
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
                                {title?.map((t) => {
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
                                {state.warningTitle}
                            </span>
                        </div>
                     
                            
                        <hr className="my-8"/>

                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {editItems(event, id)}}
                                type="submit"
                                value = "update" 
                                className="border-2 px-4 py-2 rounded-xl cursor-pointer hover:text-green-600 duration-300 hover:border-green-600" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditFooterMenuItems;
