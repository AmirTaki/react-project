import { useReducer } from "react";
import HeaderPanelAdmin from "../header/header";

const CreateUsers = () => {
    const reducer = (state, action ) => {
        switch(action.type){
            case "":
                return {...state}

            default: 
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, {})

    return(
        <div className="">
            <HeaderPanelAdmin />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">ADD USER</h1>
                    <form>
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="name" className="text-blue-500">name</label>
                            <input type="text" id = "name" className="border-2 w-[300px] rounded-md h-10 p-2"></input>
                        </div>
                        <div className="text-gray-500 py-5">message:</div>

                        <hr className="my-8"/>
                        <div className="flex gap-5 items-center justify-center ">
                            <label htmlFor="email" className="text-yellow-500">email</label>
                            <input type="email" className="border-2 w-[300px] rounded-md h-10 p-2"></input>
                        </div>
                        <div className="text-gray-500 py-5">message:</div>
                
                        <hr className="my-8"/>
                        <div className="flex gap-5 items-center justify-center ">
                            <label htmlFor="email" className="text-red-500">password</label>
                            <input type="password" className="border-2 w-[300px] rounded-md h-10 p-2"></input>
                        </div>
                        <div className="flex gap-2 items-center justify-left  pt-8">
                            <label htmlFor = "showpass">show password</label>
                            <input id = "showpass" type="checkbox"/>
                        </div>

                        <div className="text-gray-500 py-5">message:</div>
                
                    </form>
                
                </div>
            </div>
        </div>
    )
}

export default CreateUsers;