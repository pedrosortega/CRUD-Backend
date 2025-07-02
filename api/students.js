const express = require("express");
const router = express.Router();
const Student  = require("../database/seed");

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch(error) {
    res.status(500).json({error: "Failed to fetch tasks"});
  }
});

module.exports = router;
