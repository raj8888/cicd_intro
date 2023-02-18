const express=require('express')

const app=express()

app.get("/",(req,res)=>{
    value=100
    res.send("HOME PAGE")
})

app.listen(4500,()=>{
    console.log('app is listning on port 4500')
})