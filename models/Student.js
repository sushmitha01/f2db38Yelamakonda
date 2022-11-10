const mongoose = require("mongoose") 
const StudentSchema = mongoose.Schema({ 
 Name: String, 
 Age: String, 
 Address: Number 
}) 
 
module.exports = mongoose.model("Student", 
StudentSchema) 