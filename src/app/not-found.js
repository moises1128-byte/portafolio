"use client";

import { useContext } from "react";
import Link from "next/link";
import NotFoundAnimation from "../assets/animation/404.json";
import Lottie from "lottie-react";
import { ThemeContext } from "../assets/theme/page";
import styles from "./styles.module.scss";

export default function NotFound() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`App ${theme}`}>
      <div className={styles.mainContainer}>
        <Lottie
          className={styles.lottieStyles}
          animationData={NotFoundAnimation}
          loop={true}
        />
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

