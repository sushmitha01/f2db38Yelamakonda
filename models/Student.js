const mongoose = require("mongoose") 
const StudentSchema = mongoose.Schema({ 
 Name: String, 
 Age: Number, 
 Address: String 
}) 
 
module.exports = mongoose.model("Student", 
StudentSchema) 