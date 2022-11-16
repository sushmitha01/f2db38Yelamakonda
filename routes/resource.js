
 
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Student_controller = require('../controllers/Student'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/Students', Student_controller.Student_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/Students/:id', Student_controller.Student_delete); 
 
// PUT request to update Costume. 
router.put('/Students/:id', Student_controller.Student_update_put); 
 
// GET request for one Costume. 
router.get('/Students/:id', Student_controller.Student_detail); 
 
// GET request for list of all Costume items. 
router.get('/Students', Student_controller.Student_list); 

/* GET detail costume page */ 
router.get('/detail', Student_controller.Student_view_one_Page); 

/* GET create costume page */ 
router.get('/create', Student_controller.Student_create_Page); 

router.get('/update', Student_controller.Student_update_Page); 

/* GET delete costume page */ 
router.get('/delete', Student_controller.Student_delete_Page); 
 
module.exports = router; 