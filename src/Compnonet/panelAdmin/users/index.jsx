import { useEffect, useState } from "react";
import HeaderPanelAdmin from "../header/header";
import axios from "axios";

const UsersPanelAdmin = () => {
    
   const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        try{
            axios.get('http://localhost/project-react-Combination/back-end/tables/users/userList.php').then((res) => {

            })
        }   
        catch(err){
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
                        <tr>
                            <th>1</th>
                            <th>amirtaki</th>
                            <th>amirtaki@gmail.com</th>
                            <th className="text-green-400">enable</th>

                            <th className="flex gap-5 justify-center items-center border-b-0 max-md:flex-col max-md:gap-2!">
                                <div className="text-rose-500 cursor-pointer duration-200 hover:text-red-700!">delete</div>
                                <div className="text-sky-500 cursor-pointer duration-200 hover:text-blue-700">edit</div>
                                <div className="text-yellow-500 cursor-pointer duration-200 hover:text-yellow-300">changeStatus</div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      
       </>
    )
}


export default UsersPanelAdmin;