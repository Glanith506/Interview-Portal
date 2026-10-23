import express from "express";
import Result from "../models/Result.js";

const router = express.Router();

router.post("/save-result", async (req, res) => {
  try {

    const { userId, module, topic, score, total, percentage, answers } = req.body;

    const result = await Result.create({
      userId,
      module,
      topic,
      score,
      total,
      percentage,
      answers
    });

    res.status(201).json(result);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;