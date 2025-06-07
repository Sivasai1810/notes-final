const express=require("express")
const router=express.Router()
const mongodb=require("mongoose")
const {usernotes}=require('../models/users')

const ObjectId=mongodb.Types.ObjectId
router.use(express.json())
router.post('/', async(req,res)=>{
    const userId=new ObjectId(req.body.userId)
    try{
    const exist= await usernotes.findOne({ userId:new ObjectId(userId) })
    if(exist){
        return(
        res.json({message:"yout content" ,
               showtext:exist.content
        }))
    }}catch(error){
        console.log("error hhhhhh",error)
    }
})
module.exports=router