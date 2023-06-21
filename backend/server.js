const express = require('express')
const colors = require('colors')
const cors = require('cors')
const dotenv = require('dotenv').config()
const {errorHandler}= require('./middleware/errorMiddleware.js')
const connectDB = require('./config/db.js')
const port = process.env.PORT || 5000
connectDB()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/tareas',require('./routes/tareasRoutes.js'))
app.use('/api/users',require('./routes/userRoutes.js'))
app.use(errorHandler)
app.listen(port,()=>console.log(`Server started on port ${port}`))