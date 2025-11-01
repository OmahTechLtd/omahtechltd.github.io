import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config(); // load .env variables

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try {
    const data = await resend.emails.send({
      from: "vera@omahtech.co", // must be a verified domain in Resend
      to: "veraeze18@gmail.com",   // your receiving email
      subject: "Resend Test Email",
      text: "This is a test email from your OmahTech backend integration.",
    });

    console.log("✅ Email sent successfully:", data);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
}

testEmail();