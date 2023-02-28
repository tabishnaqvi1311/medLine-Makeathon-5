const express = require('express');
const db = require('./db');
const app = express();
const path = require('path');
const router = express.Router();
const fs = require('fs');
const html = require('html');

app.set('view engine', 'pug');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'Pages')));

const cors = require('cors');
app.use(cors());

const port = 8181;

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/Pages/LandingPage.pug');
    // res.send('hello')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/Pages/login.html')
})


app.get('/signup',(req,res)=>{
    res.sendFile(__dirname + '/Pages/signup.html')
})

app.post('/signup', (req,res)=>{
    console.log(req.body);
    const UserDetailsInit = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
    }

    if (!req.body) {
        return res.status(400).send('No data submitted');
      }

    let outputtowrite = JSON.stringify(UserDetailsInit);
    fs.writeFileSync('./output/output.txt',outputtowrite);
    console.log(`${outputtowrite}`);

    // const params = {'message':'Your form has been submitted'}
    res.status(200).render('/Pages/LandingPage.pug');
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`app started on ${port}`)
})