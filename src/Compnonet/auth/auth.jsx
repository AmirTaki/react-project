
import imgBackGround from "../../assets/background.jpg"
import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { reducer } from "./reducer";
import Nav from "./nav";
import SectionValidation from "./sectionValidation";
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
                    <SectionValidation />
                </ValidationForm.Provider>
              
            </div>
        </div>
    )
}

export default Validation