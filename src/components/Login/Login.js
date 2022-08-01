import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { Android, VpnLock } from '@material-ui/icons';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = "" //useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        console.log('handle Google SIgn In');
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user);
                console.log(user)
                setUserToken();
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error, errorCode, errorMessage)
            });
    }
    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(function (error) {

        });
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="container mt-5 pt-5">
                <div className="card text-center mt-5 p-5">
                    <div className="card-header bg-success text-dark">
                       <strong> Please Login for Submit your Order</strong>
                        </div>
                    <div className="card-body">
                        <h5 className="card-title">Welcome to login page sir</h5>
                        <p className="card-text">Do not cancel login page without login</p>
                        <button onClick={handleGoogleSignIn} className='btn btn-dark'> <Android></Android> Sign in with Google</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-6">
                <div className="container mt-5 pt-5">
                    <img className='w-100' src="https://i.ibb.co/hYmNcBN/mishaal-zahed-wm-F3-XMFSG00-unsplash-1.jpg" alt="login img" />
                </div>
            </div>
        </div>
    );
};

export default Login;