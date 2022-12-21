// an express server, which will handle incoming spi requests and respond with json, it will use body parser as well as cors.
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;
require('dotenv').config()

console.log(process.env)




const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-dQAWiLTzJZ1OnV7psLO6rjgu",
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/',async (req,res)=>{
    const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 10,
        temperature: 0,
      });
      //console.log(response)
            if(response.data.choices[0].text){
                res.json({
                    message: response.data.choices[0].text
                })
            }
});

app.listen(port, ()=>{
    console.log(`App is running on port 3001`)
});