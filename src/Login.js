import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider"
import chasebook from "./chasebook.png";



function Login() {
    const[state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://lh6.googleusercontent.com/proxy/wGeCcpD7xB1mToE4vLE_ZW-TJvm6BHHq22axjxcRT660b6S1a2yJSeryCuRXnoy3CC9_RHpm1WFLOpABwl16H_MNkGbHczIkPft5TwGXKq_1l2BW9oOE9ZN9WZM=s0-d"/>
                <img src={chasebook}/>
            </div>
            
            <Button type="submit" onClick={signIn}> Sign In</Button>
        </div>
    )
}

export default Login
