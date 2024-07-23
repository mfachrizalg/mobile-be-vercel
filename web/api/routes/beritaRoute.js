const beritaController = require('../controllers/beritaController');
const express = require('express');
const router = express.Router();

router.get('/', beritaController.getAllBerita);

module.exports = router;