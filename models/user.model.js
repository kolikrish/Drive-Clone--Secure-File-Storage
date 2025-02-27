const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [3, 'username must be at least 3 characters'],
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [10, 'email must be at least 10 characters'],
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minlength: true,
        unique: true,
    }
})

const user = mongoose.model('user',userSchema);
module.exports = user;