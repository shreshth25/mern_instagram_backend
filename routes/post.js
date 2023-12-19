const express = require('express')
const isAuthenticated = require('../middlewares/auth')
const { createUserPost, getUserPost, getAllPosts, deleteUserPost } = require('../controllers/post')
const upload = require('../helpers/uploadImage')

const router = express.Router()

router.get('/', isAuthenticated, getUserPost)
router.get('/all', isAuthenticated, getAllPosts)
router.post('/create', isAuthenticated, upload.any(), createUserPost)
router.post('/delete', isAuthenticated, deleteUserPost)

module.exports = router