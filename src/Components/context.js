import React,{useContext, createContext} from "react";

const AppContext = createContext();


const GlobalState = ({children}) => {


    return <AppContext.Provider value="ALLAH(SWT) Covenant is HAQQ" >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    const myContext = useContext(AppContext);
    return myContext
}

export default GlobalState