"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  // HONEYPOT KONTROLÜ: Botları engellemek için eklendi.
  // Eğer bu alan dolmuşsa, işlemi mail atmadan başarılı gibi sonlandırır.
  const botCheck = formData.get("aon_honeypot");
  if (botCheck) {
    return { success: true }; 
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 465,
    secure: true, 
    auth: {
      user: "info@aoncreative.de",
      pass: process.env.IONOS_PASS || "oz1988.naZ" ,
    },
    tls: {
      rejectUnauthorized: false // Sertifika hatalarını bypass eder
    }
  });

  try {
    // 1. ADIM: SİZE GELEN BİLDİRİM MAİLİ (AJANS İÇİN)
    await transporter.sendMail({
      from: `"AON Web-Kontakt" <info@aoncreative.de>`,
      to: "info@aoncreative.de",
      replyTo: email,
      subject: `🚀 Neue Projektanfrage: ${service} - ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; color: #1C443C; background-color: #E7E2C8; border-radius: 20px;">
          <h2 style="color: #F15A24; text-transform: uppercase;">Neue Anfrage erhalten</h2>
          <hr style="border: 0; border-top: 1px solid #1C443C; opacity: 0.1;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Gewünschte Leistung:</strong> ${service}</p>
          <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 15px; border: 1px solid #1C443C10;">
            <p><strong>Nachricht:</strong></p>
            <p style="line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    // 2. ADIM: MÜŞTERİYE GİDEN OTOMATİK ONAY MAİLİ (NAZİK VE PROFESYONEL)
    await transporter.sendMail({
      from: `"AON Creative" <info@aoncreative.de>`,
      to: email,
      subject: `Eingangsbestätigung: Ihre Anfrage bei AON Creative`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; color: #1C443C; background-color: #FDFCF7; padding: 40px; border-radius: 30px; border: 1px solid #E7E2C8;">
          <h1 style="color: #F15A24; font-size: 22px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Vielen Dank für Ihre Nachricht!</h1>
          
          <p style="font-size: 16px; line-height: 1.6; margin-top: 20px;">
            Hallo ${name},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6;">
            vielen Dank für Ihr Interesse an AON Creative. Wir haben Ihre Anfrage zum Thema <strong>${service}</strong> erfolgreich erhalten.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Unser <strong>technisches Team</strong> wurde bereits informiert und wird Ihre Anforderungen detailliert prüfen. Wir legen Wert auf Qualität und Sorgfalt, daher werden wir uns <strong>so schnell wie möglich</strong> – in der Regel innerhalb der nächsten 24 Stunden – mit einem ersten Feedback oder Terminvorschlag bei Ihnen melden.
          </p>
          
          <div style="margin: 30px 0; padding: 20px; background-color: #E7E2C8; border-radius: 15px; border-left: 5px solid #F15A24;">
            <p style="margin: 0; font-size: 12px; text-transform: uppercase; font-weight: bold; opacity: 0.6;">Ihre übermittelten Details:</p>
            <p style="font-style: italic; color: #1C443C; margin-top: 10px; line-height: 1.5;">"${message}"</p>
          </div>

          <p style="font-size: 16px; margin-top: 40px;">
            Wir freuen uns darauf, potenziell gemeinsam an Ihrem Projekt zu arbeiten.
          </p>

          <p style="font-size: 16px; margin-top: 20px;">
            Mit freundlichen Grüßen,<br />
            <strong style="color: #F15A24;">Ihr AON Creative Team</strong>
          </p>
          
          <hr style="border: 0; border-top: 1px solid #1C443C; opacity: 0.1; margin-top: 30px;" />
          <p style="font-size: 9px; opacity: 0.4; text-align: center; letter-spacing: 2px; text-transform: uppercase;">
            AON CREATIVE • Engineering Aesthetics • Ettlingen, Germany
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Mail Error:", error);
    return { success: false };
  }
}