import { useContext } from "react"
import { ValidationForm } from "./auth"
import InputComponent from "./inputComponent"
import CheckComponent from "./checkBoxComponent"
import ButtonComponent from "./buttonComponent"
import MessageTransfer from "./messageTransfer"
import axios from "axios"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const error = queryParams.get("error");

    

   
    // const submitRegiser =  async (event) => {
    //     event.preventDefault();
      
    //     if(state.inputStatus['username']){
    //         if(state.inputStatus['email']){
    //             if(state.inputStatus['password']){
    //                 dispatch({ type : "Successful", payload : true })
              
    //                 await axios.post('http://localhost/project-react-Combination/back-end/auth/register.php', state.inputRegister).then((response) => {
    //                     response;
    //                     // navigate('/');
    //                 })
    //             }
    //             else {
    //                 dispatch({type : 'warning', payload : { nameForm: 'password', message : "Password is requierd" }})
    //             }
    //         }
    //         else {
    //             dispatch({type : 'warning', payload : {nameForm : 'email', message : "Email is requierd" }})
    //         }
    //     }
    //     else {
    //         dispatch({type : 'warning', payload : {nameForm : 'username', message : "Username is requierd" }})
    //     }                
    // }

    
    const submitRegiser =  async (event) => {
        event.preventDefault();
        try{
            await axios.post('http://localhost/project-react-Combination/back-end/auth/register.php', state.inputRegister).then((response) => {
                response;
                // navigate('/');
            })
        }
        catch(error){
            console.log(error.message);
            if(error.message == "Request failed with status code 422"){
                dispatch({type : 'warning', payload : { nameForm: 'password', message : "Password is requierd" }})
                dispatch({type : 'warning', payload : {nameForm : 'email', message : "Email is requierd" }})
                dispatch({type : 'warning', payload : {nameForm : 'username', message : "Username is requierd" }})
            }
            
            console.error("خطا در شبکه یا CORS:", error.message);
        }
   


    }



    const {state, dispatch} =  useContext(ValidationForm)
    return(
        <div className={`${state.registerPage ? "left-0! duration-500 scale-100! opacity-100!" : " opacity-0! scale-0! left-100! duration-500"}  w-[100%] h-[100%] absolute! top-12`}>
            <h2 className="text-3xl text-[#162938] text-center">Registration</h2>
            <form action = "#">
                {/* answer Registration */}
                <div className={ `${state.Successful ? "flex!" : "hidden!"} absolute text-green-600 bg-[#162038] px-3 py-2 text-center  -top-10 left-21`}>Registration was successful</div>
                
                {/* username Registration */}
                <InputComponent 
                    icon = {"bi bi-person"} 
                    label = {'Username'}
    
                    onChange = {(event)=> {
                        dispatch({type : 'inputRegister', payload: event });
                        dispatch({type: 'usernameCheck', payload: event})
                    }}
                    onFocus={() => {dispatch({type : "focus", payload : {name: 'username'}})}} 
    
                    onBlur={() => {dispatch({type : "blur", payload : {name: 'username'}})}}
    
                    type={'text'}
                    id = {"textRegister"}
                    name = {'username'}
                    MoveLabel={state.moveLabel['username']}
                    inputStatus={state.inputStatus['username']}     
                    inputWarning={state.inputWarning['username']}               
                />
                {/* email Registration */}
                <InputComponent 
                    icon = {"bi bi-envelope"} 
                    label = {'Email'}
                    name = {"email"}
                    
                    onChange = {(event)=> {
                        dispatch({type : 'inputRegister', payload: event });
                        dispatch({type: 'emailCheck', payload: event})
                    }}
                    onFocus={() => {dispatch({type : "focus", payload : {name: 'email'}})}} 
    
                    onBlur={() => {dispatch({type : "blur", payload : {name: 'email'}})}}
                   
                    type={'email'}
                    id = {"emailRegister"}
                    MoveLabel={state.moveLabel['email']}
                    inputStatus={state.inputStatus['email']}     
                    inputWarning={state.inputWarning['email']}              
                />
                {/*  password Registration */}
                <InputComponent 
                    icon = {"bi bi-lock"} 
                    label = {'Password'}
                    name = {'password'}
                    
                    onChange = {(event)=> {
                        dispatch({type : 'inputRegister', payload: event });
                        dispatch({type: 'passwordCheck', payload: event})
                    }}
                    onFocus={() => {dispatch({type : "focus", payload : {name: 'password'}})}} 
    
                    onBlur={() => {dispatch({type : "blur", payload : {name: 'password'}})}}
                   
                    type={state.checkBox[1] ? "text" : "password"}
                    id = {"passwordRegister"}
                    MoveLabel={state.moveLabel['password']}
                    inputStatus={state.inputStatus['password']}     
                    inputWarning={state.inputWarning['password']}               
                />
                {/* checkbox Registration */}

                <CheckComponent 
                    id = {"checkboxRegister"}
                    onChange = {(e) => {dispatch({type : "checkBox", payload : {number : 1 , flag : e.target.checked}})}} 
                    label  = {'Show Password'}
                    forgetPassword = {false}
                />
                {/* button register */}
                <ButtonComponent 
                    // onClick={(event) => {dispatch({type: 'submitRegister', payload: event})}}
                    onClick={(event) => {submitRegiser(event)}}
                    value = {'Register'}
                />
                {/* move register to login */}
                <MessageTransfer 
                    message={'Already have an account? '}
                    onClick={()=>{dispatch({type :"registerPage", payload : false})}}
                    page = {'Login'}
                />
            </form>
    
        </div>
    )
}

export default Register;