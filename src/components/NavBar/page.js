"use client";
import React, { useContext, useState } from "react";
import styles from "./navBar.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../assets/images/svg/logo.svg";
import Translations from "../../assets/images/svg/translation.svg";
import { ThemeContext } from "../../assets/theme/page";
import PortafolioStore from "../../store/portafolio-store";

export default function NavBar({ newsContent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const { updateTranslation, Translation } = PortafolioStore();

  const content = newsContent[Translation.lenguage];

  const { navBar } = content;

  return (
    <header className={`App ${theme}`}>
      <nav className={styles.navbar}>
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
                  <span>{navBar.about}</span>
                </div>
                <div
                  onClick={() => {
                    document.querySelector("#projects").scrollIntoView({
                      behavior: "smooth",
                      top: 100,
                    });
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>{navBar.projects}</span>
                </div>

                <div
                  onClick={() => {
                    document.querySelector("#contact").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={`${styles.navButtons} ${styles.nav_link}`}
                >
                  <span>{navBar.contact}</span>
                </div>

                <div className={styles.imageContainer}>
                  <Image
                    onClick={toggleDropdown}
                    className={styles.imageLogo}
                    alt="Logo_icon"
                    src={Translations}
                  />
                  {dropdownVisible && (
                    <div className={styles.dropdown}>
                      <ul>
                        <li
                          style={{ color: "#373839" }}
                          onClick={() => updateTranslation("lenguage", "es-ES")}
                        >
                          ES
                        </li>
                        <li
                          style={{ color: "#373839" }}
                          onClick={() => updateTranslation("lenguage", "en-US")}
                        >
                          EN
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
