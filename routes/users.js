const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Users}  = require('../models/users'); 
/* GET users listing. */


router.post('/check_email',async(req,res)=>{
 const result = await Users.find({email:req.body.email}).countDocuments();
 res.send(''+result);

 
});

router.post('/create_account',async (req,res)=>{
         const newuser = new  Users({
           name : req.body.username,
           email : req.body.email,
           password: req.body.password,
           collegeid: req.body.collegeid,
           gender : req.body.gender,
           course: req.body.course,
           semester: req.body.semester,
           address : req.body.address,
           college_name: req.body.college_name
         });

         const result = await newuser.save((err)=>{
           if(err) {
             res.send("error");
           }else{
             res.send("ok");
           }
         });
        
});


module.exports = router;
