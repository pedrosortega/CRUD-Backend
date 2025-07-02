const express = require("express");      // import express as a express --loads express library
const router = express.Router();        // creates a modular router instance ---reusable
const studentsRouter = require("./students");   // an instance of a router 
const campusesRouter = require("./campuses");


                         //subrouter
//This mounts the studentsRouter under the '/students path'.
router.use("/students", studentsRouter); // All routes inside studentsRouter will be available under /students----> router.use(path, routerModule) 
router.use("/campuses", campusesRouter); // All routes inside studentsRouter will be available under /campuses----> router.use(path, routerModule)


module.exports = router;
