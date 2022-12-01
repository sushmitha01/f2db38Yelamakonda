const mongoose = require("mongoose") 
const StudentSchema = mongoose.Schema({ 
 Name: {
    type: String,
    required:[true,"Name required"]
 },
 Age: {
    type: Number,
    min: [18, "Min value is 18"],
    max: [40, "Max value is 40"]
}, 
 Address: String 
}) 
 
module.exports = mongoose.model("Student", 
StudentSchema) 