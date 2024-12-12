"use client";

import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { ThemeContext } from "../assets/theme/page";
import styles from "./styles.module.scss";
import * as data from "../assets/animation/404.json";

export default function NotFound() {
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
      <div className={styles.mainContainer}>
        <div className={styles.lottieStyles} ref={animationRef}></div>

        <h2 className={styles.title}>There was a problem.</h2>

        <p className={styles.text}>
          We could not find the page you were looking for.
        </p>
        <p className={styles.text}>
          Go back to the{" "}
          <Link className={styles.link} href="/">
            Dashboard
          </Link>
        </p>
      </div>
    </main>
  );
}
