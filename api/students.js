const express = require("express");
const router = express.Router();   // // creates a modular router instance ---reusable
const {Campus, Student} = require('../database');

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).send(students);
  } catch(error) {
    res.status(500).json({error: "Failed to fetch student"});
  }
});

//Get students by id
router.get("/:id", async (request, response) => {
  try {
    const student = await Student.findByPk(request.params.id);
    response.status(200).send(student);
    if (!student) {
      return response.status(404).json({error: "Student not found"});
    }
  } catch(error) {
    response.status(500).json({ error: "Failed to fetch student by id"});
  }
});

//Patch a  student by id
router.patch("/:id", async (request, response) => {
  try {
    const student = await Student.findByPk(request.params.id);
    if (!student) {
      return response.status(404).json({error: "Student not found"})
    }
    const updatedStudent = await student.update(request.body);
    response.send(updatedStudent);
  } catch (error) {
    response.status(500).json({ error: "Failed to fetch student"})
  }
})


//Delete a student by id
router.delete("/:id", async (request, response) => {
  try {
    const student = await Student.findByPk(request.params.id);
    if (!student) {
      return response.status(404).json({ error:"student not found"})
    }
    await student.destroy();
    response.status(200).json({ message: "Student deleted successfully" });
  } catch(error) {
    response.status(500).json({error: "Failed to delete a student"})
  }
});

//Create a new student;
router.post("/", async (request, response) => {
  try {
    const student = await Student.create(request.body);
    response.status(201).send(student);
  } catch (error) {
    response.status(500).json({error: "Failed to create a student"})
  }
}) 

module.exports = router;

// 1: Axios call to vercel version of my app
// 2: wait until the axios call completes (await)
//    a: our request goes to our server 
//    b: our server queries the database 
//    c: our database return data to the server 
//    d: our server answres the request with a response
// 3: update state of component with the response.data (data= [task1, task2])
