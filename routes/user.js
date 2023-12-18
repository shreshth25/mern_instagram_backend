const express = require('express')
const {register, login, profile} =  require('../controllers/user')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/profile', profile)

module.exports =  router
