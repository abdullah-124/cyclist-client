import React, { useState } from "react";
import '../register.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin"
import Header from '../../Header/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faSignIn } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../../Hooks/useAuth"

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const {user, massage, loginUser} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  console.log(window.history)


  if(user){
    navigate(-1)
  }
  const handleSubmit = (e) =>{
    if(!user){
      loginUser(loginData.email, loginData.password)
    e.preventDefault()
    }
    
  }
  const handleOnBlur = (e) =>{
    const field = e.target.name;
    const value = e.target.value;
    const newData = {...loginData};
    newData[field] = value;
    setLoginData(newData)
    // console.log(newData)

  }
  return (
    <>
    <div className="box container-fluid ">
      <div className="row p-5">

        <div className="register-card px-lg-4 p-3 shadow-lg col-lg-6 mx-auto">
          <h2 className="my-3">Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input onBlur={handleOnBlur} type="email" name="email" placeholder="Email Address" />
            </div>
            <div>
              <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn-regular"><FontAwesomeIcon icon={faSignIn} className="me-2" />Login</button>
          </form>
          <div className="mt-4">
            {
              massage && <h6>{massage}</h6>
            }
            <h6>
              New User?<Link to="/register">Register</Link>
            </h6>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
