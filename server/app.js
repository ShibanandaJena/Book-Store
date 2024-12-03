const express = require("express")
const app = express();
const connectDB = require("./db/dbConnect")
app.use(express.json())
const signup = require('./routes/userSignup')
require("dotenv").config();


// Database fetch
connectDB();

// Fetching the signup route
app.use('/api/v1',signup)

// Port Running
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})