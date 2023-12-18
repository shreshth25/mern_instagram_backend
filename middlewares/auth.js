const User  = require('../models/user')
const jwt = require('jsonwebtoken')

const isAuthenticated = async (req, resp, next) =>{
    try
    {
        const token = req.get('Authorization')
        if(!token)
        {
            return resp
            .status(400)
            .json({"status":false, "message":"Missing Token"})
        }

        const user = jwt.verify(token, process.env.SECRET_KEY)

        const existing_user = await User.findById(user.user_id).select('-password -createdAt -updatedAt')
        if(!existing_user)
        {    
            return resp
            .status(400)
            .json({"status":false, "message":"Invalid Token"})

        }
        req.user = existing_user
        next()
    }
    catch(err)
    {
        console.log(err)
        return resp
        .status(400)
        .json({"status":false, "message":"Invalid Token"})
    }
} 

module.exports = isAuthenticated
