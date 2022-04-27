const express = require('express');
const db= require('./config/db');

const app = express();
const route = require('./routes/endpoint.js');
const PORT=4444;

app.use(express.json());
app.use('/',route);


db();
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`);
})

