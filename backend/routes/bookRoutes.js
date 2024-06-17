const express = require('express');
const { createBook, getBooks } = require('../controllers/bookController');
const router = express.Router();

router.post('/books', createBook);
router.get('/books', getBooks);

// Outras rotas (update, delete, etc.) podem ser adicionadas aqui

module.exports = router;
