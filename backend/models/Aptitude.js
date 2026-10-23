import mongoose from "mongoose";

const aptitudeSchema = new mongoose.Schema(
{
  topic: String,
  question: String,
  options: {
    A: String,
    B: String,
    C: String,
    D: String
  },
  answer: String
},
{ timestamps: true }
);

const Aptitude = mongoose.model("Aptitude", aptitudeSchema);

export default Aptitude;