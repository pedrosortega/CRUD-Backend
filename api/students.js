const express = require("express");
const router = express.Router();   // // creates a modular router instance ---reusable
const Student  = require("../database/seed");
const { request } = require("../app");

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
      return res.status(404).json({error: "Student not found"});
    }
    res.send(student);
  } catch(error) {
    res.status(500).json({ error: "Failed to fetch task"});
  }
});

//Patch a task by id
router.patch("/:id", async (request, response) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({error: "Student not found"})
    }
    const updatedStudent = await student.update(req.body);
    res.send(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch task"})
  }
})

module.exports = router;
