import React from "react";
import styles from "../home.module.scss";

export default function AboutContainer({ rightContent }) {
  return (
    <div
      id="about"
      style={{ scrollMarginTop: 110 }}
      className={`${styles.container} ${styles.aboutMargin}`}
    >
      <span className={styles.label}>{rightContent.title}</span>

      <p className={styles.sub_title}>{rightContent.description}</p>
    </div>
  );
}
