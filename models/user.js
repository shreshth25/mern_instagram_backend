const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    isBussinessAcount:{
        type: Boolean,
        default: 0
    },
    profile_pic:{
        type: String,
        default: "/uploads/default-avtar.webp",
    }
},{timestamps:true})

userSchema.virtual('profilePicFullPath').get(function() {
    const baseUrl = 'http://localhost:3000';
    return `${baseUrl}${this.profile_pic}`;
});

const User = mongoose.model('user', userSchema)

module.exports = User