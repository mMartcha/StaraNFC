import { createContext, ReactNode, useState } from "react";
import React from "react";



type NfcContextProps = {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}



type NfcContextProviderProps={
    children: ReactNode
}
export const MapContext = createContext({} as NfcContextProps)

export function NfcContextProvider({children}:NfcContextProviderProps ){

    const [darkMode, setDarkMode] = useState<boolean>(false)

    return(
        <MapContext.Provider value={{
            darkMode, setDarkMode 
        }}>
            {children}
        </MapContext.Provider>
    )

}