const ColumnSection = () => {
  const menus = ["menu1", "menu2", 'menu3', 'menu4']
  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9']
  return (
    <div className="w-[90%] bg-blue-600 mx-auto h-[700px]">
      <div className="w-[100%] h-[100px] hover:h-[500px] duration-500 bg-red-500 overflow-hidden flex flex-row justify-center
        max-md:flex-col! max-md:hover:h-[400px]!  max-md:h-[400px] max-md:justify-start!
      ">
        {menus.map((menu, index) => (
          <div key = {index} className="bg-green-400 w-50 max-md:w-[100%]!">
            <ul className="flex flex-col  gap-3  items-center max-md:items-start! bg-amber-300 ">
              <div className=" flex bg-red-400 w-[100%] justify-between items-center h-13 p-3">
                <div className="text-gray-500">{menu}</div>
                <i className="text-gray-500 bi bi-chevron-down"></i>
              </div>
              
              {items.map((item, key) => (
                <div key = {key} className="flex flex-col gap-3 max-md:hidden!"> 
                  <li className="text-gray-200 hover:text-gray-600 duration-300 cursor-pointer hover:underline">{item}</li>  
                </div>
              ))}
      
            </ul>
          </div>
        ))}
      
      
      </div>
    </div>
  )
}

export default ColumnSection;