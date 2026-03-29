import mongoose, { Schema, model, models } from "mongoose";

const AppointmentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email address"],
    },
    service: {
      type: String,
      required: [true, "Please select a service"],
    },
    date: {
      type: String,
      required: [true, "Please select a date"],
    },
    time: {
      type: String,
      required: [true, "Please select a time"],
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Appointment = models.Appointment || model("Appointment", AppointmentSchema);

export default Appointment;
