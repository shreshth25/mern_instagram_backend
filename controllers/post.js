const Post = require("../models/post")

const createUserPost = async (req, resp) => {
    try
    {
        const {title, description} = req.body
        const images = []
        req.files.forEach(element => {
            images.push('/uploads/'+ element.filename)
        });
        const post = new Post({
            title : title,
            description: description,
            user: req.user._id,
            images: images
        })
        await post.save()
        return resp
        .status(201)
        .json({"status":true, 'message':"Post Created"})
    }
    catch(err)
    {
        console.log(err)
        return resp
        .status(400)
        .json({"status":false, 'message':""})
    }
}

const deleteUserPost = async (req, resp) => {
    try
    {
        const {id} = req.body
        await Post.findByIdAndDelete(id)
        return resp
        .status(201)
        .json({"status":true, 'message':"Post Deleted"})
    }
    catch(err)
    {
        return resp
        .status(400)
        .json({"status":false, 'message':""})
    }
}

const getUserPost = async (req, resp) => {
    try
    {
        const posts = await Post.find({user: req.user._id})
        return resp
        .status(201)
        .json({"status":true, 'message':"Posts", "posts": posts})
    }
    catch(err)
    {
        return resp
        .status(400)
        .json({"status":false, 'message':""})
    }
}

const getAllPosts = async (req, resp) => {
    try
    {
        const posts = await Post.find()
        return resp
        .status(201)
        .json({"status":true, 'message':"Posts", "posts": posts})
    }
    catch(err)
    {
        return resp
        .status(400)
        .json({"status":false, 'message':""})
    }
}

const getSavedPosts = (req, resp) => {
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

module.exports = {createUserPost, getUserPost, getAllPosts, deleteUserPost}