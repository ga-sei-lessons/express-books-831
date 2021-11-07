// create an express router
const express = require('express')
const router = express.Router()

// import our db model
const books = require('../models/books')

// mount your routes on it
// GET /books -- READ all books
router.get('/', (req, res) => {
  res.json({ books }) // books: books
})

// POST /books -- CREATE one book
router.post('/', (req, res) => {
  // create a new book with the request body
  console.log(req.body)
  res.json({ msg: 'CREATE one book' })
})

// export the router
module.exports = router