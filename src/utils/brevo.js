"use server";

import * as brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

export async function sendEmail(values) {
  try {
    const smtpEmail = new brevo.SendSmtpEmail();
    smtpEmail.subject = `${values.subject}`;
    smtpEmail.to = [
      { email: "1128moisescontact@gmail.com", name: "moises perez" },
    ];
    smtpEmail.htmlContent = `<html><head></head><body><p>Hello,</p>${values.description} - Phone Number: ${values.number} - Email: ${values.email}</p></body></html>`;
    smtpEmail.sender = {
      name: `portafolio - ${values.name}`,
      email: "1128moisescontact@gmail.com",
    };

    await apiInstance.sendTransacEmail(smtpEmail);
    return true;
  } catch (err) {
    console.log(err, "error");
    return false;
  }
}
