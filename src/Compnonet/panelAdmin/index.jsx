import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const PanelAdmin = () => {
    const [session, setSesstion] =  useState(false)
    const navigate = useNavigate();


    useEffect(() =>  {
        try{
            axios.get("http://localhost/project-react-Combination/back-end//functions//check_session.php").then((res)=> {
                console.log(res.data)
                setSesstion(res.data)
                if(session === false){
                    navigate('/validation');
                }
            })
        }
        catch(err){
            if(err.message == "Request failed with status code 300"){
                setSesstion(false)
                
            }
            // console.error("warning",err.message)
        }

    }, [])

    return(
        
        <div className="">
            your wellcome to panel admin
        </div>
    )
}
export default PanelAdmin