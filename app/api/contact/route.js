import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const {
      name,
      email,
      mobile,
      address,
      message,
      captchaAnswer,
      captchaExpected,
    } = await req.json();

    // 🔐 CAPTCHA CHECK
    if (Number(captchaAnswer) !== Number(captchaExpected)) {
      return new Response("Invalid captcha", { status: 400 });
    }

    /* ===== SAVE INQUIRY SAFELY ===== */
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "inquiries.json");

    // Ensure data folder exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    // Ensure inquiries.json exists
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]");
    }

    const existing = JSON.parse(fs.readFileSync(filePath, "utf8"));

    existing.unshift({
      name,
      email,
      mobile,
      address,
      message,
      date: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

    /* ===== EMAIL SETUP ===== */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    /* ===== ADMIN EMAIL ===== */
    await transporter.sendMail({
      from: `"Yacht Booking" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Contact Inquiry",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    /* ===== USER ACKNOWLEDGEMENT ===== */
    await transporter.sendMail({
      from: `"Yacht Booking" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting us.</p>
        <p>Our team will get back to you shortly.</p>
        <br/>
        <p>— Yacht Booking Team</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return new Response("Server error", { status: 500 });
  }
}
