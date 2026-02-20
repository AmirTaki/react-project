import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import HeaderPanelAdmin from "./header/header";


const PanelAdmin = () => {
    const navigate = useNavigate();
    const [session, setSession] =  useState(false)

    useEffect(() => {
        getSections()
    }, [])

    const getSections = async () => {
        try {
            await axios.get('http://localhost/project-react-Combination/back-end//functions//check_session.php',
                {withCredentials: true},
            ).then((res)=> {
                setSession(res.data.loggedIn);
                if(!res.data.loggedIn){
                    navigate('/validation');
                }
            })
        }
        catch(err){
            setSession(false);
            navigate('/validation');
            console.error(err)
        }
    }

    return(
        
        <div className="bg-[#252525]! min-h-screen ">
            {/* header */}
            <HeaderPanelAdmin />
            
        </div>
    )
}
export default PanelAdmin