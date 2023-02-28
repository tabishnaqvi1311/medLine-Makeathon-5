//importing express.js library and creating an instance of an express app
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
// connecttoMongo();

//add middleware to parse incoming server request bodies as JSON
app.use(express.json())
app.use(cors());

//define a route handler for GET requests to the root URL path
app.get('/',(req,res) => {
    res.send('stuff')
});


//define a route handler for POST requests to the /submit URL path
app.post('/newSubmit',async(req,res)=>{
    console.log(req.body);
    
    //create new user in db
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName
    };
    if (newUser) {
        fs.appendFileSync(`./users/${req.body.userName}.txt`,JSON.stringify(newUser))
        return res.status(200).json(newUser);    
    }
    
    res.status(500).json({ error: 'Internal Server Error' });
});

app.post('/loginSubmit', async(req,res) => {
    console.log(req.body);
    const loginUser = {
        userName: req.body.userName,
        password: req.body.password
    };

    const fileCheck = async (path) => {
        console.log(path)
        try{
            fs.access(`./users/${path}.txt`, fs.constants.R_OK, (err) => {
            // console.log(fs.access(`./users/${path}`))
            console.log('fileexists')
            return true
            })
        }
        catch {
            // console.log(fs.access(`./users/${path}`))
            console.log(`file DO NOT EXITs`)
            return false
        }
    }

    const fileExists = fileCheck(req.body.userName);
    if (fileExists){

        let userdetails = fs.readFileSync(path.join(__dirname,`./users/${req.body.userName}.txt`))
        let userdetailsJSON = JSON.parse(userdetails.toString());

        // console.log(JSON.parse(userdetails.toString()));
        // console.log(userdetailsJSON, userdetailsJSON.userName, userdetailsJSON.password, loginUser.userName, loginUser.password)

        if (userdetailsJSON.userName == loginUser.userName && userdetailsJSON.password == loginUser.password)
        {
        console.log(`logged in`)
        location.href = 'http://localhost:3000/'
        return res.status(200).json(loginUser)
        }
        else
        {
        res.status(500).json({ error: 'INTERNAL SERVER ERR' })
        }

    }
    else{
        console.log(`file do not exist`)
        res.status(500).json({ error: 'User does not exist' })
    }
    // console.log(user);

})

app.listen(8181, () => {
    console.log('Server Running on port 8181!')
})

// app.get('/', (req,res)=>{

// })