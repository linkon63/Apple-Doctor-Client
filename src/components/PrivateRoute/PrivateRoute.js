// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from '../../firebase.init';
// const PrivateRoute = ({ children, ...rest }) => {
//     const [user] = useAuthState(auth);
//     const location = useLocation();

    

//     if (!user) {
//         return <Navigate to="/login" state={{ from: location }} replace></Navigate>
//     }
//     return children;
// };

// export default PrivateRoute;


// import React from 'react';
// import { useContext } from 'react';
// import { Route, Redirect } from 'react-router';
// import { UserContext } from '../../App';

// const PrivateRoute = ({ children, ...rest }) => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     return (
//         <div>
//                 <Route
//                 {...rest}
//                 render={({ location }) =>
//                 (loggedInUser.email )? (
//                     children
//                     ) : (
//                     <Redirect
//                         to={{
//                         pathname: "/login",
//                         state: { from: location }
//                         }}
//                     />
//                     )
//                 }
//                 />
//         </div>
//     );
// };

// export default PrivateRoute;
