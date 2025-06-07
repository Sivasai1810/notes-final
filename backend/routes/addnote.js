const express = require('express')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId; 
const router=express.Router()
const {usernotes}=require("../models/users")

//const app = express()
router.use(express.json())

router.post('/', async (req, res) => {
    try{  
 const {userId,content}=req.body;
 const exist=await  usernotes.findOne({ userId: new  ObjectId(userId) })
if(exist){
    try{
        // exist.content.unshift("your task");
    exist.content.push(content);
    await exist.save()
    res.json({message:"ok bro its not finding the userid",
        showtext:exist.content
    })
}catch(error){
        console.log("uanble to push", error)
    }

}else{

 const newnotes =new usernotes({
    userId:new ObjectId(userId),
    content:[content]
 })
//  newnotes.content.unshift("your-task")
 await newnotes.save()
res.json({message:"task added sucessfully",
    showtext:newnotes.content})
}
    }catch(error){
        res.json({message:"internal server error"})
        console.log("internal server error",error)
    }

})
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 module.exports=router