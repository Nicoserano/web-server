const express = require('express');
const hbs= require('hbs');
require('dotenv').config();

const app= express();
const port =process.env.PORT;


//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');


app.use(express.static('public'));
app.get('/', (req,res)=>{
    res.render('home',{
        nombre:' Ronald Serrano',
        titulo: 'Curso Node'
    })
});
app.get('/index', (req,res)=>{
    res.render('home',{
        nombre:' Ronald Serrano',
        titulo: 'Curso Node'
    })
});
app.get('/generic', (req,res)=>{
    res.render('generic',{
        nombre:' Ronald Serrano',
        titulo: 'Curso Node'
    })
});
app.get('/elements', (req,res)=>{
    res.render('elements',{
        nombre:' Ronald Serrano',
        titulo: 'Curso Node'
    })
});
app.listen(port);