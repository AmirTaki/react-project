import { useEffect, useState } from "react";
import HeaderPanelAdmin from "../header/header";
import api from "../../../axiosConfig";
import { Link } from "react-router-dom";

const UsersPanelAdmin = () => {
    
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        getUsers();
    }, [])

    // readTable 
    const getUsers = async () => {
        try{
            await api.get('tables/users/userList.php',{withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setUsers(data);
            })
        
        }   
        catch(err){
            setError(err)
            console.error('message: ', err );
        }
    }

    // status
    const chageStatus = async (user) => {
        try{
            await api.get(`tables/users/status.php/${user.id}/changeStatus`,{withCredentials: true}).then((res) => {
                res.data;
                getUsers();
            })
        }
        catch(err){
            console.error('message: ', err );
        }
    }

    // delete 
    const deleteUser = (user) => {
        try{
            api.delete(`tables/users/delete.php/${user.id}/delete`).then((res) => {
                res.data;
                getUsers();
            })
        }
        catch(err){
            console.error('message: ', err );
        }
    }


    return(
       <>
        <HeaderPanelAdmin id = {1}/>

        <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
            <div className="flex flex-col items-center justify-around ">
                <Link to = "/PanelAdmin/createuser">
                    <button className="mt-10 border-0 flex items-center justify-center text-green-500  text-lg hover:tracking-[.2rem] duration-200">create user</button>
                </Link>
               

                <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200">users table</h1> 
            </div>
        
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
                                    <th className = {`${user.status == 10 ? "text-green-400" : 'text-rose-400' }`}>
                                        {user.status == 10 ? 'enable' : 'disable'}
                                    </th>

                                    <th className="flex justify-center items-center gap-7! max-md:flex-col max-md:gap-1!" >
                                        
                                        <div 
                                            onClick={() => {chageStatus(user)}}
                                            className="text-yellow-500 cursor-pointer duration-200 hover:text-yellow-300 "
                                        >
                                            change status
                                        </div>

                                        <Link to = {`/PanelAdmin/users/editUser/${user.id}/edit`}>
                                            <div className="text-sky-500 cursor-pointer duration-200 hover:text-blue-700 ">edit</div>
                                        </Link>
                                       
                                        <div 
                                            onClick={() => {deleteUser(user)}}
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


export default UsersPanelAdmin;