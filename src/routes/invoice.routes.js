const express = require('express');
const router = express.Router();
const controller = require('../controllers/invoice.controller');

router.get('/', controller.getAll);
router.get('/:invoice_id', controller.getById);

module.exports = router;
