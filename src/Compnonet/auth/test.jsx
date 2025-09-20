import { useEffect, useRef, useState } from "react"

const Test = () => {
    const refEmail =  useRef()
    const [em, setEm] = useState('')
    const [warning, setWaring] = useState('')
    const checkEmail = (e) => {
        e.preventDefault()
        if (em.length <= 0 ){

            setWaring ('not empty')
            }
        else {
                        setWaring ('')

        }

        }
        const ch = () => {
              if (em.length <= 0 ){

            setWaring ('not empty')
            }
        else {
                        setWaring ('')

        }
           
        }
        useEffect(()=>{
            ch()
        },[em])



    return (
        <>
   

            <div className="flex  items-center justify-center bg-white w-[50%] h-[300px]" >
                <form action="" className="flex flex-col">
                         {em}
                    <input 
                        onChange={(e)=>{setEm(e.target.value)}}
                    type="email" id = 'email'  className="border-4 border-fuchsia-500!"/>
                    <div >{warning}</div>
                    <label htmlFor="email">email</label>    
                    <input
                        onClick={(e)=>{checkEmail(e)}}
                    type = 'submit' value = 'submit' className="border-4 border-amber-200!" ></input>


                </form>

            </div>
        </>
    )
}

export default Test