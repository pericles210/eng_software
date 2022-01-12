import React, {createContext, useState, useContext} from 'react';

const AuthContext = createContext();

export default function AuthProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState();
    console.log('set');
    localStorage.setItem('isLoggedIn', isLoggedIn);
    
    return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
    );
}

export function useAuth(){
    const ctx = useContext(AuthContext);
    const {isLoggedIn, setIsLoggedIn} = ctx;
    return [isLoggedIn, setIsLoggedIn];
}