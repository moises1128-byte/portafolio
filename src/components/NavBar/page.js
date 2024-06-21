"use client";
import React, { useContext, useState } from "react";
import styles from "./navBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../../assets/images/svg/logo.svg";
import { motion } from "framer-motion";
import { ThemeContext } from "../../assets/theme/page";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={`App ${theme}`}>
      <nav
        className={`${styles.navbar} ${menuOpen ? styles.open : styles.closed}`}
      >
        <div className={styles.navbar_container}>
          <input
            type="checkbox"
            checked={menuOpen}
            onChange={handleMenuToggle}
            id="menu-toggle"
          />
          <label htmlFor="menu-toggle" className={styles.hamburger_lines}>
            <span className={`${styles.line} ${styles.line1}`}></span>
            <span className={`${styles.line} ${styles.line2}`}></span>
            <span className={`${styles.line} ${styles.line3}`}></span>
          </label>
          <div className={styles.menu_items}>
            <div className={styles.row_reverse}>
              <Image
                onClick={() => router.push("/")}
                className={styles.logo}
                alt="Logo_icon"
                src={Logo}
              />
              <div className={styles.item_container}>
                <div
                  onClick={() => {
                    router.push("/"), setMenuOpen(!menuOpen);
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>HOME</span>
                </div>
                <div
                  onClick={() => {
                    router.push("/about"), setMenuOpen(!menuOpen);
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>ABOUT</span>
                </div>
                <div
                  onClick={() => {
                    router.push("/portafolio"), setMenuOpen(!menuOpen);
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>PORTFOLIO</span>
                </div>

                <div
                  onClick={() => {
                    router.push("/loader"), setMenuOpen(!menuOpen);
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>LOADER</span>
                </div>

                <div
                  onClick={() => {
                    router.push("/timeline"), setMenuOpen(!menuOpen);
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>TIMELINE</span>
                </div>

                <div
                  onClick={() => {
                    router.push("/contact"), setMenuOpen(!menuOpen);
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>CONTACT</span>
                </div>

                <motion.div
                  onClick={() => {
                    router.push("/login"), setMenuOpen(!menuOpen);
                  }}
                  className={`${styles.nav_button} ${styles.nav_link}`}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <span>LOGIN</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line} />
      </nav>
    </header>
  );
}
