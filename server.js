const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const usersRouter = require('./usersRoutes')
const userRouter = require('./userRoute')
const connectDatabase = require('./db')
const PORT = process.env.PORT || 3006
const cors = require('cors')



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// app.use(function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
// });

app.use('/api/users', usersRouter)
app.use('/api/user', userRouter)

app.listen(PORT, () => {
    connectDatabase()
    console.log(`Server running on port ${PORT}`)
})