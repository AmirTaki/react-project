import HeaderPanelAdmin from "../../header/header"

const CreateMenuHeaders = () => {
    return(
        <div className="">
            <HeaderPanelAdmin />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    ADD ITEM 
                </div>
            </div>
        </div>
    )
}

export default CreateMenuHeaders