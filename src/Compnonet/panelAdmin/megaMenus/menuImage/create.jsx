import { Link } from "react-router-dom"
import HeaderPanelAdmin from "../../header/header"
Link
const CreateMegaMenuImage = () => {
    return (
        <div className="">
            <HeaderPanelAdmin id = {6} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">ADD ITEM</h1>

                    <form>
                        {/* category */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="category" className="text-blue-500">category</label>
                            <input 
                                value = {state.category}
                                type="text" id = "category" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'category', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.warningCategory}
                            </span>
                        </div>

                        <hr className="my-8"/>
                        {/* title */}
                        <div className="flex gap-5 items-center justify-center">
                            
                            <label htmlFor="title" className="text-blue-500">title</label>
                            <select
                                onChange={(e) => {dispatch({type: 'title', payload: e.target.value})}}
                                id = "title" className="bg-[#252525]!  text-white border-2 w-[300px] rounded-md h-13 p-2 "
                            >
                                <option value= "" className="hidden">select one option ?</option>
                                {title?.map((t) => {
                                    return(
                                        <option  key = {t.id} value={t.title}>
                                            {t.title}
                                        </option>
                                    )
                                })}
                            </select>
                        </div> 
                        
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.warningTitle}
                            </span>
                        </div>
                       
                       <hr className="my-8"/>
                        {/* list */}
                        <div className="flex gap-5 items-center justify-center">
                            
                            <label htmlFor="list" className="text-blue-500">list</label>
                            <select
                                onChange={(e) => {dispatch({type: 'list', payload: e.target.value})}}
                                id = "list" className="bg-[#252525]!  text-white border-2 w-[300px] rounded-md h-13 p-2 "
                            >
                                <option value= "" className="hidden">select one option ?</option>
                                {lists?.map((li) => {
                                    return(
                                        <option  key = {li.id} value={li.list}>
                                            {li.list}
                                        </option>
                                    )
                                })}
                            </select>
                        </div> 
                        
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.warningList}
                            </span>
                        </div>
                        
                        <hr className="my-8"/>
                        
                        {/* sign */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="sign" className="text-blue-500">sign</label>
                            <input 
                                value = {state.sign}
                                type="text" id = "sign" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'sign', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {/* {state.w} */}
                            </span>
                        </div>              
                            
                        <hr className="my-8"/>
                        <div className="flex justify-center items-center">
                            <input 
                                onClick={(event) => {addList(event)}}
                                type="submit" value = "ADD" 
                                className="border-2 px-4 py-2 rounded-xl cursor-pointer hover:text-green-600 duration-300 hover:border-green-600" 
                            />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateMegaMenuImage