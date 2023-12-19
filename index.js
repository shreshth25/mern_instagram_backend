// Imports
require('dotenv').config()
require('./config/database')
const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user')
const postRouter = require('./routes/post')
const commentRouter = require('./routes/comment')
const app = express()
const PORT = process.env.PORT || 3000

// Configration

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use("/uploads", express.static('uploads'))

// API
app.use('/api/user/', userRouter)
app.use('/api/post/', postRouter)
app.use('/api/comment/', commentRouter)

app.listen(PORT, ()=>{
    console.log(`Server Listing as port ${PORT}`)
})