
import { createContext, useContext, useState } from "react";


const AuthContext = createContext();


const AuthContextProvider = ({children}) => {
  const [user , setUser ] = useState(false);


return(
<AuthContext.Provider value={{user, setUser}}>
{children}


</AuthContext.Provider>

)
}

export default AuthContextProvider;

export const useAuthContext =() => {
  
      return useContext(AuthContext)
}
