// Imports
require('dotenv').config()
require('./config/database')
const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user')
const app = express()
const PORT = process.env.PORT || 3000

// Configration

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use("/uploads", express.static('uploads'))

// API
app.use('/api/user/', userRouter)

app.listen(PORT, ()=>{
    console.log(`Server Listing as port ${PORT}`)
})