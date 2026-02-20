import HeaderPanelAdmin from "../header/header";

const UsersPanelAdmin = () => {
    return(
       <>
        <HeaderPanelAdmin />
        <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
            <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200">users table</h1> 

            <div className="border-2 w-[90%] h-[500px] mx-auto flex flex-col">
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
                            <th>enable</th>

                            <th className="flex gap-3 justify-center items-center">
                                <div className="">delete</div>
                                <div className="">edit</div>
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