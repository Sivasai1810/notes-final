require('dotenv').config()
const express = require('express')
const cors=require('cors')
const app = express()
app.use(cors())
const { connectdb } =require('./db')
const createroute=require("./routes/create")
const loginroute=require("./routes/login")
const addnotes=require("./routes/addnote")
try{
connectdb()
app.use('/api/create',createroute)
app.use('/api/login',loginroute)
app.use('/api/addnotes',addnotes)
 console.log("somthingggggggg is wrong ")
}catch(error)
{
    console.log("somthin is wrong ",error)
}
const port=process.env.PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
