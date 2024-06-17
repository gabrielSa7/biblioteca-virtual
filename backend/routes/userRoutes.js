const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);

// Outras rotas (update, delete, etc.) podem ser adicionadas aqui

module.exports = router;
