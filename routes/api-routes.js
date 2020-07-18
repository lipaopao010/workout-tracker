const express = require('express');
const db  = require('../models');
const mongojs = require("mongojs");


const router = express.Router();

// get all the data from workout database
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(allworkouts => {
        res.json(allworkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });


//add exercise to current workout

router.put('/api/workouts/:id',(req,res)=>{
  console.log("hello")
  db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body} }, { new: true })
    
    .then(UpdatedWorkout => {
      console.log(UpdatedWorkout);
      res.json(UpdatedWorkout);
      })
      .catch(err => {
        res.json(err);
      })
    }
)
// create new workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(newWorkout => {
      res.json(newWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(allworkouts => {
        res.json(allworkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router