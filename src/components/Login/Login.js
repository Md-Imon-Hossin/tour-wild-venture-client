import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import googleSignIn from "../../images/signin.jpg";
import { useLocation, useNavigate } from 'react-router-dom';

// import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useNavigate();
    const handleLogIn = () => {
        signInUsingGoogle(location,history);
            
    }

    return (
        <div className='py-4'>
            <h2>Please Login</h2>
            <img className='w-50' src={googleSignIn} alt="" />
            <br />
            <br />

            <Button 
            onClick={handleLogIn}
            // onClick={handleGoogleLogIn}
             className='mt-3' variant='warning' >Google SignIn</Button>
        </div>
    );
};

export default Login;