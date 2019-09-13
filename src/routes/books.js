const express = require('express');
const router = express.Router();
const books = require('../services/books');

router.get('/', (req, res) => {
    return res.status(200).json(books.list);
})

router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id, 10);
    let book = books.findBooksById(id);
    if (book === undefined) {
        return res.status(400).json({error: `no book with id ${req.params.id}`});
    } else {
        return res.status(200).json(book);
    }
})

module.exports = router;