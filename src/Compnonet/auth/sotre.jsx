import { createContext, useReducer } from "react"
import { reducer } from "./reducer"

export const AuthReducer = createContext()
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
export const submitRegiser = (e) => {
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
export const submitLogin = (e) => {
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