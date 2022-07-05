const express = require('express');
const dotenv = require('dotenv').config();
const {hataYakalama} = require('./middlewares/errormiddleware');
const baglan = require('./config/db')
const colors = require('colors');
const PORT = process.env.PORT

const app = express();


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/notlar',require('./routes/notRoute'));

app.use(hataYakalama);

baglan();

app.listen(PORT,()=>console.log(`Server ${PORT} üzerinden yayında`.magenta.italic));