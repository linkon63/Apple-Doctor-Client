import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const RequireAuth = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();

    useEffect(() => {
        console.log("Private Route Components")
        console.log("Private Route location", location.pathname)
        console.log("loggedInUser", loggedInUser.email)
    }, [])


    if (!loggedInUser.email) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;