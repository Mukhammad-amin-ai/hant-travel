"use server";

import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req, res) {
  try {
    const { user_name, user_location, user_city, user_email, user_phone } =
      await req.json();
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: "aminahmadov123@gmail.com",
        pass: "xsmtpsib-a7b4c92167974fdb50fa342e4a83f276ea7d8b2bb4b0e94581cc171376d641d0-29ULaZGTzSOXk1cR",
      },
    });
    const mailOptions = {
      from: user_email,
      to: "aminahmadov123@gmail.com",
      subject: "Sending email through SMTP",
      text: `
            User Name:${user_name}
            User Location:${user_location}
            User City:${user_city}
            User email:${user_email}
            User phone number:${user_phone}
            `,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return NextResponse.json({
      success: true,
      message: "Your free trial request has been sent ",
    });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      {
        success: false,
        message: "Internal server error,please try again",
      },
      { status: 500 }
    );
  }
}
