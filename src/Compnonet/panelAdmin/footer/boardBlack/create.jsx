import { useEffect, useReducer } from "react"
import HeaderPanelAdmin from "../../header/header"
import api from "../../../../axiosConfig"
import { useNavigate } from "react-router-dom"

const CreateFooterBoardBlack = () => {
    
    const navigate = useNavigate()

    const reducer = (state, action) => {
        switch(action.type){
            case "title":
                return {...state, title: action.payload}

            case "warning": 
                if(state.title.length <= 0){
                    return {...state, warning : 'please emapty!! '}
                }
                return {...state, warning: action.payload}
            
            case "conter":
                return {...state, conter: state.conter +  action.payload}
            
            default: 
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        title: '',
        warning: '',
        conter: 0
    })


    const requestApi = async () => {
        try{
            await api.get(`tables/footer/boardBlack/board.php`, {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : []
                data.forEach(element => {
                    if(element.status == 10){
                        dispatch({type: 'conter', payload: 1})
                    }
                });
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    useEffect(() => {requestApi()}, [])
    console.log(state.conter)
    const addBoard = async (event) => {
        event.preventDefault();

        if(state.conter >= 24){
            dispatch ({type: 'warning', payload :  'please delete each item or disablse status each item'})
        }
        else {
            dispatch({type: 'warning', payload: ''})
    
            try{
                await api.post("tables/footer/boardBlack/add.php", state, {withCredentials: true}).then((res) => {
                    res;
                    navigate('/panelAdmin/footer/boardBlack')
                })
            }
    
            catch(err){
    
                if(err.message == "Request failed with status code 409"){
                    dispatch({type: 'warning', payload: 'title repeat change name title ?'})
                }
                else if(err.message == "Request failed with status code 422"){
                    dispatch({type: 'warning', payload: 'title is requierd ?'})
                }
                console.error(err.message);
            }
        }
    }
    return(
        <div className="">
            <HeaderPanelAdmin  id = {18}/>
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">ADD ITEM</h1>

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
                            <span className="text-red-600 px-2">{state.warning}</span>
                        </div>

                        <hr className="my-8"/>
                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {addBoard(event)}}
                                type="submit" value = "save" 
                                className="border-2 px-4 py-2 rounded-xl cursor-pointer hover:text-green-600 duration-300 hover:border-green-600" 
                            />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateFooterBoardBlack