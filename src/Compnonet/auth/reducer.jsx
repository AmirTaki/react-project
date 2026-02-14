
export const reducer = (state, action) => {
    switch (action.type){
        // login
        case  'pageLogin': 
            return {...state, page : action.payload}
        // register
        case "registerPage" : 
            return {...state, registerPage : action.payload }
        
        // input
        case "inputRegister": 
            const {name} = action.payload.target;
            const {value} = action.payload.target;
            return {...state, 
                inputRegister : {...state.inputRegister, [name]: value},
            }
        // focus
        case "focus": 
            return {...state, moveLabel: {...state.moveLabel, [action.payload.name]: true}}
        
        case "blur": 
            return {...state,  moveLabel: {...state.moveLabel,  [action.payload.name]: state.inputRegister[action.payload.name].length > 0 ? true : false}}

        // username register
        case "usernameCheck": 
            const  username = state.inputRegister['username']
            if(!username.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
                return {
                    ...state,
                    inputWarning : {...state.inputWarning, ['username'] : 'Write full Name'}, 
                    inputStatus : {...state.inputStatus , ['username'] : false}
                }
            }
            else {
                return {
                    ...state,
                    inputWarning : {...state.inputWarning, ['username'] : 'ok'}, 
                    inputStatus : {...state.inputStatus , ['username'] : true}
                }
            }
        
        // email register
        case "emailCheck":
            const  email = state.inputRegister['email']
            if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                return {
                    ...state,
                    inputWarning : {...state.inputWarning, ['email'] : 'Write full Email'}, 
                    inputStatus : {...state.inputStatus , ['email'] : false}
                } 
            }
            else { 
                return {
                    ...state,
                    inputWarning : {...state.inputWarning, ['email'] : 'ok'}, 
                    inputStatus : {...state.inputStatus , ['email'] : true}
                }
                
            }
    
        // case "moveLabel" : 
        //     const {index} =  action.payload
        //     const {bool}  = action.payload
        //     return{...state, moveLabel : {...state.moveLabel, [index] : bool}}
        

        case "checkBox":
            const {number} =  action.payload
            const {flag}  = action.payload
            return {...state, checkBox : {...state.checkBox, [number] :flag } }
        
        // check username
        case "55": 



            if(state.inputValue[action.payload]){
                if( !state.inputValue[action.payload].match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
                    return{...state, 
                        inputWarning : {...state.inputWarning, [action.payload] : 'Write full Name'}, 
                        inputStatus : {...state.inputStatus , [action.payload] : false}
                    }
                }
                else {
                    return{...state,
                        inputWarning : {...state.inputWarning, [action.payload] : 'ok'},
                        inputStatus : { ...state.inputStatus ,[action.payload] : true}
                    }
                }
            }
        return {...state}
        // // check email
        case "checkEmail" : 
            if(state.inputValue[action.payload]){
                if(!state.inputValue[action.payload].match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                    return{...state, 
                        inputWarning : {...state.inputWarning, [action.payload] : 'Write full Email'}, 
                        inputStatus : {...state.inputStatus ,[action.payload] : false}
                    }
                }
                else {
                    return{...state, 
                        inputWarning : {...state.inputWarning ,[action.payload] : 'ok'}, 
                        inputStatus : {...state.inputStatus ,[action.payload] : true}
                    }
                }
            }

        return {...state}
        // // check password
        // case "checkPassword" : 
        //     if(state.inputValue[action.payload]){
        //         if(!state.inputValue[action.payload].match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
        //             return{...state,     
        //             inputWarning : { ...state.inputWarning ,[action.payload] : 'Password should contain'},
        //             inputStatus : {...state.inputStatus ,[action.payload] : false}
        //         }
        //         }
        //         else {
        //             return{...state, 
        //                 inputWarning : {...state.inputWarning, [action.payload] : 'ok'}, 
        //                 inputStatus : {...state.inputStatus ,[action.payload] : true}
        //             }
        //         }
        //     }
        // return {...state}


        // case "checkInputLogin" :
        //     if(state.inputValue[action.payload]){
        //         if(state.inputValue[action.payload].length > 0 ){
        //             return { ...state,
        //                 inputWarning : { ...state.inputWarning ,[action.payload] : ''},
        //                 inputStatus : { ...state.inputStatus, [action.payload] : true}}
        //         }
        //         else {
        //             return { ...state, inputStatus : { ...state.inputStatus, [action.payload] : false}}
        //         }
        //     }
        //     return {...state, }


        case "warning" :
            return{...state, 
                inputWarning : { ...state.inputWarning, [action.payload.index] : action.payload.warning}, 
                inputStatus : {...state.inputStatus, [action.payload.index] : false}}
        
        case "Successful" : 
            return{ ...state, Successful : action.payload}
        
        case "PanelAdmin" : 
            return {...state, PanelAdmin : action.payload}

        default : 
            return{...state}

    }
} 