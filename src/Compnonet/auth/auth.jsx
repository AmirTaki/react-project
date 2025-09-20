
import imgBackGround from "../../assets/background.jpg"
import { useEffect, useReducer, useRef, useState } from "react";
import { reducer } from "./reducer";


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
                    <div className={`${state.registerPage ? "left-0! duration-500 scale-100! opacity-100!" : " opacity-0! scale-0! left-100! duration-500"}  w-[100%] h-[100%] absolute! top-12`}>
                        <h2 className="text-3xl text-[#162938] text-center">Registration</h2>
                        <form action = "#">
                            {/* answer Registration */}
                            <div className={ `${state.Successful ? "flex!" : "hidden!"} absolute text-green-600 bg-[#162038] px-3 py-2 text-center  -top-10 left-21`}>Registration was successful</div>

                            {/* username Registration */}
                            <div 
                            
                                className="bg-transparent flex flex-col items-center justify-center border-b-2! 
                                border-b-[#162938]! mx-auto w-[80%] mt-6 mb-10 relative"
                            >
                                <div className="absolute right-2">
                                    <span><i className="bi bi-person"></i></span>
                                </div>
                                <input
                                    onChange={(e)=> {dispatch({type : 'inputValue', payload : {index : 2, value : e.target.value} })}}
                                    onFocus={() => {dispatch({type : "moveLabel", payload : {index : 2, bool : true}})}}
                                    onBlur={() => {dispatch({type : "moveLabel", payload : {index : 2, bool : false}})}}
                                    type="text"  id  = 'textRegister' 
                                    className=" outline-0 border-0 text-[1.5em] text-[#162038] w-[100%] h-10 mb-1 bg-transparent! "
                                />

                                <label 
                                    htmlFor="textRegister"
                                    className={`${state.moveLabel[2] ? "-top-5!" : "top-2!"} transition-all  duration-300 z-30 cursor-pointer absolute left-1  `}
                                >
                                    Username
                                </label>      
                                {/* warning username */}
                                <span className={`${state.inputStatus[2] ? 'text-blue-500' : "text-red-500"} absolute right-0 -top-5`}>{ state.inputWarning[2]}</span>
                            </div>
                            {/* email Registration */}
                            <div 
                            
                                className="bg-transparent flex flex-col items-center justify-center border-b-2! 
                                border-b-[#162938]! mx-auto w-[80%] mt-6 mb-10 relative"
                            >
                                <div className="absolute right-2">
                                    <span><i className="bi bi-envelope"></i></span>
                                </div>
                                <input
                                    onChange={(e)=> {dispatch({type : 'inputValue', payload : {index : 3, value : e.target.value} })}}
                                    onFocus={() => {dispatch({type : "moveLabel", payload : {index : 3, bool : true}})}}
                                    onBlur={() => {dispatch({type : "moveLabel", payload : {index : 3, bool : false}})}}
                                    type="email"  id  = 'emailRegister' 
                                    className=" outline-0 border-0 text-[1.5em] text-[#162038] w-[100%] h-10 mb-1 "
                                />

                                <label 
                                    htmlFor="emailRegister"
                                    className={`${state.moveLabel[3] ? "-top-5!" : "top-2!"} transition-all  duration-300 z-30 cursor-pointer absolute left-1  `}
                                >
                                    Email
                                </label> 
                                {/* warning email */}
                                <span className={`${state.inputStatus[3] ? 'text-blue-500' : "text-red-500"} absolute right-0 -top-5`}>{ state.inputWarning[3]}</span>
                            </div>
                            {/*  password Registration */}
                            <div 
                            
                                className="bg-transparent flex flex-col items-center justify-center border-b-2! 
                                border-b-[#162938]! mx-auto w-[80%] mt-10 relative"
                            >
                                <div className="absolute right-2">
                                    <span><i className="bi bi-lock"></i></span>
                                </div>
                                <input
                                    onChange={(e)=> {dispatch({type : 'inputValue', payload : {index : 4, value : e.target.value} })}}
                                    onFocus={() => {dispatch({type : "moveLabel", payload : {index : 4, bool : true}})}}
                                    onBlur={() => {dispatch({type : "moveLabel", payload : {index : 4, bool : false}})}}
                                    type={`${state.checkBox[1] ? "text" : "password"}`}  id  = 'passwordRegister' 
                                    className=" outline-0 border-0 text-[1.5em] text-[#162038] w-[100%] h-10 mb-1 "
                                />

                                <label 
                                    htmlFor="passwordRegister"
                                    className={`${state.moveLabel[4] ? "-top-5!" : "top-2!"} transition-all  duration-300 z-30 cursor-pointer absolute left-1  `}
                                >
                                    Password
                                </label>     
                                {/* warning password */}
                                <span className={`${state.inputStatus[4] ? 'text-blue-500' : "text-red-500"} absolute right-0 -top-5`}>{ state.inputWarning[4] }</span>
                            
                            </div>
                            {/* checkbox Registration */}
                            <div 
                                className="flex flex-row  justify-between 
                                mx-auto w-[80%] my-3 relative p-1 "
                            >
                                <div className="flex gap-1  ">
                                    <input
                                        onChange={(e) => {dispatch({type : "checkBox", payload : {number : 1 , flag : e.target.checked}})}}
                                        type="checkbox"  id  = 'checkboxLogin' 
                                        className="accent-[#162938]  "
                                    />

                                    <label 
                                        htmlFor="checkboxLogin" className="text-[13px] font-thin! "
                                    >
                                        Show Password
                                    </label>     
                                </div>
                            </div>
                            {/* button register */}
                            <div className="flex justify-center items-center mx-auto w-[80%] ">
                                <input 
                                    onClick={(e) => {submitRegiser(e)}}
                                    type="submit" value = 'Register' className="border-0 outline-0 bg-[#162938] text-center h-12 w-[100%] rounded-lg
                                    text-white cursor-pointer" 
                                />
                            </div>
                            {/* move register to login */}
                            <div className="flex justify-center items-center mx-auto w-[80%] my-5">
                                <div className="flex justify-center! items-center! text-[14px]">
                                    <p>Already have an account? 
                                        <span
                                            className="text-[16px] pl-1 cursor-pointer hover:underline duration-100 font-[600]!"
                                            onClick={()=>{dispatch({type :"registerPage", payload : false})}}
                                        >Login</span>
                                    </p>
                                </div>
                            </div>
                        </form>
                
                    </div>
                    {/* login */}
                    <div className={`${state.registerPage ? " right-100!  duration-500! scale-0! opacity-0!" : " opacity-100! scale-100!  right-0! duration-500"}   w-[100%] h-[100%] absolute! top-12`}>
                        <h2 className="text-3xl text-[#162938] text-center">Login</h2>
                        <form action = "#">
                            {/* email login */}
                            <div 
                            
                                className="bg-transparent flex flex-col items-center justify-center border-b-2! 
                                border-b-[#162938]! mx-auto w-[80%] mt-6 mb-10 relative"
                            >
                                <div className="absolute right-2">
                                    <span><i className="bi bi-envelope"></i></span>
                                </div>
                                <input
                                    // onChange = {(e) => {dispatch({type : 'emailLogin', payload : e.target.value})}}
                                    onFocus={() => {dispatch({type : "moveLabel", payload : {index : 0, bool : true}})}}
                                    onBlur={() => {dispatch({type : "moveLabel", payload : {index : 0, bool : false}})}}
                                    type="email"  id  = 'email' 
                                    className=" outline-0 border-0 text-[1.5em] text-[#162038] w-[100%] h-10 mb-1 "
                                />

                                <label 
                                    htmlFor="email"
                                    className={`${state.moveLabel[0] ? "-top-5!" : "top-2!"} transition-all  duration-300 z-30 cursor-pointer absolute left-1  `}
                                >
                                    Email
                                </label>   
                                {/* warning email */}
                                {/* <span className="text-red-500 absolute right-0 -top-5">{state.warningEmail}</span> */}
                            </div>
                            {/*  password login */}
                            <div 
                            
                                className="bg-transparent flex flex-col items-center justify-center border-b-2! 
                                border-b-[#162938]! mx-auto w-[80%] mt-10 relative"
                            >
                                <div className="absolute right-2">
                                    <span><i className="bi bi-lock"></i></span>
                                </div>
                                <input
                                    // onChange={(e) => {dispatch({type : "passwordLogin", payload : e.target.value})}}                               
                                    onFocus={() => {dispatch({type : "moveLabel", payload : {index : 1, bool : true}})}}
                                    onBlur={() => {dispatch({type : "moveLabel", payload : {index : 1, bool : false}})}}
                                    type={`${state.checkBox[0] ? "text" : "password"}`}  id  = 'password' 
                                    className=" outline-0 border-0 text-[1.5em] text-[#162038] w-[100%] h-10 mb-1 "
                                />

                                <label 
                                    htmlFor="password"
                                    className={`${state.moveLabel[1] ? "-top-5!" : "top-2!"} transition-all  duration-300 z-30 cursor-pointer absolute left-1  `}
                                >
                                    Password
                                </label>       
                                {/* warning password */}
                                {/* <span className="text-red-500 absolute right-0 -top-5">{state.warningPassword}</span>                         */}
                            </div>
                            {/* checkbox login */}
                            <div 
                                className="flex flex-row  justify-between 
                                mx-auto w-[80%] my-3 relative p-1 "
                            >
                                <div className="flex gap-1  ">
                                    <input
                                        onChange={(e) => {dispatch({type : "checkBox", payload : {number : 0 , flag : e.target.checked}})}}
                                        type="checkbox"  id  = 'checkboxLogin' 
                                        className="accent-[#162938]  "
                                    />

                                    <label 
                                        htmlFor="checkboxLogin" className="text-[13px] font-thin! "
                                    >
                                        Show Password
                                    </label>     
                                </div>
                                <div className="text-sm cursor-pointer hover:underline">Forget Passwrod ?</div>                                                    
                            </div>
                            {/* button login */}
                            <div className="flex justify-center items-center mx-auto w-[80%] ">
                                <input
                                    // onClick={submitLogin} 
                                    type="submit" value = 'Login' className="border-0 outline-0 bg-[#162938] text-center h-12 w-[100%] rounded-lg
                                    text-white cursor-pointer" 
                                />
                            </div>
                            {/* move login to register */}
                            <div className="flex justify-center items-center mx-auto w-[80%] my-5">
                                <div className="flex justify-center! items-center! text-[14px]">
                                    <p>Don't have an account? 
                                        <span
                                            className="text-[16px] pl-1 cursor-pointer hover:underline duration-100 font-[600]!"
                                            onClick={()=>{dispatch({type :"registerPage", payload : true})}}
                                        >Register</span>
                                    </p>
                                </div>
                            </div>
                        </form>
                
                    </div>
                    {/* ----- */}
            
                </div>
            </div>
        </div>
    )
}

export default Validation