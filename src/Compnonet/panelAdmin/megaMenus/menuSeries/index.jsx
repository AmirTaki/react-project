import { useEffect, useState } from "react";
import HeaderPanelAdmin from "../../header/header";
import api from "../../../../axiosConfig";
import { Link } from "react-router-dom";

const MegaMenuSeriesPanelAdmin = () => {

    const [seriess, setSeriess] = useState([])

    const getSeriesMegaMenu = async () => {
        try{
            await api.get('tables/megaMenu/menuSeries/series.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setSeriess(data);
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    useEffect(() => {getSeriesMegaMenu()}, [])

    const changeStatus = async(id) => {
        try{
            await api.get(`tables/megaMenu/menuSeries/status.php/${id}/checkStatus`, {withCredentials: true}).then((res) => {
                res;
                getSeriesMegaMenu();
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    } 

    return(
        <div className="">
            <HeaderPanelAdmin id = {5} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col items-center justify-around ">
                  
                    <Link to = "/panelAdmin/megaMenu/AddCategory">
                        <button className="mt-10 border-0 flex items-center justify-center text-green-500  text-lg hover:tracking-[.2rem] duration-200">create category</button>
                    </Link>
                    

                    <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200">MegaMenu: Series table</h1> 
                </div>
              
                <div className="w-[90%]  mx-auto flex flex-col">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Series</th>
                                <th>List</th>
                                <th>Title</th>
                                <th>status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {seriess.map((ser, ind) => { 
                                return(
                                    <tr key = {ind}>
                                        <th >{ser.id}</th>
                                        <th>{ser.series}</th>
                                        <th>{ser.list}</th>
                                        <th>{ser.title}</th>
                                        <th className = {`${ser.status == 10 ? "text-green-400" : 'text-rose-400' }`}>
                                            {ser.status == 10 ? 'enable' : 'disable'}
                                        </th>

                                        <th className="flex justify-center items-center gap-7! max-md:flex-col max-md:gap-1!" >
                                            
                                            <div 
                                                onClick={() => {changeStatus(ser.id)}}
                                                className="text-yellow-500 cursor-pointer duration-200 hover:text-yellow-300 "
                                            >
                                                change status
                                            </div>

                                            <Link to = {`/panelAdmin/megaMenu/EditCategory/${ser.id}/edit`}>
                                                <div className="text-sky-500 cursor-pointer duration-200 hover:text-blue-700 ">edit</div>
                                            </Link>
                                            
                                            <div 
                                                // onClick={() => {deleteItem(ser.id)}}
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
        </div>
    )
}
export default MegaMenuSeriesPanelAdmin;