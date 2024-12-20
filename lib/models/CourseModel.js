// models/Student.js
import mongoose from "mongoose";


const Schema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  }, 
  description:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  }, 
  author:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  }, 
  authorImg:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }, 
  
})

const CourseModel = mongoose.models.course || mongoose.model('course',Schema);

export default CourseModel;