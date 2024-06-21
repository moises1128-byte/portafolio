"use client";
import React, { useContext } from "react";
import styles from "./home.module.scss";
import { ToastContainer, toast } from "react-toastify";
import RightContainer from "./components/RightComponent";
import LeftContainer from "./components/LeftComponent";
import { ThemeContext } from "../../assets/theme/page";
import NavBar from "../../components/NavBar/page";

export default function Portafolio() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`App ${theme}`}>
      <div className={styles.main}>
        <ToastContainer />

        <div className={styles.mainContainer}>
          <LeftContainer />

          <RightContainer toast={toast} />
        </div>
      </div>
    </main>
  );
}
