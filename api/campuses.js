const express = require('express');
const router = express.Router();
const {Campus, Student} = require('../database');
const { request } = require('../app');



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
router.get("/:id", async (request, response) => {
    try {
        const campus = await Campuses.findAll();
        response.status(200).send(campuses);
    } catch(error) {
        console.log("Failed to fetch campus by id")
        response.status(500).json({error: "Failed to fetch campus by id"})
    }
})

//Patch a campus by id
router.patch('/:id', async (request, response) => {
    try {
        const updateCampus = await Campus.update(request.body);
        if (!student) {
            return response.status(404).json({error: "Campus not found"})
        }
        const uddatedCampus = await campus.update(request.body);
        respond.status(200),send(updateCampus)
    } catch(error) {
        response.status(500).json({error: "Failed to fetch task"});
    }
})

//Delete a campus by id
router.delete("/:id", async (request, respons) => {
    try {
        const campus = await 
    } catch(error) {
        console.log("error")
    }
})