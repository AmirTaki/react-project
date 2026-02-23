import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../axiosConfig"

const CheckSession = () => {

    const  navigate = useNavigate()
    useEffect(() => {
        getSections()
    }, [])

    const getSections = async () => {
        try {            
            await api.get('functions//check_session.php', 
                {withCredentials: true},
            ).then((res) => {
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
    return (
        <div className=""></div>
    )
}

export default CheckSession;