"use client"

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
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
  );
}
