const express = require('express');
const { createLoan, getLoans } = require('../controllers/loanController');
const router = express.Router();

router.post('/loans', createLoan);
router.get('/loans', getLoans);

// Outras rotas (update, delete, etc.) podem ser adicionadas aqui

module.exports = router;
