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

//Get students by id
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({error: "Student not find all"});
    }
    res.send(student);
  } catch(error) {
    res.status(500).json({ error: "Failed to fetch task"});
  }
})

module.exports = router;
