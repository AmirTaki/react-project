import { useReducer, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [moveInput, setMoveInput] = useState(false)

    const reducer = (state, action) => {
        switch (action.type){
            case  'pageLogin': 
                return {...state, page : action.payload}
            case "moveLabel" : 
                const {index} =  action.payload
                const {bool}  = action.payload
                return{...state,
                    moveLabel : {
                        [index] : bool
                    }
                }
        }
    } 
    const [state, dispatch] = useReducer(reducer, {
        page : false,
        moveLabel : {},
    })
    return (
        <div className=" flex justify-center items-center flex-col gap-30 ">
            <header className="text-white flex flex-row justify-center items-center h-[80px] gap-10  ">
                <Link to = "/">
                    <div
                        className="relative after:content-[''] after:left-0 after:-bottom-[6px] after:absolute after:w-[100%] after:h-[3px] after:bg-white 
                            after:origin-right!  after:rounded-4xl after:transition-transform duration-500 after:scale-0 after:duration-500! hover:after:duration-500! hover:after:origin-left! hover:after:scale-100
                        "
                    >Home</div>
                </Link>
                <div
                    className="relative after:content-[''] after:left-0 after:-bottom-[6px] after:absolute after:w-[100%] after:h-[3px] after:bg-white 
                        after:origin-right!  after:rounded-4xl after:transition-transform duration-500 after:scale-0 after:duration-500! hover:after:duration-500! hover:after:origin-left! hover:after:scale-100
                        "
                >About</div>
                <div
                    className="relative after:content-[''] after:left-0 after:-bottom-[6px] after:absolute after:w-[100%] after:h-[3px] after:bg-white 
                        after:origin-right!  after:rounded-4xl after:transition-transform duration-500 after:scale-0 after:duration-500! hover:after:duration-500! hover:after:origin-left! hover:after:scale-100
                        "
                >Services</div>
                <div
                    className="relative after:content-[''] after:left-0 after:-bottom-[6px] after:absolute after:w-[100%] after:h-[3px] after:bg-white 
                        after:origin-right!  after:rounded-4xl after:transition-transform duration-500 after:scale-0 after:duration-500! hover:after:duration-500! hover:after:origin-left! hover:after:scale-100
                        "
                >Contact</div>


                <div className="border-2 border-white px-8 py-3 text-xl
                    hover:text-black duration-500 cursor-pointer hover:bg-white 
                "
                      onClick={()=>{dispatch({type: "pageLogin" , payload : true})}}
                >
                    Login
                </div>
            </header>


            {/* section login */}
            <div className={`
                ${state.page ? "scale-100 duration-300" : "scale-0 duration-300"}
                relative w-[400px] h-[440px] bg-transparent border-2 border-[rgba(255,255,255,.5)]
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

                <div className=" w-[100%] h-[100%] absolute! top-12 bg-red-400">
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
                                onChange={(e)=>{dispatch({type : "moveLabel", payload : {index : 0, bool : e.target.value.length > 0 ? true : false }})}}
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
                                onChange={(e)=>{dispatch({type : "moveLabel", payload : {index : 1, bool : e.target.value.length > 0 ? true : false }})}}
                                onFocus={() => {dispatch({type : "moveLabel", payload : {index : 1, bool : true}})}}
                                onBlur={() => {dispatch({type : "moveLabel", payload : {index : 1, bool : false}})}}
                                type="password"  id  = 'password' 
                                className=" outline-0 border-0 text-[1.5em] text-[#162038] w-[100%] h-10 mb-1 "
                            />

                            <label 
                                htmlFor="password"
                                className={`${state.moveLabel[1] ? "-top-5!" : "top-2!"} transition-all  duration-300 z-30 cursor-pointer absolute left-1  `}
                            >
                                Password
                            </label>                               
                        </div>
                        {/* checkbox login */}
                        <div 
                            className="flex flex-row  justify-between 
                             mx-auto w-[80%] my-3 relative p-1 "
                        >
                            <div className="flex gap-1  ">
                                <input
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
                            <input type="submig" value = 'Login' className="border-0 outline-0 bg-[#162938] text-center h-12 w-[100%] rounded-lg
                            text-white cursor-pointer" />
                        </div>
                        {/* move login to register */}
                        <div className="flex justify-center items-center mx-auto w-[80%] my-5">
                            <div className="flex justify-center! items-center! text-sm">
                                <p>Don't have an account? <span
                                    className="text-lg pl-1 cursor-pointer hover:underline duration-100"
                                >Register</span></p>
                            </div>
                        </div>
                    </form>
            
                </div>
            </div>
        </div>
    )
}

export default Register;