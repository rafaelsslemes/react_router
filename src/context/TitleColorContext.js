import { createContext, useReducer } from "react";


export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {

}

export const TitleColorContextProvider = ({children}) => {

    // Similiar to useState but is able to manage more than one variable 
    const [state, dispatch] = useReducer(titleColorReducer, {color: 'purple'}); 

    return (
        <TitleColorContext.Provider value= {{...state}}>
            {children}
        </TitleColorContext.Provider>
    )
};