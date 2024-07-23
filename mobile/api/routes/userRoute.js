const {registerUser, getData} = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.post('', registerUser);
router.get('', getData);

module.exports = router;