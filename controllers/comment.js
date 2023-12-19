const Comment = require("../models/comment")

const createUserComment = async (req, resp) => {
    try
    {
        const {comment, user, post} = req.body
        const new_comment = new Comment({
            comment: comment,
            user: req.user._id,
            post: post
        })
        await new_comment.save()
        return resp
        .status(201)
        .json({"status":true, 'message':""})
    }
    catch(err)
    {
        return resp
        .status(400)
        .json({"status":false, 'message':""})
    }
}

const deleteUserComment = (req, resp) => {
    try
    {
        return resp
        .status(201)
        .json({"status":true, 'message':""})
    }
    catch(err)
    {
        return resp
        .status(400)
        .json({"status":false, 'message':""})
    }
}

const getUserComment = async (req, resp) => {
    try
    {
        const comments = await Comment.find({user: req.user._id})
        return resp
        .status(201)
        .json({"status":true, 'message':"Comments", "comments":comments})
    }
    catch(err)
    {
        return resp
        .status(400)
        .json({"status":false, 'message':""})
    }
}

const getAllComments = async (req, resp) => {
    try
    {
        const comments = await Comment.find({post: req.body.post})
        return resp
        .status(201)
        .json({"status":true, 'message':"Comments", "comments":comments})
    }
    catch(err)
    {
        return resp
        .status(400)
        .json({"status":false, 'message':""})
    }
}



module.exports = {createUserComment, deleteUserComment, getUserComment, getAllComments}