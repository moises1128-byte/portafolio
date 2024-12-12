import React from "react";
import styles from "../home.module.scss";

export default function AboutContainer() {
  return (
    <div
      id="about"
      style={{ marginTop: 70, scrollMarginTop: 110 }}
      className={styles.container}
    >
      <span className={styles.label}>About Me</span>

      <p className={styles.sub_title}>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  );
}
