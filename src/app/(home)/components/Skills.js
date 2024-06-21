import React from "react";
import styles from "../home.module.scss";
import Image from "next/image";
import { Skills, Second_Skills } from "../../../utils/contants/page";

export default function SkillsContainer() {
  return (
    <div className={styles.container}>
      <h2 className={styles.label}>My Skills</h2>

      <div className={styles.line} />

      <h3 className={styles.sub_label}>Primary Skill on</h3>

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

      <h3 className={styles.sub_label}>Second Skills on</h3>

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
