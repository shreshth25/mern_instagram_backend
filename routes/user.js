const express = require('express')
const isAuthenticated = require('../middlewares/auth')
const {register, login, profile, updateProfilePic} =  require('../controllers/user')
const upload = require('../helpers/uploadImage')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)

// Authenticated Routes
router.post('/profile', isAuthenticated , profile)
router.post('/update-profile-pic', isAuthenticated , upload.single('file'), updateProfilePic)

module.exports =  router
