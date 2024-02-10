require("dotenv").config()
const fs = require('fs');
const express = require('express');
const app = express();
const ejsLayout = require('express-ejs-layouts')

const connect = require("./dbConnect");
const User = require("./schema");

const port = 5000;

connect()

app.set('view engine','ejs');
app.use(ejsLayout);
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index')
})

const rawData = fs.readFileSync('credit_card_data.json');
const cardData = JSON.parse(rawData);

app.get('/top_picks', (req, res) => {
    res.render('top_picks', { cardData });
});
app.get('/sat_score', (req, res) => {
    res.render('sat_score');
});
app.get('/rec', (req, res) => {
    res.render('rec');
});
app.post('/recommend',(req,res)=>{
    recommender_ids = [41,34,68]
    res.render('recommend',{ cardData, recommender_ids })
})
app.post('/s_score',(req,res)=>{
    res.render('s_score')
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})