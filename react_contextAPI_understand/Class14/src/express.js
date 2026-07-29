const express=require('express')
const app=express()

app.get('/',(request,response)=>{
    response.send('Hello Gyus !!!')
})
app.listen(8000,()=>{
    console.log('Server is Running at https:/localhost:8000')
})
