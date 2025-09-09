import { use } from "react"
import { act, useReducer, useState } from "react"

const Test = () => {


    const [height, setHeigt] =   useState(0)
    const enter = (index) => {
        const mega = document.querySelectorAll(".mega")[index]
        const alpha = mega.querySelectorAll('.alpha').length;
        console.log(alpha)
        setHeigt((h) => ({}))
        setHeigt(`${alpha*30}px`)
    }
    const leave = () => {
        setHeigt("0px")

    }
    return(
        <div>
            <div onMouseEnter={()=> {enter(0)}} onMouseLeave={()=> {leave(0)}} className="bg-blue-500 w-[300px] group/one ">
                <div>menu</div>
                <div style={{height : height}} className="h-0 overflow-hidden  duration-300 mega">
                    <div className="alpha">item</div>
                    <div className="alpha">item</div>
                    <div className="alpha">item</div>
                    <div className="alpha">item</div>
                </div>
            </div>
            <div onMouseEnter={()=> {enter(1)}} onMouseLeave={()=> {leave(1)}} className="bg-blue-500 w-[300px] group/one ">
                <div>menu</div>
                <div style={{height : height}} className="h-0 overflow-hidden  duration-300 mega">
                    <div className="alpha">item</div>
                    <div className="alpha">item</div>
                    <div className="alpha">item</div>
                    <div className="alpha">item</div>
                </div>
            </div>
          
        </div>
      
    )
}

export default Test
