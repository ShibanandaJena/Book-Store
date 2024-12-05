const express = require("express")
const app = express();
const connectDB = require("./db/dbConnect")
app.use(express.json())
const signup = require('./routes/userSignup')
const login = require('./routes/userLogin')
const info = require('./routes/userInfo')
const addBook = require('./routes/book')

require("dotenv").config();


// Database fetch
connectDB();

// Fetching the signup route
app.use('/api/v1',signup)

// Fetching the login route
app.use('/api/v1',login)

// Get user info
app.use('/api/v1',info)

// Get bookupdate info
app.use('/api/v1',addBook)

// Port Running
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})