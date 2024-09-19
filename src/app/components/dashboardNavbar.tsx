"use client";

// Importing the necessary modules 
import React from 'react'; 
import styles from "./css/dashboard.module.css"; 
import Link from 'next/link';

// Creating the functional component 
const Navbar = (props:any) => {
    // Creating a function for logging out the user 
    const logoutUser = (event:any) => {
        // Clearing the local storage 
        localStorage.clear(); 

        // Redirecting the user to the login page 
        setInterval(() => {
            window.location.href = "/login"; 
        }, 1000); 
    }

    // Return the jsx 
    return(
        <div> 
            {/* Adding the navbar */}
            <nav className={styles.mainNav}>
                {/* Adding the navbar container */}
                <div className={styles.navContainerDiv}>
                    <nav className={styles.leftNav}>
                        <Link href="/"> Home </Link>
                        <Link href="#"> About </Link>
                        <Link href="#"> ContactUs</Link>
                        <Link href="#" onClick={logoutUser}> Logout </Link> 

                    </nav>

                    {/* Adding the right navbar */}
                    <nav className={styles.rightNav}>
                        <div>
                            <input className={styles.searchInputForm} type="search" placeholder='Search Contact...' /> 
                        </div>

                        <div>
                            <button className={styles.submitButton} id="submitButton"type="submit" >Submit</button>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

// 
export default Navbar; 