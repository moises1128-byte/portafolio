import React from "react";
import styles from "../home.module.scss";
import About from "./About";
import Skills from "./Skills";
import Service from "./Service";
import Portafolio from "./Portafolio";
import Blog from "./Blog";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Slide_Left from "../../../assets/animation/Slide-Left/page";

export default function RightContainer({ toast }) {
  return (
    <div id="rightSection" className={styles.rightSection}>
      <About />

      <Skills />

      {/* <Slide_Left delay={0.3}>
        <Service />
      </Slide_Left> */}

      <Portafolio />

      {/* <Slide_Left delay={0.3}>
        <Blog />
      </Slide_Left> */}

      {/* <Slide_Left delay={0.3}>
        <Testimonial />
      </Slide_Left> */}

      <Contact toast={toast} />
    </div>
  );
}
