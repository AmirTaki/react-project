import { use } from "react"
import { act, useReducer, useState } from "react"

const Test = () => {


    const h = "500px"
    return(
        <div>
            <div className="bg-blue-500 w-[300px] group/one ">
                <div>menu</div>
                <div className="h-0 overflow-hidden group-hover/one:h-[100px]! duration-300">
                    <div className="">item</div>
                    <div className="">item</div>
                    <div className="">item</div>
                    <div className="">item</div>
                </div>
            </div>
        </div>
      
    )
}

export default Test
