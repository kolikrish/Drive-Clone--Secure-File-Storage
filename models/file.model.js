const mongoose = require('mongoose');

const filesSchema = new mongoose.Schema({
    path: {
        type: String,
        required: [true, 'Path is required'],
    },

    originalName: {
        type: String,
        required: [true, 'Original name is required'],
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'User is required'],
    }
})

const file = mongoose.model('file',filesSchema);
module.exports = file;