const ColumnSection = () => {
  const menus = ["menu1", "menu2", 'menu3', 'menu4']
  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9']
  return (
    <div className="w-[90%] bg-blue-600 mx-auto h-[700px]">
      <div className="w-[100%] h-[100px] hover:h-[500px] duration-500 bg-red-500 overflow-hidden flex flex-row justify-center">
        {menus.map((menu, index) => (
          <div className="bg-green-400 w-50">
            <ul className="flex flex-col  gap-2  items-center">
              <div className="text-gray-500">menu</div>
              <div className="flex flex-col gap-3"> 
                <li className="text-gray-200 hover:text-gray-600 duration-300 cursor-pointer hover:underline">item</li>
                <li className="text-gray-200 hover:text-gray-600 duration-300 cursor-pointer hover:underline">item</li>
                <li className="text-gray-200 hover:text-gray-600 duration-300 cursor-pointer hover:underline">item</li>
                <li className="text-gray-200 hover:text-gray-600 duration-300 cursor-pointer hover:underline">item</li>
                <li className="text-gray-200 hover:text-gray-600 duration-300 cursor-pointer hover:underline">item</li>
                <li className="text-gray-200 hover:text-gray-600 duration-300 cursor-pointer hover:underline">item</li>
                <li className="text-gray-200 hover:text-gray-600 duration-300 cursor-pointer hover:underline">item</li>
              </div>
            </ul>
          </div>
        ))}
      
      
      </div>
    </div>
  )
}

export default ColumnSection;