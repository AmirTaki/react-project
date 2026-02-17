import { useContext } from "react"
import { ValidationForm } from "./auth"
import InputComponent from "./inputComponent"
import CheckComponent from "./checkBoxComponent"
import ButtonComponent from "./buttonComponent"
import MessageTransfer from "./messageTransfer"
import axios from "axios"


const Login = () => {
    const {state, dispatch} =  useContext(ValidationForm)
    
    // const submitLogin = (e) => {
    //     console.log('ok')
    //     e.preventDefault()

    //     if(state.inputStatus["emailLogin"]){
    //         if(state.inputStatus["passwordLogin"]){
    //             dispatch({ type : "PanelAdmin", payload : true })
    //         }
    //         else {
    //             dispatch({type : 'warning', payload : {nameForm : "passwordLogin", message : "Password is requierd" }})
    //         }
    //     }
    //     else {
    //         dispatch({type : 'warning', payload : {nameForm : "emailLogin", message : "Email is requierd" }})
    //     }
    // }

    const submitLogin = async (e) => {
        e.preventDefault();

        try{
            await axios.post('http://localhost/project-react-Combination/back-end/auth/login.php', state.inputRegister).then((response)=> {
                response;
            })
        }
        catch(error){
            if(error.message == "Request failed with status code 422"){
                dispatch({type : 'warning', payload : { nameForm: 'passwordLogin', message : "Password is requierd" }})
                dispatch({type : 'warning', payload : {nameForm : 'emailLogin', message : "Email is requierd" }})
            }
            console.error("خطا در شبکه یا CORS:", error.message);
        }
    }
    
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
                  
                    onChange={(event) => {
                        dispatch({type: 'inputRegister', payload: event});
                        dispatch({type: 'checkEmailLogin', payload: event})
                    }}
                    onFocus={() => {dispatch({type : "focus", payload : {name: 'emailLogin'}})}} 
    
                    onBlur={() => {dispatch({type : "blur", payload : {name: 'emailLogin'}})}}

                    name = {'emailLogin'}
                    type={'email'}
                    id = {"emailLogin"}
                    MoveLabel={state.moveLabel['emailLogin']}
                    inputStatus={state.inputStatus['emailLogin']}     
                    inputWarning={state.inputWarning['emailLogin']}    
                />
            
                {/*  password login */}
                <InputComponent 
                    icon = {"bi bi-lock"} 
                    label = {'Password'}
                   
                    onChange = {(event)=> {
                        dispatch({type : 'inputRegister', payload: event });
                        dispatch({type: 'checkPasswordLogin', payload: event})
                    }}
                    onFocus={() => {dispatch({type : "focus", payload : {name: 'passwordLogin'}})}} 
    
                    onBlur={() => {dispatch({type : "blur", payload : {name: 'passwordLogin'}})}}
                    
                    name = {'passwordLogin'}
                    type={state.checkBox[0] ? "text" : "password"}
                    id = {"passwordLogin"}
                    MoveLabel={state.moveLabel['passwordLogin']}
                    inputStatus={state.inputStatus['passwordLogin']}     
                    inputWarning={state.inputWarning['passwordLogin']}               
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