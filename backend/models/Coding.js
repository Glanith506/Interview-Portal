import mongoose from "mongoose";

const codingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"]
  },
  sampleInput: String,
  sampleOutput: String
}, { timestamps: true });

export default mongoose.model("Coding", codingSchema);