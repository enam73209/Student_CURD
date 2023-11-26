const express = require('express');
const router =express.Router();
const StudentController = require('../controllers/StudentController')

//API Routing End Point
router.post('/create-student',StudentController.CreateStudent);
router.get('/all-students',StudentController.GetAllStudents);
router.get('/student-by-id/:id',StudentController.GetStudentsById);
router.get('/delete-student/:id',StudentController.DeleteStudent);
router.post('/update-student/:id',StudentController.UpdateStudent);


module.exports = router;