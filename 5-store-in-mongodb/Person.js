const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Person = mongoose.model("person", personSchema);

//example
// const  = new mongoose.Schema ({
//   name: String
// });

exports.default =  Person;
