import React from "react";
import styles from "../home.module.scss";
import About from "./About";
import Skills from "./Skills";
import Portafolio from "./Portafolio";
import Contact from "./Contact";
import PortafolioStore from "../../../store/portafolio-store";

export default function RightContainer({ toast, newsContent }) {
  const { Translation } = PortafolioStore();

  const content = newsContent[Translation.lenguage];
  const { rightContent } = content;
  return (
    <div id="rightSection" className={styles.rightSection}>
      <About rightContent={rightContent.about} />

      <Skills rightContent={rightContent.skills} />

      <Portafolio rightContent={rightContent.proyects} />

      <Contact
        toast={toast}
        rightContent={rightContent.contact}
        lenguaje={Translation.lenguage}
      />
    </div>
  );
}
