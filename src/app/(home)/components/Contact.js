"use client";
import React from "react";
import styles from "../home.module.scss";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { sendEmail } from "@/utils/brevo";

export default function ContactContainer({ toast, rightContent, lenguaje }) {
  const emailRegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const schemaEnglish = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    number: Yup.number(),
    email: Yup.string()
      .matches(emailRegExp, "Invaild email")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    description: Yup.string().required("Description is required"),
  });

  const schema = Yup.object().shape({
    name: Yup.string().required("Nombre es Requerido"),
    number: Yup.number(),
    email: Yup.string()
      .matches(emailRegExp, "Email Invalido")
      .required("Email es Reqerido"),
    subject: Yup.string().required("Asunto es Requerido"),
    description: Yup.string().required("Mensaje Requerido"),
  });

  const handelEmail = async (values, toast, resetForm) => {
    const success = await sendEmail(values);

    if (success) {
      toast.success("Email sent successfully");
      resetForm();
    } else {
      toast.error("Error sending email");
    }
  };

  return (
    <div
      id="contact"
      style={{ paddingBottom: 40 }}
      className={styles.container}
    >
      <h2 className={styles.label}>{rightContent.title}</h2>
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
          validationSchema={lenguaje === "en-US" ? schemaEnglish : schema}
          onSubmit={(values, { resetForm }) => {
            handelEmail(values, toast, resetForm);
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
                    {rightContent.formikName}
                  </span>

                  <Field type="text" name="name" className={styles.field} />

                  {errors.name && touched.name ? (
                    <span className="inputError">{errors.name}</span>
                  ) : null}
                </div>
                <div className={styles.col}>
                  <span style={{ color: "var(--text-tertiary)" }}>
                    {rightContent.formikPhone}
                  </span>

                  <Field type="text" name="number" className={styles.field} />

                  {errors.number && touched.number ? (
                    <span className="inputError">{errors.number}</span>
                  ) : null}
                </div>
              </div>

              <div className={styles.col}>
                <span style={{ color: "var(--text-tertiary)" }}>
                  {rightContent.formikEmail}
                </span>
                <Field type="text" name="email" className={styles.field} />

                {errors.email && touched.email ? (
                  <span className="inputError">{errors.email}</span>
                ) : null}
              </div>

              <div className={styles.col}>
                <span style={{ color: "var(--text-tertiary)" }}>
                  {" "}
                  {rightContent.formikSubject}
                </span>
                <Field type="text" name="subject" className={styles.field} />

                {errors.subject && touched.subject ? (
                  <span className="inputError">{errors.subject}</span>
                ) : null}
              </div>

              <div className={styles.col}>
                <span style={{ color: "var(--text-tertiary)" }}>
                  {rightContent.formikMessage}
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
                {rightContent.formikButton}
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}
