import HeaderPanelAdmin from "../../header/header";

const EditMenuHeaders = () => {
    return(
        <div className="">
            <HeaderPanelAdmin />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                    <div className="flex justify-center items-center flex-col ">
                        <h1 className="my-4 text-4xl hover:tracking-[.3rem] duration-200 hover:text-sky-400">edit items</h1>
                    </div>
            </div>

        </div>
    )
}

export default EditMenuHeaders;