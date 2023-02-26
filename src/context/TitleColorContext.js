import { createContext, useReducer } from "react";


export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {

    switch(action.type){
        case "RED":
            return {...state, color:'red', number:30};
        case "BLUE":
            return {...state, color:'blue', number:50};
        case "GREEN":
            return {...state, color:'green'};
        default:
            return {...state, color:'purple'};
        
                        
    }

}

export const TitleColorContextProvider = ({children}) => {

    // Similiar to useState but is able to manage more than one variable 
    const [state, dispatch] = useReducer(titleColorReducer, {color: 'purple', number:100}); 

    return (
        <TitleColorContext.Provider value= {{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
};