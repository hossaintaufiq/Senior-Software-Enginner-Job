// declare the express app and export it to be used in the server.js file
const app= require('./app')

// declare the port number and start the server 
const port = process.env.PORT||3000

// starting the server and listening on the speccified port number 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
