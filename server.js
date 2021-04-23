const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

const postsRoute = require('./routes/posts');



app.use(express.json());

//Middleware
// app.use('/post' , () =>{
//     console.log("this is middleware");
// })

//Post Route
app.use('/posts' , postsRoute );


app.get('/' , (req,res) =>{
    res.send("home home");
});


mongoose.connect( process.env.DB_CONNECTION ,{ useNewUrlParser: true , useUnifiedTopology: true} , () => console.log("connected to DB"));
app.listen(5000);