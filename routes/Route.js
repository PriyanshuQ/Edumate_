const express = require('express');
const courseController = require('../controllers/course-controller');
const router = express.Router();

// add / get courses
router.get('/getcourses', courseController.getAllCourses);
router.post('/addcourse', courseController.addCourse);


module.exports = router;