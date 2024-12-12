"use client";

import React from "react";
import styles from "../home.module.scss";
import Image from "next/image";
import Profile from "../../../assets/images/png/program-4.png";
import Github from "../../../assets/images/svg/GitHub.svg";
import Linkedin from "../../../assets/images/svg/Linkedin.svg";

export default function LeftContainer() {
  return (
    <section className={styles.leftSection}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={Profile} alt="User_logo" />
        <div className={styles.overlay}>
          <span className={styles.text}>Hello World</span>
        </div>
      </div>
      <span className={styles.title}>
        {`Hi i'm`}{" "}
        <span style={{ color: "var(--text-primary)" }}>Moises Perez</span>{" "}
        Sofware Engineer.
      </span>
      <p className={styles.sub_title}>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <div className={styles.leftBottomSection}>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1CFXetyFJbwqlpuiqNGH25S9j0JlxvvPM8jlcxbC4xH4/edit?usp=sharing"
            )
          }
          className={styles.icon_box}
        >
          <span
            style={{ color: "var(--text-primary)" }}
            // className="no-underline text-[var(--text-primary)]"
          >
            Donwload my CV
          </span>
        </button>
        <button
          className={styles.icon_box}
          style={{ color: "var(--text-primary)" }}
          onClick={() => (window.location.href = "#contact")}
        >
          Hire me
        </button>
      </div>

      <div className={styles.leftContainerImages}>
        <div
          style={{ display: "flex", gap: "20px" }}
          className="flex gap-[20px]"
        >
          <Image
            onClick={() => window.open("https://github.com/moises1128-byte")}
            src={Github}
            alt="contact_icons"
            className={styles.icons}
          />
          <Image
            onClick={() => window.open("www.linkedin.com/in/moises-perez-dev")}
            src={Linkedin}
            alt="contact_icons"
            className={styles.icons}
          />
        </div>
      </div>
    </section>
  );
}
