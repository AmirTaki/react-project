import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import {useNavigate } from "react-router-dom"
import HeaderPanelAdmin from "./header/header";
import api from "../../axiosConfig";
import CheckSession from "./checkSession";
import UsersPanelAdmin from "./users";

const PanelAdmin = () => {
    const [session, setSession] =  useState(false)
    const navigate = useNavigate();


    useEffect(() => {
        // getSections()
    }, [])

    const getSections = async () => {
        try {
            // await axios.get('http://localhost/project-react-Combination/back-end//functions//check_session.php',
            //     {withCredentials: true},
            // ).then((res)=> {
            //     setSession(res.data.loggedIn);
            //     if(!res.data.loggedIn){
            //         navigate('/validation');
            //     }
            // })
            
            await api.get('functions//check_session.php', 
                {withCredentials: true},
            ).then((res) => {
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
            <HeaderPanelAdmin id = {0}/>
        </div>
    )
}
export default PanelAdmin