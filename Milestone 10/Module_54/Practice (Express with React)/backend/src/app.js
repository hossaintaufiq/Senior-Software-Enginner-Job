// creating express app and connect middleware and routes to the app 
const express = require('express')
const cors= require('cors')
const app = express()
app.use(cors())
// middleware to parse the incoming request body as Json 
app.use(express.json())


// routes 
app.get('/', (req, res) => {
//  console.log('Server is running perfectly on the console ')
  res.send('Server is running perfectly on the client side')
  
})

const userRoutes = require('./routes/user.route')
app.use('/users', userRoutes)


// exporting the app to be used in the server.js file 
module.exports = app; 