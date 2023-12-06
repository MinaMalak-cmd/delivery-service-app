import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, Outlet} from "react-router-dom"
import { IAuthSlice } from '../../Redux/AuthSlice';

const ProtectedRoute = ({ allowedRole }: { allowedRole: string }) => {
    const isAuthenticated = useSelector((state:IAuthSlice) => state.isAuthenticated);
    const userRole = useSelector((state:IAuthSlice) => state?.userDetails?.role);
    if(isAuthenticated && userRole === allowedRole){
        return <Outlet />
    }
    return (<Navigate to="/" replace />);
};

export default ProtectedRoute;