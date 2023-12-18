const express = require('express')
const isAuthenticated = require('../middlewares/auth')
const {register, login, profile} =  require('../controllers/user')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/profile', isAuthenticated , profile)

module.exports =  router
