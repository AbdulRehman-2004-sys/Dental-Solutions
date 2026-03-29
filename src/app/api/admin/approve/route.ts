import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Appointment from "@/models/Appointment";
import nodemailer from "nodemailer";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const status = searchParams.get("status");
    const secret = searchParams.get("secret");

    // Security check
    if (secret !== process.env.ADMIN_SECRET) {
      return new NextResponse("<h1>Unauthorized</h1>", { status: 401, headers: { 'Content-Type': 'text/html' } });
    }

    if (!id || !status) {
      return new NextResponse("<h1>Missing ID or Status</h1>", { status: 400, headers: { 'Content-Type': 'text/html' } });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!appointment) {
      return new NextResponse("<h1>Appointment Not Found</h1>", { status: 404, headers: { 'Content-Type': 'text/html' } });
    }

    // Send email to patient
    await sendPatientEmail(appointment);

    return new NextResponse(`
      <div style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; background-color: #0A192F; color: white; text-align: center;">
        <div style="padding: 40px; border-radius: 30px; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); max-width: 400px;">
          <h1 style="color: ${status === 'Approved' ? '#22c55e' : '#ef4444'}; margin-bottom: 10px;">Action Successful</h1>
          <p style="font-size: 18px; margin-bottom: 20px;">Appointment for <strong>${appointment.name}</strong> has been <strong>${status}</strong>.</p>
          <p style="color: #aaa; font-size: 14px;">The patient has been notified via email.</p>
          <div style="margin-top: 30px;">
            <a href="/" style="color: #0EA5E9; text-decoration: none; font-weight: bold;">← Back to Website</a>
          </div>
        </div>
      </div>
    `, { status: 200, headers: { 'Content-Type': 'text/html' } });

  } catch (error: any) {
    return new NextResponse(`<h1>Error: ${error.message}</h1>`, { status: 500, headers: { 'Content-Type': 'text/html' } });
  }
}

export async function PATCH(req: Request) {
  try {
    await dbConnect();
    const { id, status, secret } = await req.json();

    if (secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!appointment) {
      return NextResponse.json({ success: false, error: "Appointment not found" }, { status: 404 });
    }

    await sendPatientEmail(appointment);

    return NextResponse.json({ success: true, data: appointment });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

async function sendPatientEmail(appointment: any) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const isApproved = appointment.status === "Approved";

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: appointment.email,
    subject: isApproved 
      ? "Appointment Confirmed - LALA MEDICAL COMPLEX" 
      : "Appointment Update - LALA MEDICAL COMPLEX",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 20px;">
        <h2 style="color: #0A192F;">LALA MEDICAL COMPLEX</h2>
        <p>Dear <strong>${appointment.name}</strong>,</p>
        
        ${isApproved ? `
          <p>We are happy to inform you that your appointment has been <strong>Confirmed</strong>.</p>
          <div style="background: #f0fdf4; padding: 15px; border-radius: 10px; border: 1px solid #bbf7d0;">
            <p style="margin: 0;"><strong>Date:</strong> ${appointment.date}</p>
            <p style="margin: 0;"><strong>Time:</strong> ${appointment.time}</p>
            <p style="margin: 0;"><strong>Service:</strong> ${appointment.service}</p>
          </div>
          <p>We look forward to seeing you soon!</p>
        ` : `
          <p>Unfortunately, we are unable to accommodate your requested appointment at <strong>${appointment.date}</strong> at <strong>${appointment.time}</strong>.</p>
          <p>Please feel free to book another time slot or contact us directly at our clinic for further assistance.</p>
        `}
        
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #888;">If you have any questions, please reply to this email or call our clinic.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("Patient email notification failed:", err);
  }
}
