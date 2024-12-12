"use client";

import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../assets/theme/page";
import styles from "../styles.module.scss";
import * as data from "../../assets/animation/loading.json";

export default function Loading() {
  const { theme } = useContext(ThemeContext);

  let animationRef = useRef(null);

  useEffect(() => {
    const getLottie = async () => {
      const lot = await import("lottie-web");
      lot.default.loadAnimation({
        autoplay: true,
        loop: true,
        animationData: data,
        container: animationRef.current,
      });
    };

    getLottie();
  }, []);

  return (
    <main className={`App ${theme}`}>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingLottieStyle} ref={animationRef}></div>
      </div>
    </main>
  );
}
