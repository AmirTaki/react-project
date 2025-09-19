import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [page, setPage] =  useState(false)
    const [moveInput, setMoveInput] = useState(false)
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
                    onClick={() => {setPage((prev) => (prev = true))}}
                >
                    Login
                </div>
            </header>


            {/* section login */}
            <div className={`
                ${page ? "scale-100 duration-300" : "scale-0 duration-300"}
                relative w-[400px] h-[440px] bg-transparent border-2 border-[rgba(255,255,255,.5)]
                rounded-[20px]  backdrop-blur-[20px] shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center!
                justify-center! overflow-hidden 
                `}
            >
                <span
                    onClick={()=>{setPage((prev) => (prev = false))}}
                    className="absolute top-0 right-0 w-[45px] h-[45px] bg-[#162038] text-[2em] text-white  flex items-center
                    justify-center rounded-bl-[20px] cursor-pointer z-10" 
                > 
                   <i class="bi bi-x-lg"></i>
                </span>

                <div className=" w-[100%] h-[100%] absolute! top-12 ">
                    <h2 className="text-3xl text-[#162938] text-center">Login</h2>
                    <form action = "#">
                    
                        <div 
                         
                            className="bg-transparent flex flex-col items-center justify-center border-b-2! 
                               border-b-[#162938]! mx-auto w-[90%] my-10"
                        >
                            <div className="absolute right-6">
                                <span><i class="bi bi-envelope"></i></span>
                            </div>
                            <input
                                onChange={(e)=>setMoveInput(e.target.value.length > 0 ? true : false)}
                                onFocus={() => {setMoveInput(true)}}
                                onBlur={() => setMoveInput(false)}
                                type="email"  id  = 'email' 
                                className=" outline-0 border-0 text-[1.5em] text-[#162038] w-[100%] h-10 mb-1 "
                            />

                            <label 
                                htmlFor="email"
                                className={`${moveInput ? "top-10!" : "top-21!"} transition-all  duration-300 z-30 cursor-pointer absolute left-6  `}
                            >
                                Email
                            </label>                               
                        </div>
                    </form>
            
                </div>
{/* 
                <div className="w-[100%] p-[40px]  transform translate-x-0">
                    <h2 className="text-[2em] text-[#162938] text-center">Login</h2>
                    <form action="#">
                        <div className= "w-[100%] h-[50px] border-b!  border-b-[#162938]! mx-0 my-[30px] relative">
                            <span><i class="bi bi-envelope"></i></span>
                        </div>
                        <input 
                            className="w-[15] h-[10] bg-red-500 outline-0 border-0 text-[1em] text-[#162038] 
                                font-medium p-0 pr-[35px] pl-[5px] 
                            "
                            type="email" id = "email"  
                        />
                        <label 
                        className="absolute top-[50%] left-[5px] text-[1em] text-[#162038] 
                            transform -translate-y-1/2 font-medium pointer-events-none 
                        "
                        htmlFor="email">Email</label>
                    </form>
                </div> */}

            </div>
        </div>
    )
}

export default Register;