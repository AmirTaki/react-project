import Register from "./register";
import Login from "./login";
import { useContext } from "react"
import { ValidationForm } from "./auth"

const SectionValidation = () => {
      const {state, dispatch} =  useContext(ValidationForm)
    return (<>
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
            <Register />
            {/* login */}
            <Login />

        </div>
    </>)
}

export default SectionValidation;