import { useEffect, useState } from "react";
import api from "../../../../axiosConfig";
import HeaderPanelAdmin from "../../header/header";
import { Link } from "react-router-dom";

const MenuSessionPanelAdmin = () => {
    const [menus, setMenus] =  useState([]);
   
    const getMenuSessionRequest = async () => {
        try{
            await api.get('tables/session/sessionMenu/menu.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setMenus(data);
            })
        }
        catch(err){
            console.error('message: ', err);
        }
    }
    useEffect(() => {getMenuSessionRequest()}, [])


    const changeStatus = async (id) => {
        try {
            await api.get(`tables/session/papular/status.php/${id}/changeStatus`, {withCredentials: true}).then((res) => {
                res;
                getMenuSessionRequest();
            })
        }
        catch(err){
            console.error("message: ", err);
        }
    }

    const deleteItem = async (id) => {
        try {
            await api.delete(`tables/session/papular/delete.php/${id}/delete`).then((res) => {
                res.data;
                getMenuSessionRequest();
            })
        }  
        catch(err){
            console.error("message: ", err);
        }
    }

    return(
        <>
            <HeaderPanelAdmin id = {12} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
            <div className="flex flex-col items-center justify-around ">
                <Link to = "/panelAdmin/session/AddPopular">
                    <button className="mt-10 border-0 flex items-center justify-center text-green-500  text-lg hover:tracking-[.2rem] duration-200">create menu session</button>
                </Link>
                

                <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200"> menu session table</h1> 
            </div>
    
        <div className="w-[90%]  mx-auto flex flex-col">
            <table className="w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map((item, ind) => { 
                        return(
                            <tr key = {ind}>
                                <th>{ind + 1}</th>
                                <th>{item.title}</th>
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

                                    <Link to = {`/panelAdmin/session/EditPopular/${item.id}/edit`}>
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

export default MenuSessionPanelAdmin;