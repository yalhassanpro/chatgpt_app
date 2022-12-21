// an express server, which will handle incoming spi requests and respond with json, it will use body parser as well as cors.

const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello world')
});

app.listen(port, ()=>{
    console.log(`App is running on port 4000`)
});