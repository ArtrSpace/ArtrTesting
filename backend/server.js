require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const postRoutes = require('./routes/posts')   // get all routes attached to posts.js

// express app
const app = express()

// middleware
app.use(express.json())   // looks for data from all requests to pass through 

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
// when going to api/posts, will fire the routes in postRoutes
app.use('/api/posts', postRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => { // once connected to database, then
    // listen for requests from port number (with env variable PORT)
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })