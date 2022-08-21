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
        const userInfo = JSON.parse(getCookie('userInfo'))
        if (userInfo) {
            console.log("Private Route:",userInfo)
            console.log("Private Route Email:",userInfo.email)
            setLoggedInUser(userInfo)
        } else {
            console.log("Private Route There is no cookie ")
        }
    }, [])

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      } 

    if (!loggedInUser.email) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;