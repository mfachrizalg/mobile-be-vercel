const { createOrganik, riwayatOrganik, sendImage, getImage } = require('../controllers/organikController');
const { protectAdminOrganik, protectOrganik } = require('../middleware/checkRole');
const express = require('express');
const router = express.Router();

router.route('/')
    .get(getImage)
    .post(sendImage);

module.exports = router;