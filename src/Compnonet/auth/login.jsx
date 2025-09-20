import { useContext } from "react"
import { ValidationForm } from "./auth"
import InputComponent from "./inputComponent"
import CheckComponent from "./checkBoxComponent"
import ButtonComponent from "./buttonComponent"
import MessageTransfer from "./messageTransfer"


const Login = () => {
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
    const {state, dispatch,   } =  useContext(ValidationForm)
    return(
        <div className={`${state.registerPage ? " right-100!  duration-500! scale-0! opacity-0!" : " opacity-100! scale-100!  right-0! duration-500"}   w-[100%] h-[100%] absolute! top-12`}>
            <h2 className="text-3xl text-[#162938] text-center">Login</h2>
            <form action = "#">
                {/* answer Registration */}
                <div className={ `${state.PanelAdmin ? "flex!" : "hidden!"} absolute  text-pink-600 bg-[#162038] px-3 py-2 text-center  -top-10 left-32`}>Your Wellcome</div>

                {/* email login */}
                <InputComponent 
                    icon = {"bi bi-envelope"} 
                    label = {'Email'}
                    onChange = {(e)=> {dispatch({type : 'inputValue', payload : {index : 0, value : e.target.value} })}}
                    onFocus={() => {dispatch({type : "moveLabel", payload : {index : 0, bool : true}})}}
                    onBlur={() => {dispatch({type : "moveLabel", payload : {index : 0, bool : false}})}}
                    type={'email'}
                    id = {"emailLogin"}
                    MoveLabel={state.moveLabel[0]}
                    inputStatus={state.inputStatus[0]}     
                    inputWarning={state.inputWarning[0]}    
                />
            
                {/*  password login */}
                <InputComponent 
                    icon = {"bi bi-lock"} 
                    label = {'Password'}
                    onChange = {(e)=> {dispatch({type : 'inputValue', payload : {index : 1, value : e.target.value} })}}
                    onFocus={() => {dispatch({type : "moveLabel", payload : {index : 1, bool : true}})}}
                    onBlur={() => {dispatch({type : "moveLabel", payload : {index : 1, bool : false}})}}
                    type={state.checkBox[0] ? "text" : "password"}
                    id = {"passwordLogin"}
                    MoveLabel={state.moveLabel[1]}
                    inputStatus={state.inputStatus[1]}     
                    inputWarning={state.inputWarning[1]}               
                />
                {/* checkbox login */}
                <CheckComponent 
                    id = {"checkboxLogin"}
                    onChange = {(e) => {dispatch({type : "checkBox", payload : {number : 0 , flag : e.target.checked}})}} 
                    label  = {'Show Password'}
                    forgetPassword = {true}
                />
                {/* button login */}
                <ButtonComponent 
                    onClick={(e) => {submitLogin(e)}}
                    value = {'Login'}
                />
            
                {/* move login to register */}
                <MessageTransfer 
                    message={"Don't have an account?  "}
                    onClick={()=>{dispatch({type :"registerPage", payload : true})}}
                    page = {'Register'}
                />
            </form>
        </div>
    )
}

export default Login