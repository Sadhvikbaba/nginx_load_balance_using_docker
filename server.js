const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const service = process.env.APP_NAME ;

app.use('/' , (req , res) => {
    res.sendFile(path.join(__dirname , 'index.html'));
    console.log(`Request from ${service}`);  
});

app.listen(port , () => {
    console.log(`${service} is running on port ${port}`);
});