const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
    },
    user: {
        type: ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Post = mongoose.model('post', postSchema);

module.exports = Post;
