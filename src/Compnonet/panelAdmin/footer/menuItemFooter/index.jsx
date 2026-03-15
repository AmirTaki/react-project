import { Link } from "react-router-dom";
import HeaderPanelAdmin from "../../header/header";
import { useEffect, useState } from "react";
import api from "../../../../axiosConfig";

const MenuItemFooterPanelAdmin = () => {
    const [items, setItmes] = useState([]);
    const requestMenuItems = async () => {
        try{
            await api.get('tables/footer/menuItemFooter/item.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setItmes(data);
            })   
        }
        catch(err){
            console.error('message: ', err);
        }
    }

    useEffect(() =>  {requestMenuItems()}, [])


    const changeStatus = async (id) => {
        try{
            await api.get(`tables/footer/menuItemFooter/status.php/${id}/changeStatus`, {withCredentials: true}).then((res) => {
                res;
                requestMenuItems();
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }

    const deleteItem = async (id) => {
        try{
            await api.delete(`tables/footer/menuItemFooter/delete.php/${id}/delete`).then((res) => {
                res.data;
                requestMenuItems();
            })
        }
        catch(err){
            confirm.error('message: ', err);
        }
    }

    return(
        <>
            <HeaderPanelAdmin id = {20} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col items-center justify-around ">
                    <Link to = "/panelAdmin/footer/AddMenuItemiteBoard">
                        <button className="mt-10 border-0 flex items-center justify-center text-green-500  text-lg hover:tracking-[.2rem] duration-200">create items</button>
                    </Link>
                    

                    <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200">footer: list items table</h1> 
                </div>
              
                <div className="w-[90%]  mx-auto flex flex-col">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Title</th>
                                <th>status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, ind) => { 
                                return(
                                    <tr key = {ind}>
                                        <th>{ind + 1}</th>
                                        <th>{item.item}</th>
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

                                            <Link to = {`/${item.id}/edit`}>
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

export default MenuItemFooterPanelAdmin;