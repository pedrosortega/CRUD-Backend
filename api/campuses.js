const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database");
const { response } = require("../app");
// const { request } = require('../app');

// Get all campuses
router.get("/", async (request, response) => {
  try {
    const campuses = await Campus.findAll();
    response.status(200).send(campuses);
  } catch (error) {
    console.log("Failed to fetch all ");
    response.status(500).json({ error: "Failed to fetch students" });
  }
});

//Get campuses by id
router.get("/:id", async (request, response) => {
  try {
    const campus = await Campus.findByPk(request.params.id);
    response.status(200).send(campus);
    if (!campus) {
      return res.status(404).json({ error: "Campus not found" });
    }
  } catch (error) {
    console.log("Failed to fetch campus by id");
    response.status(500).json({ error: "Failed to fetch campus by id" });
  }
});

//Patch a campus by id
router.patch("/:id", async (request, response) => {
  try {
    const campus = await Campus.findByPk(request.params.id);
    if (!campus) {
      return response.status(404).json({ error: "Campus not found" });
    }
    const updatedCampus = await campus.update(request.body);
    response.send(updatedCampus);
  } catch (error) {
    response.status(500).json({ error: "Failed to fetch campus" });
  }
});

// Delete a campus by id
router.delete("/:id", async (request, response) => {
  try {
    const campus = await Campus.findByPk(request.params.id);
    if (!campus) {
      return response.status(404).json({ error: "Campus not found" });
    }
    await campus.destroy();
    response.status(200).json({ message: "Campus deleted successfully" });
  } catch (error) {
    response.status(500).json({ error: "Failed to fetch a campus" });
  }
});

//Create a campus
router.post("/", async (req, res) => {
  try {
    const campus = await Campus.create(req.body);
    res.status(201).send(campus);
  } catch (error) {
    res.status(500).json({ error: "Falied to create campus" });
  }
});

module.exports = router;
