import React,{useContext, createContext, useState} from "react";

const AppContext = createContext();


const GlobalState = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [income, setIncome] = useState(0);
    const [expanse, setExpanse] = useState(0);


    return <AppContext.Provider value={{
        setShowModal,
        showModal,
        setExpanse,
        expanse,
        income,
        setIncome
    }} >

        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    const myContext = useContext(AppContext);
    return myContext
}

export default GlobalState