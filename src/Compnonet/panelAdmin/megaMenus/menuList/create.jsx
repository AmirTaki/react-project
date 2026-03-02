import HeaderPanelAdmin from "../../header/header";

const CreateMegaMenuList = () => {
    return (
        <div className="">
            <HeaderPanelAdmin  id = {3}/>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">ADD ITEM</h1>

                    <form>
                        {/* title */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="name" className="text-blue-500">title</label>
                            <input 
                                // value = {state.title}
                                type="text" id = "name" className="border-2 w-[300px] rounded-md h-10 p-2"
                                // onChange={(e) => {dispatch({type: 'title', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {/* {state.warning} */}
                            </span>
                        </div>

                        <hr className="my-8"/>
                        <div className="flex justify-center items-center">
                            <input 
                                // onClick={(event) => {saveTitle(event)}}
                                type="submit" value = "save" 
                                className="border-2 px-4 py-2 rounded-xl cursor-pointer hover:text-green-600 duration-300 hover:border-green-600" 
                            />
                        </div>

                    </form>
                </div>
        </div>
    )
}

export default CreateMegaMenuList;