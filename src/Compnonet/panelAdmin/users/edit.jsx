import { useEffect, useReducer, useState } from "react";
import HeaderPanelAdmin from "../header/header";
import api from "../../../axiosConfig";
import { useNavigate, useParams } from "react-router-dom";

const EditUsers = () => {
    const {id} = useParams();
    const navigate =  useNavigate()

    const reducer = (state, action) => {
        switch(action.type){

            case "GetUsers":
                return {
                    ...state,
                    username: action.payload.name,
                    email: action.payload.email,
                    emailOld: action.payload.email,
                    password: '',
            }

            case "showPassword":
                return {...state, showPassowrd : action.payload.target.checked}

            case "editPassword": 
                return {...state, editPassword : !action.payload.target.checked}

            case "username": 
                return {...state, username : action.payload}
            
            case "email": 
                return {...state, email : action.payload}
            
            case "password": 
                return {...state, password : action.payload}
            
            case "warning": 
                return {...state, 
                    usernameWarning : action.payload.name , 
                    emailWarning : action.payload.email  ,
                    passwordWarning : action.payload.password  
                }
            
            default: 
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        showPassowrd: false, 
        username : '',
        emailOld: '',
        email : '', 
        password: '',
        usernameWarning: '',
        emailWarning: '',
        passwordWarning: '',
        editPassword : true,
    })
    
    const getUsers = async () => {
        // 
        try{
            await api.get(`tables/users/userList.php/${id}`, {withCredentials: true}).then((res) => {
                // const data = Array.isArray(res.data) ? res.data : [];
                dispatch({type : 'GetUsers', payload: {name : res.data.name, email : res.data.email, password: res.data.password}})
            }) 
        }
        catch(err){
            console.error("message: ", err.message);
            navigate('/PanelAdmin/UsersPanelAdmin')
        }
    }

    useEffect(() => {getUsers()}, [])

    const editAccount = async (event) => {
    
        event.preventDefault();

        dispatch({type : 'warning', payload: { name: '', email: '',  password: ''}})

        try{
            await api.put(`tables/users/edit.php/${id}`, state).then((res) =>{  
                res.data;  
                navigate('/PanelAdmin/UsersPanelAdmin')
            })
        }
        catch(error){
            if(error.message == "Request failed with status code 300"){
                dispatch({type : 'warning', payload: {
                    name: 'Write full Name',
                    email: 'Write full Email', 
                    password: 'Password should contain'
                }})
            }
            else if(error.message == "Request failed with status code 400"){
                dispatch({type : 'warning', payload: {
                    name: 'Write full Name',
                    email: 'Write full Email', 
                    password: ''
                }})
            }
            else if(error.message == "Request failed with status code 409"){
                dispatch({type : 'warning', payload: {
                    name: '',
                    email: 'Email repeat ! please change email ??', 
                    password: ''
                }})
            }
        }
    }

    return(
        <div className="">
            <HeaderPanelAdmin  id = {1}/>
        
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex justify-center items-center flex-col ">
                    <h1 className="my-4 text-4xl hover:tracking-[.3rem] duration-200 hover:text-sky-400">edit users</h1>
                    
                    <form>

                        {/* name */}
                        <div className="flex gap-5 items-center justify-center mt-8">
                            <label htmlFor="name" className="text-blue-500">name</label>
                            <input 
                                type="text" id = "name" className="border-2 w-[300px] rounded-md h-10 p-2"
                                value={state.username}
                                onChange={(e) => {dispatch({type: 'username', payload: e.target.value})}}

                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.usernameWarning}
                            </span>
                        </div>

                        <hr className="my-8"/>

                        {/* email */}
                        <div className="flex gap-5 items-center justify-center ">
                            <label htmlFor="email" className="text-yellow-500">email</label>
                            <input 
                                onChange={(e) => {dispatch({type: 'email', payload: e.target.value})}}
                                value={state.email}
                                type="email"  id = "email" className="border-2 w-[300px] rounded-md h-10 p-2"
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.emailWarning}
                            </span>
                        </div>
                
                        <hr className="my-8"/>
                        {/* passowrd */}
                        <div className="flex gap-5 items-center justify-center ">
                            <label htmlFor="password" className="text-red-500">password</label>
                            <input 
                                disabled = {state.editPassword}
                                value={state.password} 
                                type = {state.showPassowrd ? 'text' : 'password'} 
                                id = "password" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'password', payload: e.target.value})}}
                            >        
                            </input>
                        </div>

                        {/* check box */}
                        <div className="flex items-center justify-between">
                            {/* checkbox show hidden password */}
                            <div className="flex gap-2 items-center justify-left  pt-8">
                                <label htmlFor = "showpass"> 
                                    {state.showPassowrd ? "hidden password" : "show password"}
                                </label>
                                <input  id = "showpass" type="checkbox" 
                                    onChange={(e) => {dispatch({type: "showPassword", payload: e})}}
                                />
                            </div>

                            {/* edit password */}
                            <div className="flex gap-2 items-center justify-left  pt-8">
                                <label htmlFor = "editpassword"> 
                                    edit password
                                </label>
                                <input  id = "editpassword" type="checkbox" 
                                    onChange={(e) => {dispatch({type: "editPassword", payload: e})}}
                                />
                            </div>
                        </div>

                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">{state.passwordWarning}</span>
                        </div>


                        <hr className="my-8"/>

                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {editAccount(event)}}
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
export default EditUsers;