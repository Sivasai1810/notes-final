import { useState } from "react";
import axios from 'axios'

function  Text (){
   
   const userId=localStorage.getItem("userId")
    
   const [addnotes,setNote]=useState({
        userId:localStorage.getItem("userId"),
        content:""
    })
     const [message3,setMessage3]=useState([])
    const   handelshowtext=async(e)=>{
        e.preventDefault()
        try{
      const res=await axios.post("http://localhost:2023/api/notes",{userId})
        console.log(res.data.message)
       setMessage3(res.data.showtext)
        }catch(error){
            console.log("lavada bro",error)
        }
    }
  const handleaddnote=(e)=>{
setNote((n)=>({
  ...n,
  [e.target.name]:e.target.value
}))}
const handeladdtext= async(e)=>{
e.preventDefault()
const res=await axios.post("http://localhost:2023/api/addnotes",addnotes)
// console.log(res.data.message)
// alert(res.data.message)
//setMessage2(res.data.text)
  setMessage3(res.data.showtext)
}
  
    
 return (
    <div>

     <form onSubmit={handeladdtext}>
          <input type='text'value={addnotes.content} name='content' onChange={handleaddnote}/>
        <button type='submit'>Add-task</button>

    </form><br/>
      <form onSubmit={handelshowtext}>
        <button type="submit">show my task </button>
      
     <ul>
{message3.map((element,index) => <li  key={index}>
     {element}
</li>)}
        </ul>
       
    </form>
    
    
    </div>
 )
}
export default Text