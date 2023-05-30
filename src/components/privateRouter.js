
import { Outlet, Navigate } from 'react-router-dom'

export  function PrivateRoutes() {
    let  isAuth = localStorage.getItem("token") == null ? false : true;
   
    return (
        <>
            {isAuth ? <Outlet  /> : <Navigate to="/login" />};
            
        </>

    )

}

export  function PrivateLogin() {
    let  isAuth = localStorage.getItem("token") == null ? false : true;
   
    return (
        <>
            {isAuth?   <Navigate to="/" /> : <Outlet  /> };
            
        </>

    )

}
