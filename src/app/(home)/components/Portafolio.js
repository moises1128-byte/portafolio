import React, { useState } from "react";
import styles from "../home.module.scss";

export default function PortafolioContainer({ rightContent }) {
  const [selection, setSelection] = useState(null);

  return (
    <div
      id="projects"
      className={styles.container}
      style={{ scrollMarginTop: 100 }}
    >
      <h2 className={styles.label}>{rightContent.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {rightContent.Services.map((e, index) => (
          <>
            <div
              key={index}
              className={
                e.id === selection
                  ? styles.skill_text_Selected
                  : styles.skill_text
              }
              onClick={() =>
                selection === e.id ? setSelection(null) : setSelection(e.id)
              }
            >
              <span>• {e.name}</span>
              <span className={styles.arrow}>→</span>
            </div>

            {selection === e.id && (
              <p className={styles.description_text}>{e.description}</p>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
