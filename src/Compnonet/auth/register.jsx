import { Link } from "react-router-dom";
import Home from "../../Home";


const Register = () => {
    return (
        <>
            <header className="text-white flex flex-row justify-center items-center h-[20px] bg-amber-700">
                <Link to = "/">
                    <div>Home</div>
                </Link>
                <div>About</div>
                <div>Services</div>
                <div>Contact</div>
            </header>
        </>
    )
}

export default Register;