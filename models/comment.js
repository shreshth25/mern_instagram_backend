const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    post:{
        type: ObjectId,
        ref: 'Post' 
    }
}, { timestamps: true });

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
