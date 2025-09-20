
import imgBackGround from "../../assets/background.jpg"
import { createContext, useContext, useEffect, useReducer, useRef, useState } from "react";
import Nav from "./nav";
import SectionValidation from "./sectionValidation";
import { reducer } from "./reducer";
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
        Successful : false,
        PanelAdmin : false
     })

    const submitLogin = (e) => {
        if(state.inputStatus[0]){
            if(state.inputStatus[1]){
                dispatch({ type : "PanelAdmin", payload : true })
            }
            else {
                dispatch({type : 'warning', payload : {index : 1, warning : "Password is requierd" }})
            }
        }
        else {
            dispatch({type : 'warning', payload : {index : 0, warning : "Email is requierd" }})
        }
        e.preventDefault()

    }
    useEffect(() => {
        
        dispatch({ type : "Successful", payload : false })
        dispatch({ type : "PanelAdmin", payload : false })
        
        // login
        // dispatch({type : 'checkEmail', payload : 0})
        // dispatch({type : 'checkPassword', payload : 1})
        dispatch({type : "checkInputLogin", payload : 0})
        dispatch({type : "checkInputLogin", payload : 1})


        // register
        dispatch({type : 'checkUsername', payload : 2})
        dispatch({type : 'checkEmail', payload : 3})
        dispatch({type : 'checkPassword', payload : 4})
    }, [state.inputValue])


    return (
     
        <div style={{backgroundImage: `url("${imgBackGround}")`, height : '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className=" flex justify-center! items-center! flex-col gap-10 ">    
                <ValidationForm.Provider value = {{ state, dispatch, submitLogin }} >
                    <Nav />
                    <SectionValidation />
                </ValidationForm.Provider>
            </div>
        </div>
    )
}

export default Validation