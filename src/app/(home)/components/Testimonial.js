"use client";

import React, { useState } from "react";
import styles from "../home.module.scss";
import Image from "next/image";
import { Testimonials } from "../../../utils/contants/page";

export default function TestimonialContainer() {
  const [value, setValue] = useState(1);

  var max_index = Testimonials.length;
  return (
    <div className={styles.container}>
      <div className={styles.row_reverse}>
        <h2 className={styles.label}>Testimonial</h2>

        <div className={styles.buttonContainer}>
          <div
            className={styles.arrow_box}
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <div style={{ position: "relative", left: 5 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="var(--text-primary)"
                  d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
                />
              </svg>
            </div>
          </div>
          <div
            onClick={() => setValue(value === max_index ? 3 : value + 1)}
            className={styles.arrow_box}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="var(--text-primary)"
                d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {Testimonials.filter((e) => e.id === value).map((e, index) => (
          <React.Fragment key={index}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image
                className={styles.testimonialIcon}
                src={e.img}
                alt="logo"
              />
              <span>{e.name}</span>
            </div>
            <p style={{ marginBlock: 15 }} className={styles.sub_title}>
              {e.description}
            </p>
          </React.Fragment>
        ))}

        <div style={{ display: "flex", gap: 5 }}>
          {Testimonials.map((e, index) => (
            <React.Fragment key={index}>
              <span
                onClick={() => setValue(e.id)}
                className={value === e.id ? styles.dotSelected : styles.dot}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
