const express=require('express')
const app=express()

app.get('/',(request,response)=>{
    const dummyData=[
        {
            username:'Ashish Chandel',
            rollno:23098116780002,
            age:20,
            cgpa:8.1
            
        },
        {
            username:'Faizan Khan',
            rollno:23098116780005,
            age:21,
            cgpa:8.2
        },
        {
            username:'Abhishek Chaudhary',
            rollno:23098116780018,
            age:23,
            cgpa:7.75
        }
    ]
    response.json({data:dummyData})
})
app.listen(8000,()=>{
    console.log('Server is Running at https:/localhost:8000')
})
