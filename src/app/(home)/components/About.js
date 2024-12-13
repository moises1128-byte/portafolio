import React from "react";
import styles from "../home.module.scss";

export default function AboutContainer({ rightContent }) {
  return (
    <div
      id="about"
      style={{ marginTop: 70, scrollMarginTop: 110 }}
      className={styles.container}
    >
      <span className={styles.label}>{rightContent.title}</span>

      <p className={styles.sub_title}>{rightContent.description}</p>
    </div>
  );
}
