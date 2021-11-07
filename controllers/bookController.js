// create an express router
const { application } = require('express')
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
  const book = req.body.book
  book._id = books.length
  books.push(book)
  // res.json({ book })
  res.redirect(`/books/${book._id}`) // yes, i created it. you can request it here
})

// GET /books/:id -- READ one book at :id
router.get('/:id', (req, res) => {
  const bookId = req.params.id
  const selectedBook = books[bookId]
  res.json({ book: selectedBook })
})

// export the router
module.exports = router