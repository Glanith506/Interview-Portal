import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  module: String,   // Aptitude / Coding / General
  topic: String,    // probability / speed / permutations

  score: Number,
  total: Number,
  percentage: Number,

  answers: Object   // store submitted answers
},
{ timestamps: true }
);

const Result = mongoose.model("Result", resultSchema);

export default Result;