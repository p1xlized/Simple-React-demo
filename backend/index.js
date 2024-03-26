const express = require("express");
const bodyParser = require("express").json;
const db = require('./db/db.js');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');


// Enable CORS for all routes
app.use(cors());
app.get('/users', (req, res) => {
    try {
  
      db.from("users").select("*").then((rows) => {
        res.json(rows)
      })
    } catch (error) {
      console.log(error)
    }
  })
  
app.get('/user/:id', (req, res) => {
  try {
  
    db.from("users").select("*").where({id: req.params.id}).then((rows) => {
      res.json(rows)
    })
  } catch (error) {
    console.log(error)
  }
})
app.listen(port, () => {
    console.log(`Listening port on ${port}`)
  })