
import imgBackGround from "../../assets/background.jpg"
import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { reducer } from "./reducer";
import Nav from "./nav";
import Register from "./register";
import Login from "./login";
export const ValidationForm =  createContext()

const Validation = () => {


    const [state, dispatch] = useReducer(reducer, {
        page : false,
        moveLabel : {},
        registerPage  : false,
        checkBox : {},
        inputValue : {},
        inputWarning : {},
        inputStatus : {},
        Successful : false
    })

        useEffect(() => {
        dispatch({type : 'checkUsername', payload : 2})
        dispatch({type : 'checkEmail', payload : 3})
        dispatch({type : 'checkPassword', payload : 4})
    }, [state.inputValue])

    const submitRegiser = (e) => {
        if(state.inputStatus[2]){
            if(state.inputStatus[3]){
                if(state.inputStatus[4]){
                    dispatch({ type : "Successful", payload : true })
                }
                else {
                    dispatch({type : 'warning', payload : {index : 4, warning : "Password is requierd" }})
                }
            }
            else {
                dispatch({type : 'warning', payload : {index : 3, warning : "Email is requierd" }})
            }
        }
        else {
            dispatch({type : 'warning', payload : {index : 2, warning : "Username is requierd" }})
        }
        e.preventDefault()
        

       
    }
    return (
     
        <div style={{backgroundImage: `url("${imgBackGround}")`, height : '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className=" flex justify-center! items-center! flex-col gap-10 ">
                <ValidationForm.Provider value = {{state, dispatch, submitRegiser}} >
                    <Nav />
                    {/* section login */}
                    <div className={`
                        ${state.page ? "scale-100 duration-300" : "scale-0 duration-300"}
                        ${state.registerPage  ?  'h-[520px]! duration-500' : '  h-[440px]! duration-500'}
                        relative w-[400px] bg-transparent border-2 border-[rgba(255,255,255,.5)]
                        rounded-[20px]  backdrop-blur-[20px] shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center!
                        justify-center! overflow-hidden
                        `}
                    >
                        <span
                            onClick={()=>{dispatch({type: "pageLogin" , payload : false})}}
                            className="absolute top-0 right-0 w-[45px] h-[45px] bg-[#162038] text-[2em] text-white  flex items-center
                            justify-center rounded-bl-[20px] cursor-pointer z-10" 
                        > 
                        <i className="bi bi-x-lg text-[22px]"></i>
                        </span>
                        


                        {/* register */}
                        <Register />
                        {/* login */}
                        <Login />
            
                    </div>
                </ValidationForm.Provider>
              
            </div>
        </div>
    )
}

export default Validation