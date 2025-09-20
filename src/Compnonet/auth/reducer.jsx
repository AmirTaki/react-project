
export const reducer = (state, action) => {
    switch (action.type){
        case  'pageLogin': 
            return {...state, page : action.payload}
        
        case "moveLabel" : 
            const {index} =  action.payload
            const {bool}  = action.payload
            return{...state, moveLabel : {...state.moveLabel, [index] : bool}}
        
        case "registerPage" : 
            return {...state, registerPage : action.payload }

        case "checkBox":
            const {number} =  action.payload
            const {flag}  = action.payload
            return {...state, checkBox : {...state.checkBox, [number] :flag } }
        
        case "inputValue" :
            return{...state, inputValue : { ...state.inputValue ,[action.payload.index] : action.payload.value}}
        
        // check username
        case "checkUsername": 
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
        // check email
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
        // check password
        case "checkPassword" : 
            if(state.inputValue[action.payload]){
                if(!state.inputValue[action.payload].match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
                    return{...state,     
                    inputWarning : { ...state.inputWarning ,[action.payload] : 'Password should contain'},
                    inputStatus : {...state.inputStatus ,[action.payload] : false}
                }
                }
                else {
                    return{...state, 
                        inputWarning : {...state.inputWarning, [action.payload] : 'ok'}, 
                        inputStatus : {...state.inputStatus ,[action.payload] : true}
                    }
                }
            }
        return {...state}
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