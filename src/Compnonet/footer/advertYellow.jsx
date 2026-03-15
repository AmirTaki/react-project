import { useEffect, useState } from "react";
import api from "../../axiosConfig";

const AdvertYellow = () => {
    const [advert, setAdvert] = useState([])
    const requestApiAdvert = async () => {
        try{
            await api.get('tables/footer/advertYelllow/reading.php').then((res) => {
                const data = Array.isArray(res.data) ? res.data : []
                setAdvert(data);
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    useEffect(() => {requestApiAdvert()}, [])
    return(
        <>
            <div className=" bg-[rgb(238,232,55)] h-[120px] w-[100%] flex justify-center items-center gap-7 relative
            max-lg:flex-col max-lg:h-[180px]">
                {advert.map((item) => {
                    return(
                        <>
                        <div key = {item.id} className="text-2xl font-bold">
                            <h2>{item.title}</h2>
                        </div>
                        <div className=" bg-black text-white w-100 h-16 flex items-center p-2 cursor-pointer group z-20!
                            hover:shadow-[10px_10px_1px_black]! duration-500
                            rounded ">
                            <div>{item.button}</div>
                            <div className=" transform pl-2  group-hover:translate-x-26!  duration-500!"><i className="group-hover:text-red-500 text-white duration-200 bi bi-caret-right-fill"></i></div>
                        </div>
                        </>
                    )
                })}
            </div>
            </>
        )
    }
    
export default AdvertYellow;