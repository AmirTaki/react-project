import { useEffect, useState } from "react";
import api from "../../axiosConfig";

const AdvertBoard = () => {
    const [Adverts, setAdverts] = useState([])
    const requstApi = async () => {
        try{
            await api.get('tables/session/advertBoard/reading.php').then((res) => {
                const data = Array.isArray(res.data) ? res.data : []
                setAdverts(data)
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    useEffect(() => {requstApi()}, [])
    return(
        <>
            <div className="bg-black w-[100%]  text-gray-300/100 flex flex-col p-10 gap-15 ">
                {Adverts.map((item) => (
                    <>
                        <div  key = {item.id} className=" text-3xl text-center w-[90%] mx-auto">
                            <h1 className="">{item.title}</h1>
                        </div>

                        <div className=" w-[80%] mx-auto">
                            <p>{item.body}</p>
                        </div>
                        <div className=" w-[80%] mx-auto">
                            <p>{item.description}</p>
                        </div>
                        <div className="w-10 mx-auto">
                            <p><i class="bi bi-brilliance"></i></p>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default AdvertBoard;