const express = require('express')
const app = express();
const cors = require('cors');
const data = require('./Api/Bucketapi.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send("you are in right place.")
})

app.get('/category',(req,res)=>{
    res.send(data);
})

app.listen(4000,()=>{console.log("your server have started at port 4000")})