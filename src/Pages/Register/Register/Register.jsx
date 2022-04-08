import React, { useState } from "react";
import "../register.css";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faRightLeft } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../../Hooks/useAuth"


const Register = () => {
  const [registerData, setRegisterData] = useState({})
  const { registerUser, massage, user} = useAuth()
  const navigate = useNavigate()
  
  //navigate the user 
  if(user){
    navigate(-1)
  }
  ///data submiting
  const handleSubmit = (e) =>{

    if(registerData.password.length > 5){
      console.log(registerData.password)
      registerUser(registerData.email, registerData.password, registerData.name)
    }
    else{
      alert('Password is to Short')
    }
    e.preventDefault()
    console.log(registerData)
  }
  // make object for login
  const handleOnBlur = (e) =>{
    // console.log(e)
    const field = e.target.name;
    const value = e.target.value;
    const newData = {...registerData } 
    newData[field] = value;
    setRegisterData(newData);
    // console.log(newData)
  }
  
  return (
    <div className="box container-fluid ">
      <div className="row p-5">

        <div className="register-card px-lg-5 p-2 shadow-lg col-lg-6 mx-auto">
          <h2 className="my-2">Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input onBlur={handleOnBlur} type="text" name="name" placeholder="Your Name" />
            </div>
            <div>
              <input onBlur={handleOnBlur} type="email" name="email" placeholder="Email Address" />
            </div>
            <div>
              <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" />
            </div>
            <button className="btn-regular my-2" type="onSubmit"><FontAwesomeIcon icon={faRightLeft} /> Register</button>
          </form>
          <div className="">
            {
              massage && <h6>{massage}</h6>
            }
            <h6>
              Alredy have a account <Link to="/login">Login</Link>
            </h6>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
