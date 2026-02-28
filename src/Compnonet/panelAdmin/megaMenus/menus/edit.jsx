import { useEffect, useReducer } from "react";
import HeaderPanelAdmin from "../../header/header";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../../axiosConfig";

const EditMenuHeaders = () => {
    const {id} =  useParams()
    const navigate =  useNavigate()

    const reducer = (state, action) => {
        switch(action.type){

            case "GetRequest":
                return {...state, titleOld: action.payload, title : action.payload}

            case "title":
                return {...state, title : action.payload}
            
            case "warning": 
                return {...state, warning: action.payload}
            default: 
                return state;
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        title: '',
        titleOld: '',
        warning: ''
    })
  
    const getMenus =  async (id) => {
        try{
            await api.get(`tables/megaMenu/menus/menu.php/${id}` ,{withCredentials: true}).then((res) => {
                dispatch({type: 'GetRequest', payload : res.data.title})
            })
        }
        catch(err){
            console.error('message: ', err);
            navigate('/PanelAdmin/header/menus')
            
        }
    }
    useEffect(() => {
        getMenus(id);
    }, [])

    const editItems = async (event, id) => {
        event.preventDefault();
        dispatch({type : "warning", payload: ''})

        try{
            await api.put(`tables/megaMenu/menus/edit.php/${id}`, state).then((res) => {
                res.data;
                navigate('/PanelAdmin/header/menus')
            })
        }
        catch(err) {
            if(err.message == "Request failed with status code 400"){
                dispatch({type : "warning", payload: 'empty title !!!'})
            }
            else if(err.message == "Request failed with status code 409"){
                dispatch({type : "warning", payload: 'title repeat ~ please change name title !!'})
            }
            console.error(err.message);
        }
    }

    return(
        <div className="">
            <HeaderPanelAdmin />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex justify-center items-center flex-col ">
                    <h1 className="my-4 text-4xl hover:tracking-[.3rem] duration-200 hover:text-sky-400">edit items</h1>
                
                    <form>
                        {/* title edit */}
                        <div className="flex gap-5 items-center justify-center mt-8">
                            <label htmlFor="name" className="text-blue-500">title</label>
                            <input 
                                type="text" id = "name" className="border-2 w-[300px] rounded-md h-10 p-2"
                                value={state.title}
                                onChange={(e) => {dispatch({type: 'title', payload: e.target.value})}}

                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.warning}
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

export default EditMenuHeaders;