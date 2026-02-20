import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate =  useNavigate();

    useEffect(() => {
        logOut()
    }, [])

    const logOut = async () => {
        try{
            await axios.get('http://localhost/project-react-Combination/back-end/auth/logout.php',
                {withCredentials: true},
            ).then((res) => {
                res
                navigate('/');
            })
        }
        catch(err){
            navigate('/');
        }
    }

    return(
        <div className=""></div>
    )
}

export default Logout;