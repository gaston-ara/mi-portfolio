import { createContext } from "react";
import { useState } from 'react'


export const WebContext = createContext();

export const ContextProvider = ({children}) => {
    const [music, setMusic] = useState(false)

    return(
        <WebContext.Provider value={{music, setMusic}} >
            {children}
        </WebContext.Provider>
    )
}