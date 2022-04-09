import React from 'react'
import "./login.scss"
import alok from "../assets/btmsvg.svg";
import roshan from "../assets/topsvg.svg";
const Login = () => {
  return (
    <div className='login'>
        <div className='login-left'>
        <img className='roshanimg' src={roshan} alt="top-roshan" />

            <img src={alok} alt="bottom-alok" />



            <div className='login-logo'>
                <h1 className='xmt'>xMonies</h1>
                <p className='txtlogo'>Trasfer made simple</p>
            </div>
        </div>
            

        <div className='login-right'>
            <div className='login-div' >
                <span className='login-head'>Log In</span>
                <div>
                    <span className='login-line'>New to xMonies? </span>
                    <span className='login-secline'>Sign Up</span>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Login