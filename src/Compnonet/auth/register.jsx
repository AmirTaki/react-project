import { Link } from "react-router-dom";
import Home from "../../Home";


const Register = () => {
    return (
        <>
        {/* after:content-['★'] after:text-red-500 after:absolute after:top-0 after:right-0 */}
            <header className="text-white flex flex-row justify-center items-center h-[50px] gap-10 bg-amber-700 ">
                <Link to = "/">
                    <div
                        className="after:content-[''] after:left-0 after:-bottom-6 after:absolute after:w-[100px] after:h-[3px] after:bg-white "
                    >Home</div>
                </Link>
                <div>About</div>
                <div>Services</div>
                <div>Contact</div>
            </header>
        </>
    )
}

export default Register;