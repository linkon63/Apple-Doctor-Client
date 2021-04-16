import React from 'react';
import { useContext } from 'react';
import { Route, Redirect } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
                <Route
                {...rest}
                render={({ location }) =>
                (loggedInUser.email )? (
                    children
                    ) : (
                    <Redirect
                        to={{
                        pathname: "/login",
                        state: { from: location }
                        }}
                    />
                    )
                }
                />
        </div>
    );
};

export default PrivateRoute;