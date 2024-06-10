import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";


const AgentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const {role,rolePending} = useRole()
    const location = useLocation();

    if (loading || rolePending) {
        return (
          <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
            <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
          </div>
        );
      }

    if (user && role === 'Agent' && !loading) {
        return children;
    }


    return <Navigate to="/" state={location.pathname} replace={true}></Navigate>

};

export default AgentRoute;