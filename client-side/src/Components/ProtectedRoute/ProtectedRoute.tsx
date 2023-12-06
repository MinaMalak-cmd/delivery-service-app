import {Navigate, Outlet} from "react-router-dom"
import { retrieveAccessToken, retrieveUserDetails } from '../../Utils/localStorageGetters';

const ProtectedRoute = ({ allowedRole }: { allowedRole: string }) => {
    const isAuthenticated = retrieveAccessToken();
    const userRole = retrieveUserDetails().role;
    if(isAuthenticated && userRole === allowedRole){
        return <Outlet />
    }
    return (<Navigate to="/" replace />);
};

export default ProtectedRoute;