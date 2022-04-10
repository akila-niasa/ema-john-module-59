import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css"
const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    // const[error,setError]=useState('')
    const navigate=useNavigate()

    let location=useLocation()
    let from = location?.state?.from?.pathname || "/";

    const handleEmail=event=>{
        setEmail(event.target.value)
    }
    const handlePassword=event=>{
        setPassword(event.target.value)
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
        navigate(from, { replace: true })
      }
    const handleSubmit=event=>{
        event.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>Login</h2>
            {
                loading&& <p>Loading.....</p>
            }
           <form onSubmit={handleSubmit}>
           <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmail} type="email" name="" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePassword} type="password" name="" id="" required/>
            </div>
            <p style={{color:'red'}}>{error?.message}</p>
            <input className='form-submit' type="submit" value='Login'/>
            <p>
            New to Ema-john?<Link className='form-link' to='/signUp'>Create New Account</Link>
            </p>
           </form>
            </div>
        </div>
    );
};

export default Login;