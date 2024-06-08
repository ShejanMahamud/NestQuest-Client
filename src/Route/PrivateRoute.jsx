import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
const location = useLocation()
const {user} = useAuth();

if(user){
    return children
}
return <Navigate to={'/login'} replace={true} state={location.pathname}/>
}

export default PrivateRoute