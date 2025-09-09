import { act, useReducer, useState } from "react"

const Test = () => {

    const array = []
    for(let i = 0; i < 3 ; i++){
        array.push(false)
    }

    const numbers = [0, 1, 2]
    
    const [product, setProduct] = useState({})


    const reducer = (state, action) => {
        switch(action.type){
            case "product":
                const {id} = action.payload
                return {
                    ...state,
                    product: {
                        ...state.product,
                        [action.payload.id]: !state.product[action.payload.id]
                    }
                };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, {
      product:{}
    })

/*
    const handlerClick = (index) => {
        setProduct(currentProducts =>
        currentProducts.map((item, i) => (i === index ? !item : item))
        );
    }
*/
    const handlerClick = (index) => {
        
        // setProduct({...product, [index] : !product[index]})
        // setProduct((prev) => ({...prev, [index] : !prev[index]}))
        dispatch({type : "product", payload : {id : index}})
     
    }
    const h = "200px"
    return(
        <>
        {array.map((item, index) => (
            <div className={`flex flex-col h-[${h}]`}>
                <button onClick={()=> {handlerClick(index)}}>CLICK 1</button>
              
                {/* {state.product[index] ? "ok" : "not"} */}

                <div className={`${state.product[index] ? "" : "hidden"} w-50  bg-amber-300 fixed `}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, at?
                </div>
             
            </div>
        ))}
        </>
      
    )
}

export default Test
