import { useContext } from "react"
import { ValidationForm } from "./auth"
import InputComponent from "./inputComponent"
import CheckComponent from "./checkBoxComponent"
import ButtonComponent from "./buttonComponent"
import MessageTransfer from "./messageTransfer"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();

    const submitRegiser =  async (e) => {
        e.preventDefault();
      
        if(state.inputStatus[2]){
            if(state.inputStatus[3]){
                if(state.inputStatus[4]){
                    dispatch({ type : "Successful", payload : true })
              
                    await axios.post('http://localhost/project-react-Combination/back-end/auth/register.php', state.inputValue).then((response) => {
                        response;
                        // navigate('/');
                    })
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
       
        // state.inputStatus[2] ? (state.inputStatus[3]  ? (state.inputStatus[4] ? ( dispatch({ type : "Successful", payload : true })) 
        // : (dispatch({type : 'warning', payload : {index : 4, warning : "Password is requierd" }})))
        // : (dispatch({type : 'warning', payload : {index : 3, warning : "Email is requierd" }})) )
        // : (dispatch({type : 'warning', payload : {index : 2, warning : "Username is requierd" }}))
                
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
                    onChange = {(event)=> {dispatch({type : 'inputRegister', payload : event })}}
                    onFocus={() => {dispatch({type : "moveLabel", payload : {index : 4, bool : true}})}}
                    onBlur={() => {dispatch({type : "moveLabel", payload : {index : 4, bool : false}})}}
                    type={state.checkBox[1] ? "text" : "password"}
                    id = {"passwordRegister"}
                    MoveLabel={state.moveLabel[4]}
                    inputStatus={state.inputStatus[4]}     
                    inputWarning={state.inputWarning[4]}               
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
                    onClick={(e) => {submitRegiser(e)}}
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