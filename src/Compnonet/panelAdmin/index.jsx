import axios from "axios"
import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"

const PanelAdmin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        getSections()
    }, [])

    const getSections = async () => {
        try {
            await axios.get('http://localhost/project-react-Combination/back-end//functions//check_session.php',
                {withCredentials: true},
            ).then((res)=> {
                if(!res.data.loggedIn){
                    navigate('/validation');
                }
            })
        }
        catch(err){
            navigate('/validation');
            console.error(err)
        }
    }

    return(
        
        <div className="">
            your wellcome to panel admin
        </div>
    )
}
export default PanelAdmin