import { createContext,useState } from "react";
const AuthContext =createContext({loggedInUser:null,setLoggedInUser:Function} as any);
export const AuthProvider=({children}:any)=>{
  const [loggedInUser,setLoggedInUser]=useState()
 const setUser=(data:any)=>{
    console.log("I am here",data)

 }
 return(<>
    <AuthContext.Provider value={{loggedInUser:loggedInUser,setLoggedInUser:setUser}}>
    {children}
    </AuthContext.Provider>
    </>)
}

export default AuthContext