

"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation"
import styles from './navbar.module.css';

interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
  logo: React.ReactNode;
  buttonText: string;
  onButtonClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, logo, buttonText, onButtonClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathName = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {logo}
      </div>
      <div className={styles.desktopNav}>
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
        <button className={styles.navButton} onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
      <div className={styles.mobileNavToggle}>
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? '✕' : '☰'}
        </button>
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
          <button 
            className={`${styles.navButton} ${styles.mobileNavButton}`} 
            onClick={() => {
              onButtonClick();
              setIsMenuOpen(false);
            }}
          >
            {buttonText}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;