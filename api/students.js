const express = require("express");
const router = express.Router();
const { Duck } = require("../database");

// GET all students
router.get("/", async (req, res) => {
  try {
    
  } catch(error) {
    console.log("failed to fetch all users", error)
  }
  res.sendStatus(501);
});

module.exports = router;
