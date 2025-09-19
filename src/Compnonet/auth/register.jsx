import { Link } from "react-router-dom";
import Home from "../../Home";


const Register = () => {
    return (
        <>

            <header className="text-white flex flex-row justify-center items-center h-[50px] gap-10  ">
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
            </header>
        </>
    )
}

export default Register;