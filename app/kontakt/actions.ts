"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const service = formData.get("service");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 587,
    secure: false, // 587 için false olmalı
    auth: {
      user: "info@aoncreative.de",
      pass: process.env.IONOS_PASS || "oz1988.naZ",
    },
    tls: {
      rejectUnauthorized: false // Sertifika sorunlarını bypass etmek için
    }
  });

  try {
    await transporter.sendMail({
      from: `"AON Web-Kontakt" <info@aoncreative.de>`, // IONOS üzerinden gönderirken 'from' adresi 'user' ile aynı olmalıdır
      to: "info@aoncreative.de", // Mesajın size geleceği adres
      replyTo: email as string,     // Müşteriye yanıt vermek isterseniz bu adresi kullanır
      subject: `Projektanfrage: ${service} - ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1C443C; background-color: #E7E2C8;">
          <h2 style="color: #F15A24;">Neue Anfrage erhalten</h2>
          <hr style="border: 0; border-top: 1px solid #1C443C; opacity: 0.1;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Leistung:</strong> ${service}</p>
          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 10px;">
            <p><strong>Nachricht:</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("IONOS Mail Hatası:", error);
    return { success: false };
  }
}