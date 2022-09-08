import {createContext, useState, useEffect} from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({children}) =>{
    const [auth, setAuth] =useState({})
    useEffect(()=>{
        setAuth({...auth, userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null})
    },[])
    return( 
    <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
    )
}


export default AuthContext