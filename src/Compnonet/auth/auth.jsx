import Register from "./register"
import imgBackGround from "../../assets/background.jpg"

const Validation = () => {
    return (
     
        <div style={{backgroundImage: `url("${imgBackGround}")`, height : '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            Validation
            <Register />
            
        </div>
    )
}

export default Validation