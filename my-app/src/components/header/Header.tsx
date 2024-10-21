/*"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation"
import styles from './header.module.css';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Project', href: '/project' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathName = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">Logo</Link>
          </div>
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${
                  (pathName === item.href && hoveredItem === null) || hoveredItem === item.href
                    ? styles.active
                    : ''
                }`}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className={styles.mobileNavToggle}>
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.mobileNavLink} ${
                pathName === item.href ? styles.active : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

    </header>
  );
};

export default Header;*/



"use client"

import React from 'react';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import styles from './header.module.css';
import Image from 'next/image';

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
      <div className={styles.container}>
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
      </div>
    </header>
  );
};

export default Header;