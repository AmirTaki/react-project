import { useEffect, useState } from "react";
import api from "../../../../axiosConfig";
import HeaderPanelAdmin from "../../header/header";

const MenuHeaderPanelAdmin = () => {
    const [menus, setMenus] =  useState([]);
    const getMenus = async () => {
        try{
            await api.get('tables/megaMenu/menus/menu.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setMenus(data);
            })
        }
        catch(err){
            console.error('message: ', err);
        }
    }
    useEffect(() => {getMenus()}, [])
    return(
        <>
            <HeaderPanelAdmin />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                MenuHeaderPanelAdmin
            </div>
        </>

    )
}

export default MenuHeaderPanelAdmin;