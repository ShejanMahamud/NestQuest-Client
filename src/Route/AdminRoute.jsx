import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";


const AdminRoute = ({ children }) => {
    const { user } = useAuth();
    const {role} = useRole()
    const location = useLocation();

    if (user && role === 'Admin') {
        return children;
    }

    return <Navigate to="/" state={location.pathname} replace={true}></Navigate>

};

export default AdminRoute;