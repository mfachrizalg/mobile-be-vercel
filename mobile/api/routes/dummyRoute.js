const {getEducation, getHistoryAnorganik, getHistoryOrganik, getNotification} = require('../controllers/dummyController');
const express = require('express');
const router = express.Router();

router.get('/organik', getHistoryOrganik);
router.get('/anorganik', getHistoryAnorganik);
router.get('/education', getEducation);
router.get('/notification', getNotification);

module.exports = router;