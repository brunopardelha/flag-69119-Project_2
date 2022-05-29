import { Navigate } from "react-router-dom";

const Logout = () => {

    document.cookie= "connect.sid=; expires=Sat, 28 May 2022 00:00:00 UTC; path=/;";
    
    async function logout() {
        await fetch('http://localhost:5001/logout', { credentials: 'include' }).then((response)=>response.json())
    }
    
    logout();

    return (
        <Navigate to='/login' />
        )
        
}

export default Logout;