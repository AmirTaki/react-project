import { useReducer } from "react";
import HeaderPanelAdmin from "../header/header";

const CreateUsers = () => {
    const reducer = (state, action ) => {
        switch(action.type){
            case "showPassword":
                return {...state, showPassowrd : action.payload.target.checked}

            case "name": 
                return {...state, name : action.payload}
            
            case "email": 
                return {...state, email : action.payload}
           
            case "password": 
                return {...state, password : action.payload}

            default: 
                return state
        }
    }


    const sumbitRegister = async (event) => {
        event.preventDefault();

        try {

        }
        catch(error){
            console.error("خطا در شبکه یا CORS:", error.message);
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        showPassowrd: false, 
        name : '',
        email : '', 
        password: ''
    })

    return(
        <div className="">
            <HeaderPanelAdmin />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">ADD USER</h1>
                    <form>

                        {/* name */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="name" className="text-blue-500">name</label>
                            <input 
                                value={state.name} type="text" id = "name" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'name', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:</div>

                        <hr className="my-8"/>

                        {/* email */}
                        <div className="flex gap-5 items-center justify-center ">
                            <label htmlFor="email" className="text-yellow-500">email</label>
                            <input 
                                onChange={(e) => {dispatch({type: 'email', payload: e.target.value})}}
                                type="email" value={state.email} id = "email" className="border-2 w-[300px] rounded-md h-10 p-2"
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:</div>
                
                        <hr className="my-8"/>
                        {/* passowrd */}
                        <div className="flex gap-5 items-center justify-center ">
                            <label htmlFor="password" className="text-red-500">password</label>
                            <input 
                                value={state.password} type = {state.showPassowrd ? 'text' : 'password'} id = "password" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'password', payload: e.target.value})}}
                            >        
                            </input>
                        </div>
                        {/* checkbox show hidden password */}
                        <div className="flex gap-2 items-center justify-left  pt-8">
                            <label htmlFor = "showpass"> {state.showPassowrd ? "hidden password" : "show password"} </label>
                            <input  id = "showpass" type="checkbox" onChange={(e) => {dispatch({type: "showPassword", payload: e})}}/>
                        </div>

                        <div className="text-gray-500 py-5">message:</div>


                        <hr className="my-8"/>

                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {sumbitRegister(event)}}
                                type="submit" 
                                className="border-2 px-4 py-2 rounded-xl cursor-pointer hover:text-green-600 duration-300 hover:border-green-600" 
                            />
                        </div>
                
                    </form>
                
                </div>
            </div>
        </div>
    )
}

export default CreateUsers;