import { useEffect, useReducer } from "react";
import HeaderPanelAdmin from "../../header/header";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../../axiosConfig";

const EditFooterAdvertYellow = () => {
    const {id} =  useParams()
    const navigate =  useNavigate()

    const reducer = (state, action) => {
        switch(action.type){

            case "GetRequest":
                return {...state, 
                    title : action.payload.title, 
                    button: action.payload.button,    
                }

            case "title":
                return {...state, title : action.payload}
            
            case "button":
                return {...state, button: action.payload}
            
            case "warning": 
                return {...state, 
                    titleWarning: action.payload.title,
                    buttonWarning: action.payload.button,
                }   
            
            default: 
                return state;
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        title: '',
        titleWarning: '',
        button: '',
        buttonWarning: ''
    })
  
    const getRequestAdvert =  async (id) => {
        try{
            await api.get(`tables/footer/advertYelllow/advert.php/${id}` ,{withCredentials: true}).then((res) => {
                dispatch({type: 'GetRequest', payload : res.data})
            })
        }
        catch(err){
            console.error('message: ', err);
            navigate('/panelAdmin/footer/advertYellow')
            
        }
    }
    useEffect(() => {
        getRequestAdvert(id);
    }, [])

    const editItems = async (event, id) => {
        event.preventDefault();
        dispatch ({type: 'warning', payload : {body: '', button: ''}})

        try{
            await api.put(`tables/footer/advertYelllow/edit.php/${id}`, state).then((res) => {
                res.data;
                navigate('/panelAdmin/footer/advertYellow');
            })
        }
        catch(err) {
            if(err.message == "Request failed with status code 400"){
                dispatch ({type: 'warning', payload : {
                    title: 'title is requierd !!', 
                    button: 'button is requierd !!', 
                }})
            }
            else if (err.message == "Request failed with status code 405"){
                navigate('/panelAdmin/footer/advertYellow');
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
                        
                        {/* button */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="button" className="text-blue-500">button</label>
                            <input 
                                value = {state.button}
                                type="text" id = "button" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'button', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">{state.buttonWarning}</span>
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

export default EditFooterAdvertYellow;