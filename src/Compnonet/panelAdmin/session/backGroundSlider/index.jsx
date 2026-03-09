import { Link } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header"
import { useEffect, useState } from "react";
import api from "../../../../axiosConfig";
import baseURL from "../../../../baseUrl";

const BackGroundSliderPanelAdmin = () => {
    const [backGroundSlider, setBackGroundSlider] =  useState([])

    const GetBackGroundSlider = async () => {
        try{
            await api.get('tables/session/backGroundSlider/slider.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data)?  res.data : [];
                setBackGroundSlider(data);
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    useEffect(() => {GetBackGroundSlider()}, [])

    const changeStatus = async (id) => {
        try{
            await api.get(`tables/session/backGroundSlider/status.php/${id}/changeStatus`, {withCredentials: true}).then((res) => {
                res;
                GetBackGroundSlider();
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }

    const deleteItem = async (id) => {
        try{
            await api.delete(`tables/session/backGroundSlider/delete.php/${id}/delete`).then((res) => {
                res.data;
                GetBackGroundSlider();
            })
        }
        catch(err){
            console.error('message: ', err);
        }
    }

    return(
        <div>
            <HeaderPanelAdmin id = {7} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col items-center justify-around ">
                    <Link to = "/panelAdmin/session/AddBackGroundSlider">
                        <button className="mt-10 border-0 flex items-center justify-center text-green-500  text-lg hover:tracking-[.2rem] duration-200">create Image</button>
                    </Link>
                    
                    <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200">session: background slider table</h1> 
                </div>
                <div className="w-[90%]  mx-auto flex flex-col">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>                         
                                <th>status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {backGroundSlider.map((img, ind) => { 
                                return(
                                    <tr key = {ind} className=" ">
                                        <th >{img.id}</th>
                                        <th className=" flex justify-center ">
                                            <img src = {baseURL +  img.image} className="w-[100px] max-md:h-[100px]"/>
                                        </th>
                                        <th>{img.title}</th>
                                        <th className = {`${img.status == 10 ? "text-green-400" : 'text-rose-400' }`}>
                                            {img.status == 10 ? 'enable' : 'disable'}
                                        </th>

                                        <th className="gap-7! max-md:flex-col! max-md:gap-1! h-full" >
                                            
                                            <div 
                                                onClick={() => {changeStatus(img.id)}}
                                                className="text-yellow-500 cursor-pointer duration-200 hover:text-yellow-300 "
                                            >
                                                change status
                                            </div>

                                            <Link to = {`/panelAdmin/megaMenu/EditImage/${img.id}/edit`}>
                                                <div className="text-sky-500 cursor-pointer duration-200 hover:text-blue-700 ">edit</div>
                                            </Link>
                                            
                                            <div 
                                                onClick={() => {deleteItem(img.id)}}
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

export default BackGroundSliderPanelAdmin;