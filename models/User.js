const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:new Date().toLocaleDateString()
    },
    updatedAt:{
        type:Date,
        required:true,
        default:new Date().toLocaleDateString()
    }
    
})

const User = mongoose.model('users', UserSchema)

module.exports = User