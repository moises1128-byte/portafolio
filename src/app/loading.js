"use client";

import React, { useContext } from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../assets/animation/loading.json";
import { ThemeContext } from "../assets/theme/page";
import styles from "./styles.module.scss";

export default function Loading() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`App ${theme}`}>
      <div className={styles.loadingContainer}>
        <Lottie
          className={styles.loadingLottieStyle}
          animationData={LoadingAnimation}
          loop={true}
        />
      </div>
    </main>
  );
}
