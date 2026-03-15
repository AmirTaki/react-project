import { useEffect, useReducer } from "react";
import HeaderPanelAdmin from "../../header/header";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../../axiosConfig";

const EditSessionAdvertBoard = () => {
    const {id} =  useParams()
    const navigate =  useNavigate()

    const reducer = (state, action) => {
        switch(action.type){

            case "GetRequest":
                return {...state, 
                    title : action.payload.title, 
                    body: action.payload.body,
                    description: action.payload.description
                }

            case "title":
                return {...state, title : action.payload}
            
            case "body":
                return {...state, body: action.payload}

            
            case "description": 
                return {...state, description: action.payload}
            
                case "warning": 
                return {...state, 
                    titleWarning: action.payload.title,
                    bodyWarning: action.payload.body,
                    descriptionWarning: action.payload.description
                }   
            
            default: 
                return state;
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        title: '',
        titleWarning: '',
        body: '',
        bodyWarning: '',
        description: '',
        descriptionWarning: '',
    })
  
    const getRequestPapular =  async (id) => {
        try{
            await api.get(`tables/session/advertBoard/advert.php/${id}` ,{withCredentials: true}).then((res) => {
                dispatch({type: 'GetRequest', payload : res.data})
            })
        }
        catch(err){
            console.error('message: ', err);
            navigate('/panelAdmin/session/Popular')
            
        }
    }
    useEffect(() => {
        getRequestPapular(id);
    }, [])

    const editItems = async (event, id) => {
        event.preventDefault();
        dispatch ({type: 'warning', payload : {body: '', description: '', title: '', }})

        try{
            await api.put(`tables/session/advertBoard/edit.php/${id}`, state).then((res) => {
                res.data;
                navigate('/panelAdmin/session/advertBoard');
            })
        }
        catch(err) {
            if(err.message == "Request failed with status code 400"){
                dispatch ({type: 'warning', payload : {
                    body: 'body is requierd !!', 
                    description: 'description is requierd !!', 
                    title: 'title is requierd !!', 
                }})
            }
            else if (err.message == "Request failed with status code 405"){
                navigate('/panelAdmin/session/advertBoard');
            }
            console.error(err.message);
        }
    }

    return(
        <div className="">
            <HeaderPanelAdmin  id = {16}/>
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex justify-center items-center flex-col ">
                    <h1 className="my-4 text-4xl hover:tracking-[.3rem] duration-200 hover:text-sky-400">edit items</h1>
                
                      <form>
                        {/* title */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="name" className="text-blue-500">title</label>
                            <input 
                                value = {state.title}
                                type="text" id = "name" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'title', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">{state.titleWarning}</span>
                        </div>

                        <hr className="my-8"/>
                        
                        {/* body */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="body" className="text-blue-500">caption</label>
                            <textarea
                                value = {state.body}
                                 id = "body" className="border-2 w-[300px] rounded-md h-40 p-2"
                                onChange={(e) => {dispatch({type: 'body', payload: e.target.value})}}
                            ></textarea>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">{state.bodyWarning}</span>
                        </div>

                        <hr className="my-8"/>
                       
                        {/* description */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="description" className="text-blue-500">description</label>
                            <textarea
                                value = {state.description}
                                id = "description" className="border-2 w-[300px] rounded-md h-40 p-2"
                                onChange={(e) => {dispatch({type: 'description', payload: e.target.value})}}
                            ></textarea>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">{state.descriptionWarning}</span>
                        </div>

                        <hr className="my-8"/>

                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {editItems(event, id)}}
                                type="submit" value = "upadate" 
                                className="border-2 px-4 py-2 rounded-xl cursor-pointer hover:text-green-600 duration-300 hover:border-green-600" 
                            />
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditSessionAdvertBoard;