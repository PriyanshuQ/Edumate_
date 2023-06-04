const express = require("express");
const courseController = require("../controllers/course-controller");
const router = express.Router();

const userCntroller = require("../controllers/user-controller")

// add/get courses
router.get("/getcourses", courseController.getAllCourses);
router.post("/addcourse", courseController.addCourse);

// register/login user
router.post("/register",userCntroller.register);
router.post("/login",userCntroller.login);


module.exports = router;
