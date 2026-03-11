import { useReducer } from "react";
import HeaderPanelAdmin from "../../header/header";

const CreateSessionScrollSlider = () => {
    const reducer = (state, action) => {
        switch(action.type){
            case "title":
                return {...state, title: action.payload}
            
            case "body":
                return {...state, body: action.payload}
            
            case "price":
                return {...state, price: action.payload < 0 ? 0 : action.payload}
            default: 
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {
        title: '',
        titleWarning: 'warning',
        body: '',
        bodyWarning: 'warning',
        price: 0,
        priceWarning: 'warning'
    })

    return(
        <div className="">
            <HeaderPanelAdmin id = {8} />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl my-5 hover:tracking-[.4rem] duration-200 ">ADD SLIDER</h1>
                    <form>
                        {/*image view  */}
                        <div className="flex gap-5 items-center justify-center m-4">
                            {/* {state.urlImage && (
                                <img src={state.urlImage} style={{width: 100}}></img>
                            )} */}
                        </div>

                        {/* image */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="image" className="text-blue-500">image</label>
                            <input 
                                type="file" id = "image" className="border-2 w-[300px] rounded-md h-10 p-2"
                                placeholder="select image ...." 
                                // onChange={(event) => {handleImageChange(event)}}
                                accept="image/*"
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {/* {state.warningImage} */}
                            </span>
                        </div>
                        
                        <hr className="my-8"/>

                        {/* title */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="title" className="text-blue-500">title</label>
                            <input 
                                value = {state.title}
                                type="text" id = "title" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'title', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.titleWarning}
                            </span>
                        </div>

                        <hr className="my-8"/>                        
                        {/* body */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="body" className="text-blue-500">caption</label>
                       
                            <textarea
                                id = 'body'
                                className="border-2 w-[300px] rounded-md h-23  p-1"
                                onChange={(e) => {dispatch({type: 'body', payload: e.target.value})}}
                            ></textarea>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.bodyWarning}
                            </span>
                        </div>

                        <hr className="my-8"/>    
                        
                        {/* price */}
                        <div className="flex gap-5 items-center justify-center">
                            <label htmlFor="price" className="text-blue-500">price</label>
                            <input 
                                value = {state.price}
                                type="number" id = "price" className="border-2 w-[300px] rounded-md h-10 p-2"
                                onChange={(e) => {dispatch({type: 'price', payload: e.target.value})}}
                            ></input>
                        </div>
                        <div className="text-gray-500 py-5">message:
                            <span className="text-red-600 px-2">
                                {state.priceWarning}
                            </span>
                        </div>      
                        
                        <hr className="my-8"/>               
                        <div className="flex justify-center items-center">
                            <input 
                                // onClick={(event) => {addSlider(event)}}
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

export default CreateSessionScrollSlider;