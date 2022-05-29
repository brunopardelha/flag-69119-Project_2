import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [autenticado, SetAutenticado] = useState(null);

    const login = (autenticado) => {
        SetAutenticado(autenticado)
    }

    const logout = () => {
        SetAutenticado(false)
    }

    useEffect(() => {
        async function getIsAuth() {
            const response = await fetch('http://localhost:5001/isAuthenticated', {
                method: 'get',
                credentials: 'include',
            });
            const result = await response.json();
            SetAutenticado(result?.isAuth);
        }
        getIsAuth();
    }, [])


    return <AuthContext.Provider value={{ autenticado, login, logout }}>{children}</AuthContext.Provider>
};

export const useAuth = () => {
    return useContext(AuthContext)
}; 