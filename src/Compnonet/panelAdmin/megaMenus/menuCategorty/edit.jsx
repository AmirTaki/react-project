import { useNavigate, useParams } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header";
import { useEffect, useReducer, useState } from "react";
import api from "../../../../axiosConfig";

const EditMegaMenuCategory = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [titles, setTitles] =  useState([])
    const [lists, setLists] = useState([])

    const reducer = (state, action) => {
        switch(action.type){
            case "GetRequest":
                return {...state,
                    title: action.payload.title, 
                    titleOld: action.payload.title,
                    list: action.payload.list,
                    listOld: action.payload.list,
                    category: action.payload.category,
                    categoryOld: action.payload.category,
                    id: action.payload.id,
                    sign: action.payload.sign
                };

            case "category": 
                return {...state, category: action.payload}

            case "title":
                return {...state, title: action.payload}

            case "list":
                return {...state, list: action.payload}
            
            case "sign":
                return {...state, sign: action.payload}

            case "warning":
                return {...state, warningCategory: action.payload.category, warningTitle: action.payload.title, warningList: action.payload.list}
  
            default:
                return state;
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        category: '',
        title: '',
        list: '',
        sign: '',
        categoryOld: '',
        titleOld: '',
        listOld: '',
        id: 0,
        warningCategory: '',
        warningTitle: '',
        warningList: '',
    })


    const getCategoryListTitle = async (id)  => {
        try{
            await api.get(`tables/megaMenu/menuCategory/category.php/${id}`, {withCredentials: true}).then((res) => {
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
            console.error('message: ', err);
        }
    }

    useEffect(() => {getCategoryListTitle(id)}, [])
    
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

    const editCategory = async (event) => {
        event.preventDefault();
        dispatch({type : "warning", payload: {title: '', list: '', category: ''}})

        try{
            await api.put('tables/megaMenu/menuCategory/edit.php', state).then((res) => {
                res.data;
                navigate("/panelAdmin/megaMenu/category");
            })
        }
        catch(err){
            if(err.message == "Request failed with status code 400"){
                dispatch({type : "warning", payload: {title: 'empty title !!!', list: 'empty list !!!', category: 'empty category !!!'}});
            }
            else if(err.message == 'Request failed with status code 405'){
                navigate('/');
            }
            else if(err.message == 'Request failed with status code 415'){
                dispatch({type : "warning", payload: { category: 'repeat categoryy  !!!  change name category ???'}})
            }
            console.error('message: ',err)
        }
    }


    return (
        <div className="">
            <HeaderPanelAdmin  id = {4}/>
            
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">EDIT ITEM</h1>

                    <form>
                        {/* category */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="category" className="text-blue-500">category</label>
                            <input 
                                value = {state.category}
                                type="text" id = "category" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'category', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.warningCategory}
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
                                {state.warningTitle}
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
                                            selected = { li.list === state.list }
                                        >
                                            {li.list}
                                        </option>
                                    )
                                })}
                            </select>
                        </div> 
                        
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.warningList}
                            </span>
                        </div>
                        
                        <hr className="my-8"/>
                        
                        {/* sign */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="sign" className="text-blue-500">sign</label>
                            <input 
                                value = {state.sign}
                                type="text" id = "sign" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'sign', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {/* {state.w} */}
                            </span>
                        </div>              
                            
                        <hr className="my-8"/>
                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {editCategory(event)}}
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
export default EditMegaMenuCategory;