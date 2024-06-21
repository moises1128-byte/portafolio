"use client";
import React from "react";
import styles from "../home.module.scss";
import { Field, Formik } from "formik";
import * as Yup from "yup";

export default function ContactContainer({ toast }) {
  const emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    number: Yup.number(),
    email: Yup.string()
      .matches(emailRegExp, "Invaild email")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div
      id="contact"
      style={{ paddingBottom: 40 }}
      className={styles.container}
    >
      <h2 className={styles.label}>Contact With Me</h2>
      <div className={styles.line} />
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Formik
          initialValues={{
            email: "",
            name: "",
            number: "",
            subject: "",
            description: "",
          }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            toast.success("Information sent successfully");
            console.log(values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <>
              <div className={styles.contactContainer}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    width: "100%",
                  }}
                >
                  <span style={{ color: "var(--text-tertiary)" }}>
                    YOUR NAME
                  </span>

                  <Field type="text" name="name" className={styles.field} />

                  {errors.name && touched.name ? (
                    <span className="inputError">{errors.name}</span>
                  ) : null}
                </div>
                <div className={styles.col}>
                  <span style={{ color: "var(--text-tertiary)" }}>
                    PHONE NUMBER
                  </span>

                  <Field type="text" name="number" className={styles.field} />

                  {errors.number && touched.number ? (
                    <span className="inputError">{errors.number}</span>
                  ) : null}
                </div>
              </div>

              <div className={styles.col}>
                <span style={{ color: "var(--text-tertiary)" }}>EMAIL</span>
                <Field type="text" name="email" className={styles.field} />

                {errors.email && touched.email ? (
                  <span className="inputError">{errors.email}</span>
                ) : null}
              </div>

              <div className={styles.col}>
                <span style={{ color: "var(--text-tertiary)" }}>SUBJECT</span>
                <Field type="text" name="subject" className={styles.field} />

                {errors.subject && touched.subject ? (
                  <span className="inputError">{errors.subject}</span>
                ) : null}
              </div>

              <div className={styles.col}>
                <span style={{ color: "var(--text-tertiary)" }}>
                  YOUR MESSAGE
                </span>

                <Field
                  type="text"
                  name="description"
                  className={styles.field}
                  as="textarea"
                  rows="5"
                />

                {errors.description && touched.description ? (
                  <span className="inputError">{errors.description}</span>
                ) : null}
              </div>
              <div
                onClick={handleSubmit}
                className={`${styles.arrow_box} ${styles.submitContainer}`}
              >
                Send Mesagge
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}
