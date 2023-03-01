import React, { useContext } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { UserContext } from '../routes/Router';

export default function PrivateRoute({
    children, ...rest
}) {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if (!loggedInUser.email) {
        return <Navigate to="/login" replace />;
    }
    return (
        <>
            {children}
        </>
    )
}

// import { Routes, Route, Link, Navigate } from 'react-router-dom';
// import { UserContext } from '../routes/Router';

// default export const PrivateRoute = ({
//     redirectPath = '/landing',
//     children,
// }) {


//    const [loggedInUser, setLoggedInUser] = UserContext(UserContext);
//     if (!loggedInUser.email) {
//         return <Navigate to={redirectPath} replace />;
//     }
// }
//     return
//     <>
//         {children}
//     </>
// };