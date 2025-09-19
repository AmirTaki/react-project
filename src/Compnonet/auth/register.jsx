import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [page, setPage] =  useState(false)
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
                rounded-[20px]  backdrop-blur-[20px] shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center overflow-hidden 
                   
                `}
            >
                <span
                    onClick={()=>{setPage((prev) => (prev = false))}}
                    className="absolute top-0 right-0 w-[45px] h-[45px] bg-[#162038] text-[2em] text-white  flex items-center
                    justify-center rounded-bl-[20px] cursor-pointer z-10"
                > 
                   <i class="bi bi-x-lg"></i>
                </span>

                <div className="w-[100%] p-[40px]  transform translate-x-0">
                    <h2 className="text-[2em] text-[#162938] text-center">Login</h2>
                    <form action="#">
                        <div className= "w-[100%] h-[50px] border-b!  border-b-[#162938]! mx-0 my-[30px] relative">
                            <span><i class="bi bi-envelope"></i></span>
                        </div>
                        <input type="email" id = "email"  />
                        <label htmlFor="email">Email</label>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register;