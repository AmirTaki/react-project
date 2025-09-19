import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [page, setPage] =  useState(false)
    return (
        <>

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
                ">
                    Login
                </div>
            </header>


            {/* section login */}
            <div className="relative w-[400px] h-[440px] bg-transparent border-2 border-[rgba(255,255,255,.5)]
                rounded-[20px] 
            "></div>
        </>
    )
}

export default Register;