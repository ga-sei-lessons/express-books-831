// create an express router
const express = require('express')
const router = express.Router()

// mount your routes on it
// GET /books -- READ all books
router.get('/', (req, res) => {
  res.json({ msg: 'READ all books' })
})

// POST /books -- CREATE one book
router.post('/', (req, res) => {
  res.json({ msg: 'CREATE one book' })
})

// export the router
module.exports = router