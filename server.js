// require the express package
const express = require('express')

// initiate an express app
const app = express()
const port = 3003

// middlewares (app.use happens on every request regardleess of the HTTP method)
app.use((req, res, next) => {
  // do stuff with the request and response
  console.log('incoming request:')
  console.log(`${req.method} ${req.url}`)
  // invoke next to move along to the app method
  next()
}) 
// require express body parser middleware (so we can POST)
app.use(express.json())

// define our routes
app.get('/', (req, res) => res.json({ msg: "welcome to the books API 📓" }))

// define our route controllers
// first arg = url infront of controller second arg = the controller file
app.use('/books', require('./controllers/bookController'))


// listen on a port
app.listen(port, () => console.log(`is that books I hear on port ${port}?`))