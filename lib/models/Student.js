// models/Student.js
import mongoose from "mongoose";

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  hours: Number
});

module.exports = mongoose.model('Student', studentSchema);
