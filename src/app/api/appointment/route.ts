import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Appointment from "@/models/Appointment";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, phone, email, service, date, time } = await req.json();

    // Create the appointment in the database
    const appointment = await Appointment.create({
      name,
      phone,
      email,
      service,
      date,
      time,
    });

    // Setup Nodemailer transporter (placeholders for credentials)
    // These will work once the user provides SMTP credentials in .env
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const approveUrl = `${origin}/api/admin/approve?id=${appointment._id}&status=Approved&secret=${process.env.ADMIN_SECRET}`;
    const rejectUrl = `${origin}/api/admin/approve?id=${appointment._id}&status=Rejected&secret=${process.env.ADMIN_SECRET}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.DOCTOR_EMAIL || process.env.EMAIL_USER,
      subject: `New Appointment Request: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 20px; background-color: #fcfcfc;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #0A192F; font-size: 24px; margin-bottom: 5px;">Dental Solutions</h2>
            <p style="color: #0EA5E9; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-top: 5px;">New Appointment Request</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #eee;">
            <p><strong>Patient Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
          </div>

          <div style="display: flex; gap: 15px; justify-content: center; margin-top: 30px;">
            <a href="${approveUrl}" style="background-color: #22c55e; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Approve Request</a>
            <a href="${rejectUrl}" style="background-color: #ef4444; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin-left: 10px;">Reject Request</a>
          </div>

          <hr style="margin-top: 40px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 11px; color: #aaa; text-align: center;">This is an automated notification from the Dental Solutions Web Portal. All actions are securely logged.</p>
        </div>
      `,
    };

    // Attempt to send email (won't fail the response if SMTP is not configured)
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
      }
    } catch (err) {
      console.error("Email notification failed:", err);
    }

    return NextResponse.json({ success: true, data: appointment }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const appointments = await Appointment.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: appointments });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
