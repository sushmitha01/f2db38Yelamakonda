var Student = require('../models/Student'); 
 
// List of all Student 
exports.Student_list = async function(req, res) { 
    try{ 
        theStudents = await Student.find(); 
        res.send(theStudents); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific Student. 
exports.Student_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Student detail: ' + req.params.id); 
}; 
 
// Handle Student create on POST. 
exports.Student_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Student create POST'); 
}; 
 
// Handle Student delete form on DELETE. 
exports.Student_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Student delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.Student_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Student update PUT' + req.params.id); 
}; 