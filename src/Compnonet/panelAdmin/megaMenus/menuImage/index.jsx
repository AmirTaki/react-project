import { Link } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header";
import api from "../../../../axiosConfig";
import { useEffect, useState } from "react";
import baseURL from "../../../../baseUrl";

const MegaMenuImagePanelAdmin = () => {

    const [imgMenu, setImgMenu] =  useState([])
    
    const getImageMegaMenu = async() => {
        try{
            await api.get('tables/megaMenu/menuImage/image.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data)?  res.data : [];
                setImgMenu(data);
            })
        }
        catch(err){
            console.error('message: ', err);
        }
    }
    useEffect(() => {getImageMegaMenu()}, [])


    const deleteItem = async (id) => {
        try {
            await api.delete(`tables/megaMenu/menuImage/delete.php/${id}/delete`).then((res) => {
                res.data;
                getImageMegaMenu();
            })
        }   
        catch(err){
            console.error('message: ', err)
        }
    }

    const changeStatus = async (id) => {
        try{
            await api.get(`tables/megaMenu/menuImage/status.php/${id}/checkStatus`, {withCredentials: true}).then((res) => {
                res;
                getImageMegaMenu();
            })
        }   
        catch(err){
            console.error('message', err)
        }
    }
    
    return(
        <div className="">
            <HeaderPanelAdmin id = {6} />
            
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col items-center justify-around ">
                  
                    <Link to = "/panelAdmin/megaMenu/AddImage">
                        <button className="mt-10 border-0 flex items-center justify-center text-green-500  text-lg hover:tracking-[.2rem] duration-200">create Image</button>
                    </Link>
                    

                    <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200">MegaMenu: Image table</h1> 
                </div>
              
                <div className="w-[90%]  mx-auto flex flex-col">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>List</th>
                                <th>Title</th>
                                <th>Caption</th>
                                <th>status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {imgMenu.map((i, ind) => { 
                                return(
                                    <tr key = {ind} className=" ">
                                        <th >{i.id}</th>
                                        <th className=" flex justify-center ">
                                            <img src = {baseURL +  i.image} className="w-[100px] max-md:h-[100px]"/>
                                        </th>
                                        <th>{i.list}</th>
                                        <th>{i.title}</th>
                                        <th>{i.body}</th>
                                        <th className = {`${i.status == 10 ? "text-green-400" : 'text-rose-400' }`}>
                                            {i.status == 10 ? 'enable' : 'disable'}
                                        </th>

                                        <th className="gap-7! max-md:flex-col! max-md:gap-1! h-full" >
                                            
                                            <div 
                                                onClick={() => {changeStatus(i.id)}}
                                                className="text-yellow-500 cursor-pointer duration-200 hover:text-yellow-300 "
                                            >
                                                change status
                                            </div>

                                            <Link to = {`/panelAdmin/megaMenu/EditCategory/${i.id}/edit`}>
                                                <div className="text-sky-500 cursor-pointer duration-200 hover:text-blue-700 ">edit</div>
                                            </Link>
                                            
                                            <div 
                                                onClick={() => {deleteItem(i.id)}}
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

export default MegaMenuImagePanelAdmin;