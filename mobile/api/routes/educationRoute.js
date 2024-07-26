const { createEducation, getAllEducation, getEducation, updateEducation, deleteEducation} = require("../controllers/educationController");
const { protectAdmin } = require("../middleware/checkRole");
const express = require('express');
const router = express.Router();

router.get('/', getAllEducation);
router.get('/:id', getEducation);

router.post('/', protectAdmin, createEducation);
router.patch('/:id', protectAdmin, updateEducation);
router.delete('/:id', protectAdmin, deleteEducation);

module.exports = router;