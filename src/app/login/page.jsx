"use client"

// Importing the necessary modules 
import "./login.css"; 
import React from 'react'; 
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.mainDiv}>
      {/* Adding the main div  */}
      <main className={styles.containerDiv}>
        <div className="headerTextDiv">
          <h2> Login Here </h2>
          <p> Connect with friends today. </p>
        </div>

      </main>
    </div>
  )
}

export default Login
