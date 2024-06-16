const { where, json } = require("sequelize");
const {User, Course, Users_of_course} = require("../models/models");
const sequelize = require("../db");

class User_of_courseController {
    async enter(req, res){
        try {
           const UserId = req.user.id;
           const CourseId = req.params.courseId  
           const enter_course = Users_of_course.create({userId : UserId, courseId : CourseId})
           return res.json({message : "You have entered course"})
        }
        catch (error){
            console.error("Error in entering", error)
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async checkmemb(req, res){
        try {
        const UserId = req.user.id;
        const CourseId = req.params.courseId
        const student = await Users_of_course.findOne({
            where : {
                userId : UserId,
                courseId : CourseId,
            }
        })
        const course = await Course.findOne({
            where: { id: CourseId }
        });
        const coursename = course.course
        if (student) {
            console.log(req.params, req.body, req.user)

            return res.json({message : "You already in course"})
        }
        else {
            return res.json({message : "Ok", courseid : CourseId, name: coursename})
        }}
        catch (error){
            console.error("Error in checkmemb:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }}

module.exports = new User_of_courseController()