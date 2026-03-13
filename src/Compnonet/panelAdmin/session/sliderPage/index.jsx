import { Link } from "react-router-dom"
import HeaderPanelAdmin from "../../header/header"
import { useEffect, useState } from "react"
import api from "../../../../axiosConfig"
import baseURL from "../../../../baseUrl"

const SliderPagePaneAdmin = () => {
    const [sliderPages, setSliderPages] = useState([])
    const getSliderPage = async () => {
        try{
            await api.get('tables/session/sliderPage/slider.php', {withCredentials: true}).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                setSliderPages(data)
            })
        }   
        catch(err){
            console.error('message: ', err)
        }
    }

    useEffect(() => {getSliderPage()}, [])


    const changeStatus = async(id) => {
        try{
            await api.get(`tables/session/sliderPage/status.php/${id}/changeStatus`, {withCredentials: true}).then((res) => {
                res;
                getSliderPage();
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }

    const deleteItem = async (id) => {
        try{
            await api.delete(`tables/session/sliderPage/delete.php/${id}/delete`).then((res) => {
                res.data;
                getSliderPage()
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    return (
        <div className="">
            <HeaderPanelAdmin id = {10} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col items-center justify-around ">
                    <Link to = "/panelAdmin/session/AddBoxSliderPage">
                        <button className="mt-10 border-0 flex items-center justify-center text-green-500  text-lg hover:tracking-[.2rem] duration-200">create box slider page</button>
                    </Link>
                    
                    <h1 className="text-center my-5 text-3xl hover:tracking-[.3rem] duration-200">session: slider page table</h1> 
                </div>

                <div className="w-[90%]  mx-auto flex flex-col mt-2">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Caption</th>                         
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sliderPages.map((item, ind) => { 
                                return(
                                    <tr key = {ind} className=" ">
                                        <th >{ind + 1}</th>
                                        <th className=" flex justify-center items-center ">
                                            <img src = {baseURL +  item.image} className="w-[140px] "/>
                                        </th>
                                        <th>{item.body}</th>
                                        <th className = {`${item.status == 10 ? "text-green-400" : 'text-rose-400' }`}>
                                            {item.status == 10 ? 'enable' : 'disable'}
                                        </th>

                                        <th className="gap-7! max-md:flex-col! max-md:gap-1! h-full" >
                                            
                                            <div 
                                                onClick={() => {changeStatus(item.id)}}
                                                className="text-yellow-500 cursor-pointer duration-200 hover:text-yellow-300 "
                                            >
                                                change status
                                            </div>

                                            <Link to = {`/panelAdmin/session/EditBoxSliderPage/${item.id}/edit`}>
                                                <div className="text-sky-500 cursor-pointer duration-200 hover:text-blue-700 ">edit</div>
                                            </Link>
                                            
                                            <div 
                                                onClick={() => {deleteItem(item.id)}}
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
        </div>
    )
}

export default SliderPagePaneAdmin