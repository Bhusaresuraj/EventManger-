import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/"></Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/payment">Payment</Link></li>
        <li><Link href="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 