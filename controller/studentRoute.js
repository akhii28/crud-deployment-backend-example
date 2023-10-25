const express = require("express");
const studentRoute = new express.Router();
const studentSchema = require("../model/studentSchema");

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});


studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});


studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else    
                res.json(data);
        })
});

studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

// _id: 652d2402004b26b04e38ea43 raj

// http://localhost:4000/studentRoute/

// http://localhost:4000/studentRoute/update-student/652d2402004b26b04e38ea43
// and if it a GET request ->  findById() 

// http://localhost:4000/studentRoute/update-student/652d2402004b26b04e38ea43
// and if the a PUT request -> findByIdAndUpdate()

// http://localhost:4000/studentRoute/delete-student/652d2402004b26b04e38ea43
// and if the a DELETE request -> findByIdAndRemove()

// http://localhost:4000/studentRoute/create-student
//and if it is a POST request -> create()

module.exports = studentRoute;
