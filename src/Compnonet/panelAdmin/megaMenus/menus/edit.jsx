import HeaderPanelAdmin from "../../header/header";

const EditMenuHeaders = () => {
    return(
        <div className="">
            <HeaderPanelAdmin />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex justify-center items-center flex-col ">
                    <h1 className="my-4 text-4xl hover:tracking-[.3rem] duration-200 hover:text-sky-400">edit items</h1>
                
                    <form>
                        {/* title edit */}
                        <div className="flex gap-5 items-center justify-center mt-8">
                            <label htmlFor="name" className="text-blue-500">title</label>
                            <input 
                                type="text" id = "name" className="border-2 w-[300px] rounded-md h-10 p-2"
                                // value={state.username}
                                // onChange={(e) => {dispatch({type: 'username', payload: e.target.value})}}

                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {/* {state.usernameWarning} */}
                            </span>
                        </div>

                        <hr className="my-8"/>

                        <div className="flex justify-center items-center">
                            <input 
                                // onClick={(event) => {editAccount(event)}}
                                type="submit"
                                value = "update" 
                                className="border-2 px-4 py-2 rounded-xl cursor-pointer hover:text-green-600 duration-300 hover:border-green-600" 
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditMenuHeaders;