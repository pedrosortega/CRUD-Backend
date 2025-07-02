const express = require('express');
const router = express.Router();
const {Campuses} = require('../database');


// Get all campuses
router.get('/', async (request, response) => {
    try{
        const campuses = await Campuses.findAll();
        response.status(200).send(campuses);
    } catch(error) {
        console.log("Failed to fetch all ")
        response.status(500).json({error: "Failed to fetch students"});
    }
});

//Get campuses by id
router.get("/:id")