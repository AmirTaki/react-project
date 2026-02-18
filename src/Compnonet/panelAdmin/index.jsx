import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const PanelAdmin = () => {
    const [session, setSesstion] =  useState(false)
    const navigate = useNavigate();


axios.defaults.withCredentials = true;

// یا در زمان درخواست
axios.get('http://localhost/project/check_session.php', {
    withCredentials: true
})

    // useEffect(() =>  {
    //     try{
    //         axios.defaults.withCredentials = true;
    //         axios.get("http://localhost/project-react-Combination/back-end//functions//check_session.php").then((res)=> {
    //             withCredentials: true
    //             setSesstion(res.data)
                
    //             if(session === false){
    //                 navigate('/validation');
    //             }
    //         })
    //     }
    //     catch(err){
    //         setSesstion(false)
    //     }

    // }, [])

    return(
        
        <div className="">
            your wellcome to panel admin
        </div>
    )
}
export default PanelAdmin