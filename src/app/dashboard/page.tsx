"use client";

import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import Navbar from '../components/dashboardNavbar';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();
  const [isComponentRendered, setIsComponentRendered] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Get the token
      const token = localStorage.getItem('x-auth-token');

      // Check if the token is present
      if (!token) {
        router.push('/login');
      } else {
        setIsComponentRendered(true);
      }
    }, 10); 

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {isComponentRendered && (
        <>
          {/* Navbar and protected content */}
          <Navbar />
          <div className={styles.containerDiv}>
            <p>Protected route</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;