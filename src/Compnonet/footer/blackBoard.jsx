import { useEffect, useState } from "react";
import api from "../../axiosConfig";

const BlackBoard = () => {
    const [board, setBoard] = useState([])
    const RequstApi = async () => {
        try{
            await api.get(`tables/footer/boardBlack/reading.php`).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setBoard(data)
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    useEffect(() => {RequstApi()}, [])
    return (
        <>
            <div className="md:hidden! w-[100%] h-[330px] bg-black  overflow-hidden">
                <div className="  text-white w-full grid grid-cols-2  grid-rows-6 py-6 gap-5 place-items-center  ">
                    {board.map((item) => {
                        return(
                            <>
                            <div key = {item.id} className="hover:text-gray-400 cursor-pointer duration-300">{item.title}</div>
                            
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default BlackBoard;