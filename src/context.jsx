import { createContext, useState } from "react";

export const SharedStateContext = createContext({});
export default function SharedState({children}){

    const [data, setData] = useState({
        user: sessionStorage.getItem('token') ? JSON.parse(atob(sessionStorage.getItem('token'))) : null
    });

    return <SharedStateContext.Provider value={[data, setData]}>
        {children}
    </SharedStateContext.Provider>

}