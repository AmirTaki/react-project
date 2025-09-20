import Register from "./register"
import imgBackGround from "../../assets/background.jpg"
import Test from "./test"

const Validation = () => {
    return (
     
        <div style={{backgroundImage: `url("${imgBackGround}")`, height : '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <Register />
            {/* <Test></Test> */}
        </div>
    )
}

export default Validation