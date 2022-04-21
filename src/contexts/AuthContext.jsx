import { createContext,useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [isAuth,toggleAuth] = useState(false);
    const [user,setUser] = useState({});
    const handleAuth = () => toggleAuth(!isAuth) ;
    const handleUser = (user) => setUser(user);
    return <AuthContext.Provider value={{isAuth,handleAuth,user,handleUser}}>{children}</AuthContext.Provider>
}

export {AuthContext,AuthContextProvider};
