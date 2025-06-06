import axios from 'axios'
import  React from 'react'
import { useState } from 'react'
function Empty(){
    const [note,setNote]=useState({
        userId:localStorage.getItem("userId"),
        content:""
    })
    const handleaddnote=(e)=>{
setNote((n)=>({
  ...n,
  [e.target.name]:e.target.value
}))}

const handlesavenote= async(e)=>{
e.preventDefault()
const res=await axios.post("http://192.168.43.70:2023/api/addnotes",note)
console.log(res.data.message)
alert(res.data.message)
}
    
return(
    <form onSubmit={handlesavenote}>
      <input type='text'value={note.content} name='content' onChange={handleaddnote}/>
        <button type='submit'>Add-task</button>
    </form>
)
}

export default  Empty