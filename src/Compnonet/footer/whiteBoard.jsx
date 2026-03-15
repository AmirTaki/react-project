import { useEffect, useReducer } from "react"
import api from "../../axiosConfig"

const WhiteBoard = () => {
    // 'SUPPORT', 'COMPANY INFO'
    const Menus = ['PRODUCTS', 'SPORTS', 'COLLECTIONS','SUPPORT', 'COMPANY INFO' ]
    const Items = ['Help', 'Returns & Exchanges', 'Shipping', 'Order Tracker', 'Store Locator', 'Size Charts', 'Gift Card Balance', 'How to Clean Shoes', 'Bra Fit Guide', 'Breathing for Running', 'Promotions', 'Sitemap']
    
    const reducer = (state, action) => {
        switch(action.type){
            case "menus":
                return {...state, menus: action.payload}

            case "items": 
                return {...state, items: action.payload}

            default:
                return state
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        menus: [],
        items: []
    })

    const RequstApi = async () => {
        try{
            await api.get(`tables/footer/menuFooter/reading.php`).then((res) => {
                const data = Array.isArray(res.data) ? res.data : [];
                dispatch({type: 'menus', payload: data})
            })
        }
        catch(err){
            console.error('message: ', err)
        }
    }
    useEffect(() => {RequstApi()}, [])
    console.log(state)
    return(
        <>
            <div className="w-[100%] h-[100%] bg-r max-md:hidden! flex items-start justify-center gap-10 ">
                {state.menus.map((menu, index) => (
                    <div key = {index} className="w-[15%]     bg-white  mt-20 mb-10  flex flex-col   gap-6">
                        <div className="text-xl font-bold  ">{menu.title}</div>
                        <div className="flex flex-col gap-5 text-gray-400 text-md ">                      
                            {Items.map((item, key) => (
                                <div key = {key} className="hover:text-gray-600 duration-500 cursor-pointer hover:underline">{item}</div>
                            ))}
                        </div>
                    </div>
                ))}
             
               
                
                

            </div>
        </>
    )
}

export default WhiteBoard;