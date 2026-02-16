
import imgBackGround from "../../assets/background.jpg"
import { createContext, useContext, useEffect, useReducer, useRef, useState } from "react";
import Nav from "./nav";
import SectionValidation from "./sectionValidation";
import { reducer } from "./reducer";
export const ValidationForm =  createContext()

const Validation = () => {
    
    const [state, dispatch] = useReducer(reducer, {
        page : false,
        registerPage  : false,
        inputRegister : {},
        moveLabel : {},
        checkBox : {},
        inputWarning : {},
        inputStatus : {},
        
        // inputValue : {},
        Successful : false,
        PanelAdmin : false
    })
  

    return (
     
        <div style={{backgroundImage: `url("${imgBackGround}")`, height : '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className=" flex justify-center! items-center! flex-col gap-10 ">    
                <ValidationForm.Provider value = {{ state, dispatch, }} >
                    <Nav />
                    <SectionValidation />
                </ValidationForm.Provider>
            </div>
        </div>
    )
}

export default Validation