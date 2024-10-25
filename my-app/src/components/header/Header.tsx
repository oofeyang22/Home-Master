
"use client"

import React from 'react';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import styles from './header.module.css';
import Image from 'next/image';
import { motion } from "framer-motion";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Project', href: '/project' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

const Header = () => {
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log('Button clicked');
  };

  return (
    <header className={styles.header}>
      <motion.div className={styles.container}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar 
          navItems={navItems} 
          logo={<Link href="/">Home Masters</Link>}
          buttonText="Get a Quote"
          onButtonClick={handleButtonClick}
        />
        <div className={styles.textWrapper}>
          <div className={styles.textContainer}>
            <p className={styles.fast}>Fast and efficient service</p>
            <p className={styles.heroText}>Your Trusted Partner for Home Clean Solutions</p>
            <p className={styles.pride}>We take pride in our attention to detail and commitment to customer satisfaction.</p>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Request service</button>
              <div className={styles.link}><Link href="/services">Discover More</Link></div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image src="/woman1.png" alt="woman" width={700} height={500}/>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;