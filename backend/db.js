require('dotenv').config()
const mongodb=require("mongoose")
const connectdb= async ()=>{
   try{
     await mongodb.connect("mongodb+srv://nsivasai88:vZQfnujJCtiXAQUV@cluster1.tnnn9qq.mongodb.net/testcase"
     )
    console.log("mongodb connected sucessfully")
   }
   catch(error){
    console.log("unable to connect the database",error)
   }
}
module.exports={
   connectdb,
}