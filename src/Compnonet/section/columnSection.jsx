import { useReducer } from "react"

const ColumnSection = () => {
  const menus = ["menu1", "menu2", 'menu3', 'menu4']
  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10']

  const reducer = (state, action) => {
    switch(action.type){
      case "hightItmes" :
        const {index} = action.payload
        const {height} = action.payload
        return {...state, height :{ [index] : height}}
     
      default : 
        return {...state}
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    height : {},

  })
  const MenuHandler = (index) => {
    const Menus = document.querySelectorAll(".menusControler")[index]
    const itemsHight =  Menus.querySelectorAll(".itemConterole").length
    state.height[index] >= "0px" ?  dispatch({type : "hightItmes" , payload : {height : `0`, index : index}}) : dispatch({type : "hightItmes" , payload : {height : `${itemsHight*30}px`, index : index}})
  }
  return (
    <>
    <div className="w-[90%] bg-blue-600 mx-auto  flex max-md:flex-col md:h-[100px] overflow-hidden md:hover:h-[600px]  duration-300
      
    ">
      {menus.map((menu, index) => (
        <div  onClick={ () => {MenuHandler (index)}} 
          className="max-md:w-[100%]  bg-amber-700 menusControler ">
          <div className="flex items-center justify-between p-3 bg-green-300">
            <div className="">{menu}</div>
            <i className={`${state.height[index] > "0px" ? "rotate-180" : ""} text-gray-500 bi bi-chevron-down duration-300 `}></i>
          </div>
          <div 
            style={{height : state.height[index]}}
            className="bg-yellow-300 max-md:h-0  overflow-hidden  duration-300">
            <div className="itemConterole">item</div>
            <div className="itemConterole">item</div>
            <div className="itemConterole">item</div>
            <div className="itemConterole">item</div>
            <div className="itemConterole">item</div>
            <div className="itemConterole">item</div>
          </div>

        </div>
      ))}

      {/*  */}

    </div>
    <div className="h-[300px] w-[300px]"></div></>
  )
}

export default ColumnSection;


/*
  <div className="w-[100%] h-[200px] hover:h-[510px] duration-500 bg-red-500 overflow-hidden flex flex-row justify-center
        max-md:flex-col! max-md:hover:h-auto  max-md:h-auto max-md:justify-start! 
      ">
        {menus.map((menu, index) => (
          <div key = {index} className="bg-green-400 w-50 max-md:w-[100%]!  group ">
            <ul className="flex flex-col  gap-3  items-center max-md:items-start! bg-amber-300   ">
        
              <div  className=" flex bg-red-400 w-[100%] md:w-auto justify-between items-center h-13 p-3">
                <div className="text-gray-500">{menu}</div>
                <i className="text-gray-500 bi bi-chevron-down md:hidden"></i>
              </div>
              
              {items.map((item, key) => (
                <div key = {key} className="flex flex-col gap-4    "> 
                  <li className="text-gray-200 hover:text-gray-600 duration-300 cursor-pointer hover:underline">{item}</li>  
                </div>
              ))}
      
            </ul>
          </div>
        ))}
      
      
      </div>

*/