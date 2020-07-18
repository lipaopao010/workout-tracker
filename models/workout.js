const mongoose = require("mongoose");

const opts = { toJSON: { virtuals: true } };

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day:{
        type: Date,
        default:()=> new Date ()
    },
    
    exercises: [
        {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name"
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter exercise duration in minutes"
      },
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
        
      },
      sets: {
        type: Number,
        trim: true,
       
      },
      distance: {
        type: Number,
        trim: true,
        
      },
    }], 
  },
  opts
  );

  WorkoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((totalduration, exercises) => totalduration + exercises.duration,0)
    
  });
 
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;