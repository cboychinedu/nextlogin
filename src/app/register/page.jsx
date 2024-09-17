"use client"

// Importing the necessary modules 
import "./register.css"; 
import React from 'react'; 
import styles from "./register.module.css"; 

// Creating the register component 
const Register = (props) => {
    // Creating a function for handling the register button 
    const handleRegisterBtn = (props) => {
        // Getting the dom elements 
        const fullname = document.getElementById("fullname"); 
        const emailAddress = document.getElementById("emailAddress"); 
        const password = document.getElementById("password"); 


        console.log(password.value); 
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