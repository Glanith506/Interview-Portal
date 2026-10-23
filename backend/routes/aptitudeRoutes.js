import express from "express";
import Aptitude from "../models/Aptitude.js";

const router = express.Router();

// Get questions by topic
router.get("/:topic", async (req, res) => {
  try {
    const questions = await Aptitude.find({ topic: req.params.topic });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add question
router.post("/add", async (req, res) => {
  try {
    const newQuestion = await Aptitude.create(req.body);
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;