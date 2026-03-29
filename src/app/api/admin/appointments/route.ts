import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Appointment from "@/models/Appointment";

export async function GET(req: Request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get("secret");

    // Simple security check
    if (secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const appointments = await Appointment.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, count: appointments.length, data: appointments });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
