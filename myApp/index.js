const express = require("express");
const app = express();
app.get('/',(request,response)=>{
    response.send(`Hello Ravindra you are great man`);
})
app.listen(45000,()=>{
    console.log(`server is running: 45000`);
})