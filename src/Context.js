import { createContext, useContext, useEffect, useReducer } from "react";
import { Reducer } from "./reducer";

const Context = createContext();


const initState = {
    filters: [],
    customFilters: [],
    selected: []
}

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initState)

    useEffect(() => {
        dispatch({ type: 'LOAD' });
    }, [])

    return <Context.Provider value={{ state, dispatch }}>
        {children}
    </Context.Provider>
}


export const useGlobal = () => {
    return useContext(Context);
}