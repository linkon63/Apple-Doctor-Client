import React from 'react';
import { Link, Navigate, useHistory, useLocation, useNavigate } from 'react-router-dom';
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
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        console.log('Google sign in', location);
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log("User:", user)
                setLoggedInUser(user);
                // console.log(user)
                setUserToken();
                setCookie('userInfo', user, 7)
                navigate(from, { replace: true });
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

    const CookieSetHandle = () => {
        setCookie("userInfo", { name: "hello" }, 7)
    }
    const CookieGet = () => {
        const userInfo = getCookie('userInfo')
        console.log("UserInfo:", JSON.parse(userInfo))
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (JSON.stringify(value) || "") + expires + "; path=/";
    }

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

    function eraseCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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
                        <button onClick={CookieSetHandle}>Set cokkies</button>
                        <button onClick={CookieGet}>get cokkies</button>
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