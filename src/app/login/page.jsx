"use client"

// Importing the necessary modules 
import "./login.css"; 
import React from 'react'; 
import axios from "axios";
import styles from "./login.module.css";

// Creating the login component
const Login = () => {
  // Creating a function for handling the login button 
  const handelLogin = () => {
    // Getting the dom elements 
    const emailAddress = document.getElementById("emailAddress"); 
    const password = document.getElementById("password"); 

    // Checking if the email address is filled 
    if (emailAddress.value === "") {
      alert("Email address is required"); 
    }

    // Checking the password 
    else if (password.value === "") {
      alert("Password is required"); 
    }

    else {
      // Getting the login data 
      const loginData = JSON.stringify({
          "emailAddress": emailAddress.value, 
          "password": password.value, 
      }); 

      // Setting the configurations 
      const config = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            "x-auth-token": "null",
        },
      };

      // Setting the remote server ip address 
      const serverIpAddress = `http://localhost:3000/api/login`; 

      // making a post request to the servevr ip address 
      axios.post(serverIpAddress, loginData, config) 
      .then((responseData) => {
        console.dir(responseData); 
      })

    }

  }

  // Rendering the component 
  return (
    <div className={styles.mainDiv}>
      {/* Adding the main div  */}
      <main className={styles.containerDiv}>
        <div className={styles.headerTextDiv}>
          <h2> Login Here </h2>
          <p className={styles.connectWithAFriendText}> Connect with friends today. </p>
        </div>

        <div className={styles.inputFormDiv}> 
          <input id="emailAddress" className={styles.inputForm} type="email" placeholder='Enter your email' />
        </div>

        <div className={styles.inputFormDiv}> 
            <input id="password" className={styles.inputForm} type="password" placeholder='Enter your password' />
        </div>

        <div>
          <button className={styles.loginBtn} onClick={handelLogin}> Login Here </button>
        </div>

        <div className={`${styles.inputFormDiv} ${styles.registerBtnDiv}`}> 
          <button className={`${styles.registerBtn}`} onClick={() => {
            window.location.href = "/register"
          }}> Register </button>
        </div>

      </main>
    </div>
  )
}

export default Login
