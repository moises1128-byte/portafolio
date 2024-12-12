"use client";
import React, { useContext, useState } from "react";
import styles from "./navBar.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../assets/images/svg/logo.svg";
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
            className={styles.check}
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
                {/* <div
                  onClick={() => {
                    router.push("/"), setMenuOpen(!menuOpen);
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>HOME</span>
                </div> */}
                <div
                  onClick={() => {
                    document.querySelector("#about").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>ABOUT</span>
                </div>
                <div
                  onClick={() => {
                    document.querySelector("#projects").scrollIntoView({
                      behavior: "smooth",
                      top: 100
                    });
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>PROJECTS</span>
                </div>

                <div
                  onClick={() => {
                    document.querySelector("#contact").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>CONTACT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
