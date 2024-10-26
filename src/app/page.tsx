"use client"

// Importing the necessary modules 
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

// Creating the home function component 
const Home = () => {
  // Setting the state 
  const router = useRouter(); 
  const [isComponentRendered, setIsComponentRendered] = useState(false);
  
  // Using use effect 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Get the token 
      const token = localStorage.getItem("x-auth-token"); 

      // Check if the token is present 
      if (token) {
        router.push('/dashboard'); 
      }

      else {
        setIsComponentRendered(true); 
      }
    }, 10); 

    // Return and clear the timeout 
    return () => clearTimeout(timeoutId); 
  }, []); 

  // Returning the component 
  return (
    // creating the main div 
    <div>
      {isComponentRendered && (
        <>
          <main className={styles.mainDiv}>
            <div> 
              <h1> Welcome, click on the following link to register </h1>

              <div className={styles.container}> 
                <button onClick={() => {
                  window.location.href = "/register"
                }} className={styles.registerBtn}> Register </button>
                <button onClick={() => {
                  window.location.href = "/login"
                }} className={styles.loginBtn}> Login </button>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}


// Exporting the home component 
export default Home; 