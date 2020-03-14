const mongoose = require('mongoose');


const userreg = new mongoose.Schema({
    name : String,
    email : String,
    password: String,
    gender : String,
    course: String,
    semester: String,
    address: String,
    college_name: String,
    collegeid : String,
    profile_image: String,
    join_date : {
        type: Date,
        default: Date.now
                },
    isactive: Boolean,
    last_login: {
        type: Date,
        default : Date.now
    }
});

exports.Users = mongoose.model('Users',userreg);
//exports.Users = Users;