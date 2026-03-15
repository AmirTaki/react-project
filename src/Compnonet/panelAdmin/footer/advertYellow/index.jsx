import { Link } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header";
import { useEffect, useState } from "react";
import api from "../../../../axiosConfig";

const AdvertYellowPanelAdmin = () => {
    const [adverts, setAdverts] = useState([])
    const requstAdvertsApi = async () => {
        try{
            await api.get('tables/footer/advertYelllow/advert.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setAdverts(data)
            })
        }
        catch(err){
            console.error('message: ',err)
        }
    }
    useEffect(() => {requstAdvertsApi()}, [])
    
    const changeStatus = async (id) => {
        try{
            await api.get(`tables/footer/advertYelllow/status.php/${id}/changeStatus`, {withCredentials: true}).then((res) => {
                res;
                requstAdvertsApi();
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }

    const deleteItem = async (id) => {
        try{
            await api.delete(`/${id}/delete`).then((res) => {
                res;
                requstAdvertsApi()
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    return(
        <>
            <HeaderPanelAdmin  id = {17}/>
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col items-center justify-around ">
                    <Link to = "">
                        <button className="mt-10 border-0 flex items-center justify-center text-green-500  text-lg hover:tracking-[.2rem] duration-200">create advert</button>
                    </Link>
                    <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200"> advert yellow table</h1> 
                </div>

                <div className="w-[90%]  mx-auto flex flex-col">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Button</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adverts.map((item, ind) => { 
                                return(
                                    <tr key = {ind}>
                                        <th>{ind + 1}</th>
                                        <th>{item.title}</th>
                                        <th>{item.button}</th>
                                        <th className = {`${item.status == 10 ? "text-green-400" : 'text-rose-400' }`}>
                                            {item.status == 10 ? 'enable' : 'disable'}
                                        </th>

                                        <th className="flex justify-center items-center gap-7! max-md:flex-col max-md:gap-1!" >
                                            
                                            <div 
                                                onClick={() => {changeStatus(item.id)}}
                                                className="text-yellow-500 cursor-pointer duration-200 hover:text-yellow-300 "
                                            >
                                                change status
                                            </div>

                                            <Link to = {``}>
                                                <div className="text-sky-500 cursor-pointer duration-200 hover:text-blue-700 ">edit</div>
                                            </Link>
                                            
                                            <div 
                                                onClick={() => {deleteItem(item.id)}}
                                                className="text-rose-500 cursor-pointer duration-200 hover:text-red-700!"
                                            >
                                                delete
                                            </div>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdvertYellowPanelAdmin;