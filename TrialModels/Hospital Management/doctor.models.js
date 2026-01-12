import mongoose from "mongoose";

const hospitalHours = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
  },
  workingHours: {
    type: Number,
    required: true,
  },
});
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [hospitalHours],
  },
  { timestamp: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
