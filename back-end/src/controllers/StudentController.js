const StudentModel = require("../models/StudentModel");

//New Student Create
exports.CreateStudent =async (req,res)=>{
    let postBody = req.body;
    try {
        let result = await StudentModel.create(postBody);
        res.status(200).json({status:"success", data:result})
    }catch (e) {
        res.status(200).json({status:"fail", data:e.toString()})
    }
}


//Get All Students Information

exports.GetAllStudents =async (req,res)=>{
    try{
        const result = await StudentModel.find();
        res.status(200).json({status:"success",data:result});
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}

//Get  Students Information by ID

exports.GetStudentsById =async (req,res)=>{
     const id = req.params.id;
     const query = {_id:id};
    try{
        const result = await StudentModel.find(query);
        res.status(200).json({status:"success",data:result});
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}

//Delete Student

exports.DeleteStudent =async (req,res)=>{
    const id = req.params.id;
    const query = {_id:id};
    try{
        const result = await StudentModel.deleteOne(query);
        res.status(200).json({status:"success",data:result});
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}

//Update a Student
exports.UpdateStudent =async (req,res)=>{
    let id = req.params.id;
    let postBody = req.body;
    let query = {_id:id};
    try {
        let result = await StudentModel.updateOne(query,postBody);
        res.status(200).json({status:"success", data:result})
    }catch (e) {
        res.status(200).json({status:"fail", data:e.toString()})
    }
}

