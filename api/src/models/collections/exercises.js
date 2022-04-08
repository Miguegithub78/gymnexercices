const { model } = require("mongoose");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


const exerciseSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  rest: {
    type: Number,
    required: true
  }
  
})

module.exports = model("exercise", exerciseSchema);
