import { createContext,useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [isAuth,toggleAuth] = useState(false);

    const handleAuth = () => toggleAuth(!isAuth) ;
    return <AuthContext.Provider value={{isAuth,handleAuth}}>{children}</AuthContext.Provider>
}

export {AuthContext,AuthContextProvider};