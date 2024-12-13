import React from "react";
import styles from "../home.module.scss";
import Image from "next/image";
import { Skills, Second_Skills } from "../../../utils/contants/page";

export default function SkillsContainer({ rightContent }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.label}>{rightContent.title}</h2>

      <div className={styles.line} />

      <h3 className={styles.sub_label}>{rightContent.Subtitle}</h3>

      <div className={styles.imageContainerPrimary}>
        {Skills.map((e, index) => (
          <React.Fragment key={index}>
            <div className={styles.container}>
              <div className={styles.information}>
                <Image
                  className={styles.primarySkillsImage}
                  src={e.img}
                  alt="icon"
                />
                <span className={styles.informationText}>{e.name}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <h3 className={styles.sub_label}>{rightContent.FooterTitle}</h3>

      <div className={styles.imageContainerPrimary}>
        {Second_Skills.map((e, index) => (
          <React.Fragment key={index}>
            <div className={styles.container}>
              <div className={styles.information}>
                <Image
                  className={styles.secondarySkillsImage}
                  src={e.img}
                  alt="icon"
                />
                <span style={{ top: 40 }} className={styles.informationText}>
                  {e.name}
                </span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
