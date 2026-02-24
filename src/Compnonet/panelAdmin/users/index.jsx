import { useEffect, useState } from "react";
import HeaderPanelAdmin from "../header/header";
import api from "../../../axiosConfig";

const UsersPanelAdmin = () => {
    
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        try{
            await api.get('tables/users/userList.php').then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setUsers(data);
            })
        
        }   
        catch(err){
            setError(err)
            console.error('message: ', err );
        }
    }

    return(
       <>
        <HeaderPanelAdmin />
        <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
            <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200">users table</h1> 

            <div className="w-[90%]  mx-auto flex flex-col">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, ind) => { 
                            return(
                                <tr key = {ind}>
                                    <th>{user.id}</th>
                                    <th>{user.name}</th>
                                    <th>{user.email}</th>
                                    <th className="text-green-400">
                                        {user.status === 10 ? 'enable' : 'disable'}
                                    </th>

                                    <th className="flex justify-center items-center gap-7! max-md:flex-col max-md:gap-1!" >
                                        
                                        <div className="text-rose-500 cursor-pointer duration-200 hover:text-red-700! ">delete</div>
                                        <div className="text-sky-500 cursor-pointer duration-200 hover:text-blue-700 ">edit</div>
                                        <div 
                                            // onClick={() => {}}
                                            className="text-yellow-500 cursor-pointer duration-200 hover:text-yellow-300 "
                                        >
                                            change status
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


export default UsersPanelAdmin;