import { useEffect, useReducer, useRef } from "react"

const ColumnSection = () => {
  const menus = ["menu1", "menu2", 'menu3', 'menu4']
  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10']

  const reducer = (state, action) => {
    switch(action.type){
      case "hightItmes" :
        const {index} = action.payload
        const {height} = action.payload
        return {...state, height :{ [index] : height}}
     
      case "heightHandler" : 
        const newHeight = Object.keys(state.height).reduce((a, b) => {
          a [b] = 0
          return a
        },{})
        return {...state, height : {newHeight}}
      
      case "innerWidth" : 
        const flag = window.innerWidth <= 768 ? true : false
        return {...state, innerWidth : flag}
      
      default : 
        return {...state}
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    height : {},
    innerWidth : true

  })
  const MenuHandler = (index) => {
    const Menus = document.querySelectorAll(".menusControler")[index]
    const itemsHight =  Menus.querySelectorAll(".itemConterole").length
    if(state.innerWidth) {
      state.height[index] >= "0px" ?  dispatch({type : "hightItmes" , payload : {height : `0`, index : index}}) : dispatch({type : "hightItmes" , payload : {height : `${itemsHight*45}px`, index : index}})
    }
  }

  useEffect(() => {
    const handlerResize = () => {
      dispatch({type : 'innerWidth'})
      dispatch({type : 'heightHandler'})
    }
    window.addEventListener('resize',handlerResize )
    return() => {
      window.addEventListener('resize',handlerResize )
    }
  }, [])
  return (
    <>
    <div className="w-[90%] bg-white mx-auto  flex max-md:flex-col md:h-[100px] overflow-hidden md:hover:h-[415px]  duration-300
      md:justify-center md:gap-16 md:border-b-1! border-b-gray-300! mb-10 
    ">
      {menus.map((menu, index) => (
        <div  
          className="max-md:w-[100%] w-[150px] bg-transparent menusControler flex flex-col  md:items-center  ">
          <div  onClick={ () => {MenuHandler (index)}} className="flex items-center justify-between p-3 bg-transparent max-md:cursor-pointer">
            <div className="text-gray-600">{menu}</div>
            <i className={`${state.height[index] > "0px" ? "rotate-180" : ""} text-gray-500 bi bi-chevron-down duration-300 md:hidden `}></i>
          </div>
          <div 
            style={{height : state.height[index]}}
            className="bg-transparent max-md:h-0  overflow-hidden  duration-300 flex flex-col  md:p-3  max-md:pl-9 gap-6 pt-2 max-md:gap-6!">
              {items.map((item, key) => (
                <div key = {key} className="itemConterole w-fit text-[14px] text-gray-400 hover:underline hover:text-gray-800 duration-200 cursor-pointer">{item}</div>
              ))}
          </div>

        </div>
      ))}

    </div>

    </>
  )
}

export default ColumnSection;
