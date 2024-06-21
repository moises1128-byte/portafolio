import React from "react";
import styles from "../home.module.scss";
import { Services } from "../../../utils/contants/page";

export default function ServicesContainer() {
  return (
    <div className={styles.container}>
      <h2 className={styles.label}>My Services</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {Services.map((e, index) => (
          <div key={index} className={styles.skill_text}>
            <span>• {e.name}</span>
            <span className={styles.arrow}>→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
