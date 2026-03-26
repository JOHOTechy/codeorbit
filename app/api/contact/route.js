import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, course, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use an App Password for Gmail
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Enrollment Inquiry: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Interested Course: ${course}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #db2777;">New Student Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Interested Course:</strong> ${course}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p style="font-size: 12px; color: #777;">Inquiry from CodeOrbit Website</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
