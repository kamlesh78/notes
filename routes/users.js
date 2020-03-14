const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users  = require('../models/users'); 
/* GET users listing. */
router.get('/',async(req,res)=>{
  let result = await Users.Users.find();
  console.log(result);
});

router.get('/check_email',(req,res)=>{
 // res.render(error);
console.log(Users);
});

router.post('/create_account',async (req,res)=>{
         const newuser = new Users.Users({
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

         const result = await newuser.save();
         console.log(result);
});


module.exports = router;
