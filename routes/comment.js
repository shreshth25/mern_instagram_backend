const express = require('express')
const isAuthenticated = require('../middlewares/auth')
const { getAllComments, getUserComment, createUserComment, deleteUserComment } = require('../controllers/comment')


const router = express.Router()

router.get('/', isAuthenticated, getUserComment)
router.get('/post', isAuthenticated, getAllComments)
router.post('/create', isAuthenticated, createUserComment)
router.post('/delete', isAuthenticated, deleteUserComment)


module.exports = router