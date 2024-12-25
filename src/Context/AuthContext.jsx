import { createContext, useEffect, useState } from "react";


export let AuthContext = createContext(0);



export default function AuthContextProvider (props){

   


    const [userToken, setuserToken] = useState(localStorage.getItem("token") ?? "");


    return <AuthContext.Provider value={{userToken, setuserToken}}>
        {props.children}
    </AuthContext.Provider>
}