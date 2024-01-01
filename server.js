const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const usersRoute = require("./routes/users");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  // res.setHeader('Access-Control-Allow-Methods', 'PATCH , DELETE');

  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // // res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept'
  // );
  next();
});
//Middleware
// app.use('/post' , () =>{
//     console.log("this is middleware");
// })

//Post Route
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("home home");
});

mongoose.connect(
  "mongodb+srv://spotify-user-data:F8RPokivE9bWgr6t@cluster0.hqba7.mongodb.net/spotify-user-data?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);

// mongoose.connect(
//     'mongodb+srv://crud-app:2lUy9nVCBHQyxtB6@cluster0.hqba7.mongodb.net/crud-app?retryWrites=true&w=majority',
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log('connected to DB')
// );

app.listen(5000, () => {
  console.log(`Server Started on Port : 5000`);
});
