"use client"

// Importing the necessary modules 
import "./register.css"; 
import React from 'react'; 
import axios from "axios";
import styles from "./register.module.css"; 

// Creating the register component 
const Register = (props) => {
    // Creating a function for handling the register button 
    const handleRegisterBtn = () => {
        // Getting the dom elements 
        const fullname = document.getElementById("fullname"); 
        const emailAddress = document.getElementById("emailAddress"); 
        const password = document.getElementById("password"); 

        // Checking if the fullname is filled 
        if (fullname.value === "") {
            alert("Fullname required."); 
        }

        else if (emailAddress.value === "") {
            alert("Email address required"); 
        }

        else if (password.value === "") {
            alert("Password required"); 
        }

        else {
            // Getting the user data 
            const userData = JSON.stringify({
                "fullname": fullname.value, 
                "emailAddress": emailAddress.value, 
                "password": password.value, 
            }); 

            // Setting the headers configurations 
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
            const serverIpAddress = `http://localhost:3000/api/register`; 

            // Making a post request to the server ip address 
            axios.post(serverIpAddress, userData, config)
            .then((responseData) => {
                console.dir(responseData); 
            })
        }

    }

    // Rendering the register component 
    return(
        <div className={styles.mainDiv}> 
            {/* Adding the container div */}
            <main className={styles.containerDiv}>
                <div className={styles.headerTextDiv}> 
                    <h2> Create a new account </h2>
                    <p className={styles.connectWithAFriendText}> Connect with friends today. </p>
                </div>

                <div className={styles.enterYouFullnameDiv}> 
                    <input id="fullname" className={styles.inputForm} type="text" placeholder='Enter your fullname' />
                </div>

                <div className={styles.inputFormDiv}> 
                    <input id="emailAddress" className={styles.inputForm} type="email" placeholder='Enter your email' />
                </div>

                <div className={styles.inputFormDiv}> 
                    <input id="password" className={styles.inputForm} type="password" placeholder='Enter your password' />
                </div>

                <div className={`${styles.inputFormDiv} ${styles.registerBtnDiv}`}> 
                    <button className={`${styles.registerBtn}`} onClick={handleRegisterBtn}> Register </button>
                </div>

                <div className={styles.inputFormDiv}> 
                    <button className={styles.loginBtn} onClick={() => {
                        window.location.href = "/login"
                    }}> Login </button>
                </div>



            </main>
        </div>
    )
}


// Exporting the register component 
export default Register 