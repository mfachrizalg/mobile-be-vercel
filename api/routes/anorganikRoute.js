const {createAnorganik} = require('../controllers/anorganikController');
const {protectAdminAnorganik, protectClient} = require('../middleware/checkRole');
const express = require('express');
const router = express.Router();

router.post('/:id', protectAdminAnorganik, createAnorganik);

module.exports = router;