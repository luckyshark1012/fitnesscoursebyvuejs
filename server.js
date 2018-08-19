const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('public'))
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs")
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function(req,res){

    res.render('index')
});

app.get('/about', function(req,res){

    res.render('about')
});

app.get('/post', function(req,res){

    res.render('post')
});


app.get('/fitnesstrainer', function(req,res){

    res.render('fitnesstrainer')
});

app.post('/post', function(req,res){

    console.log('body',req.body)
});


app.listen(3000)
