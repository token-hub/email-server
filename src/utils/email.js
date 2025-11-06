import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendEmail({ from, subject = "Email from your personal website", text }) {
    try {
        await transporter.sendMail({
            from,
            to: process.env.MY_EMAIL,
            subject,
            text,
        });
    } catch (error) {
        throw error;
    }
}
