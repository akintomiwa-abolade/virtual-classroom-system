const Classroom = require("../middlewares/models/").Classroom;
const Student = require("../middlewares/models/").Student;
const Lecturer = require("../middlewares/models/").Lecturer;
const Course = require("../middlewares/models/").Course;
const con = require('../config/database.js');

class DeveloperController{

 // Welcome message
    static welcomeAddress(req, res){
        res.status(200).json('Welcome to Virtual classroom system');
    }

//get All Classrooms
    static getClassrooms(req, res){
        try{
            Classroom.findAll({})
                .then(result=>{
                    if(result.length > 0){
                        var classrooms = []
                        for (var i = 0; i < result.length; i++) {
                            classrooms.push( result[i].dataValues);
                        }
                        res.status(200).json(classrooms)
                    }else{
                        res.send(400);
                    }
                })
                .catch(err=>{
                    res.send(err);
                })
            return;

        }catch(e){
            res.send(500);
        }
    }

    //get Classroom by ID
    static getSpecificClass(req, res){
        try{
            var classroom_id = req.param.id;
            if(classroom_id !=null ||classroom_id != undefined ){
                Classroom.findById(classroom_id, {})
                    .then(result=>{
                        if(result.length > 0){
                            var spec_classroom = [];
                            for (var i = 0; i < result.length; i++) {
                                spec_classroom.push( result[i].dataValues);
                            }
                            res.status(200).json(spec_classroom)
                        }else{
                            res.send(400);
                        }
                    })
            }
        }catch (e) {
            res.send(500);

        }
    }

    //create a new classroom
    static createClassroom(req, res){
        try{
            var class_name = req.body.class_name;
            Classroom.findAll({
                where:{
                    class_name: class_name
                }
            })
                .then(result=>{
                    if(result.length > 0){
                        res.status(203).json({message: "Sorry, there's an existing Classroom name."})
                    }else{
                        var createClassAccount = {
                            class_name: class_name
                        }
                        Classroom.create(createClassAccount)
                            .then(data=>{
                                res.status(201).json({success:true})
                            })
                            .catch(err=> res.json({error: err}));
                    }
                })


        }catch (e) {
            res.send(500);
        }
    }

    //get all Lecturers
    static getLecturers(req, res){
        try{
            Lecturer.findAll({})
                .then(result=>{
                    if(result.length > 0){
                        var lecturers = [];
                        for(var i=0; i<result.length; i++){
                           lecturers.push(result[i].dataValues)
                        }
                        res.status(200).json(lecturers);
                    }else{
                        res.send(400);
                    }
                })
                .catch(err=>{
                    res.send(err);
                })
        }catch (e) {
            res.send(500);
        }
    }

    //get Specific Lecturer
    static specificLecturer(req,res){
        try{
            var lecturer_id = req.param.id;
            if(lecturer_id != null || lecturer_id != undefined ){
                    Lecturer.findById(lecturer_id,{})
                        .then(result=>{
                            if(result.length > 0){
                                var spec_lecturer = [];
                                for(var i = 0; i < result.length; i++){
                                    spec_lecturer.push(result[i].dataValues);
                                }
                                res.status(200).json(spec_lecturer);
                            }
                        })
            }else{
                res.send(400);
            }
        }catch (e) {
            res.send(500);
        }
    }

    //create a new Lecturer
    static createLecturer(req, res){
        try{

            var lecturer_name = req.body.lecturer_name;
            console.log("Lecturer name is " + lecturer_name);

            Lecturer.findAll({
                where:{
                    lecturer_name: lecturer_name
                }
            })
                .then(result=>{
                    if(result.length > 0){
                        res.status(203).json({message: "Sorry, there's an existing Lecturer name."})
                    }else{
                        var createLecturer = {
                            lecturer_name: lecturer_name
                        }
                        Lecturer.create(createLecturer)
                           .then(data=>{
                             res.status(201).json({success:true})
                        })
                            .catch(err=> res.json({error: err}));
                    }
                })
        }catch (e) {
            res.send(500);
        }
    }
}
module.exports = DeveloperController;