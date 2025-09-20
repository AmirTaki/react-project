import { useContext } from "react"
import { ValidationForm } from "./auth"
import InputComponent from "./inputComponent"
import CheckComponent from "./checkBoxComponent"
import ButtonComponent from "./buttonComponent"
import MessageTransfer from "./messageTransfer"


const Register = () => {
    const {state, dispatch, submitRegiser} =  useContext(ValidationForm)
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
                    onChange = {(e)=> {dispatch({type : 'inputValue', payload : {index : 2, value : e.target.value} })}}
                    onFocus={() => {dispatch({type : "moveLabel", payload : {index : 2, bool : true}})}}
                    onBlur={() => {dispatch({type : "moveLabel", payload : {index : 2, bool : false}})}}
                    type={'text'}
                    id = {"textRegister"}
                    MoveLabel={state.moveLabel[2]}
                    inputStatus={state.inputStatus[2]}     
                    inputWarning={state.inputWarning[2]}               
                />
                {/* email Registration */}
                <InputComponent 
                    icon = {"bi bi-envelope"} 
                    label = {'Email'}
                    onChange = {(e)=> {dispatch({type : 'inputValue', payload : {index : 3, value : e.target.value} })}}
                    onFocus={() => {dispatch({type : "moveLabel", payload : {index : 3, bool : true}})}}
                    onBlur={() => {dispatch({type : "moveLabel", payload : {index : 3, bool : false}})}}
                    type={'email'}
                    id = {"emailRegister"}
                    MoveLabel={state.moveLabel[3]}
                    inputStatus={state.inputStatus[3]}     
                    inputWarning={state.inputWarning[3]}              
                />
                {/*  password Registration */}
                <InputComponent 
                    icon = {"bi bi-lock"} 
                    label = {'Password'}
                    onChange = {(e)=> {dispatch({type : 'inputValue', payload : {index : 4, value : e.target.value} })}}
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
                    id = {"checkboxLogin"}
                    onChange = {(e) => {dispatch({type : "checkBox", payload : {number : 1 , flag : e.target.checked}})}} 
                    label  = {'Show Password'}
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
                {/* <div className="flex justify-center items-center mx-auto w-[80%] my-5">
                    <div className="flex justify-center! items-center! text-[14px]">
                        <p>Already have an account? 
                            <span
                                className="text-[16px] pl-1 cursor-pointer hover:underline duration-100 font-[600]!"
                                onClick={()=>{dispatch({type :"registerPage", payload : false})}}
                            >Login</span>
                        </p>
                    </div>
                </div> */}
            </form>
    
        </div>
    )
}

export default Register;