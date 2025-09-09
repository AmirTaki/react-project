export const initialStateHeader = {
  search : false,
  moveNavbar : false,
  productMenu : {},
  productMenuNavbar : {},
  animationProductMenu : {},
  heightNavbar : {}
}


export const reducerHeader = (state, action) => {
 
    switch(action.type){
    // search
    case ACTIONTYPE.search :
        return {...state, search : !state.search };

    case ACTIONTYPE.searchResize : 
        return {...state, search : false}
    
    // MoveNaveBar 
    case ACTIONTYPE.moveNavbar : 
        return {...state, moveNavbar : !state.moveNavbar};

    case ACTIONTYPE.moveNavbarResize : 
        return {...state, moveNavbar : false};

    // productMenu
    case ACTIONTYPE.productMenu : 
        const {id} = action.payload;
        return {...state,
        productMenu: { ...state.productMenu, [id] : !state.productMenu[id]  }
        }

    case ACTIONTYPE.productMenuResize :
        const newProductMenu = Object.keys(state.productMenu).reduce((acc, key) => {
        acc[key] = false;
        return acc;
        }, {});
        
        return {...state, 
        productMenu : newProductMenu
        }

    // productMenuNavbar 
    case ACTIONTYPE.productMenuNavbar :
        
        const {index} = action.payload ;
        return {...state, productMenuNavbar : {
        ...state.productMenuNavbar, [index] : !state.productMenuNavbar[index]
        }}

    case ACTIONTYPE.productMenuNavbarResize : 
        const newProductMenuNavber = Object.keys(state.productMenuNavbar).reduce((a, b) => {
        a[b] = false;
        return a
        }, {})
        return {...state,
        productMenuNavbar : newProductMenuNavber
        }

    //animationProductMenu
    case ACTIONTYPE.animationProductMenu : 
        const {page}  = action.payload;
        const {animation} = action.payload
        return {
        ...state,
        animationProductMenu : {
            ...state.animationProductMenu,
            [page] : animation
        }
        }

    // height 
    case ACTIONTYPE.heightNavbar : 
        const {height} = action.payload;
        const {place} = action.payload;
        return {...state,
        heightNavbar : {
            ...state.heightNavbar,
            [place] : height 
        }};
    
    // default 
    default :
        return {...state, }
    }

}