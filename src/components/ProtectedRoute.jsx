import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const ProtectedRoute = ({ element }) => {
    const { user } = useAuth(); 
    const location = useLocation();

    if (!user) {
       
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return element;
};

export default ProtectedRoute;
