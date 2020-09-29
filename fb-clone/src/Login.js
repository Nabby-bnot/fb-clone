import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";



function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png" alt="" />
                <img src="https://www.cloudrecruit.io/wp-content/uploads/2018/10/black-facebook-clipart-21.jpg.png" alt="" />

            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
