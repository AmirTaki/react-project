import { useContext } from "react"
import { ValidationForm } from "./auth"


const Register = () => {
    const {state, dispatch, submitRegiser} =  useContext(ValidationForm)
    return(
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
    )
}

export default Register;