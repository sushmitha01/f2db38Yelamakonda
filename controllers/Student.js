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

// VIEWS 
// Handle a show all view 
exports.Student_view_all_Page = async function(req, res) { 
    try{ 
        theStudents = await Student.find(); 
        res.render('Student', { title: 'Student Search Results', results: theStudents }); 
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
exports.Student_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Student(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.Name = req.body.Name; 
    document.Age = req.body.Age; 
    document.Address = req.body.Address; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// Handle Costume delete on DELETE. 
exports.Student_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Student.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Costume update form on PUT. 
exports.Student_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Student update PUT' + req.params.id); 
}; 

exports.Student_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Student.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Costume update form on PUT. 
exports.Student_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Student.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Name)  
               toUpdate.Name = req.body.Name; 
        if(req.body.Age) toUpdate.Age = req.body.Age; 
        if(req.body.Address) toUpdate.Address = req.body.Address; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

 // Handle a show one view with id specified by query 
 exports.Student_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Student.findById( req.query.id) 
        res.render('Studentdetail',  
{ title: 'Student Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 