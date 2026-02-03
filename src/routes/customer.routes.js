const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer.controller');

router.get('/:customer_id/total', controller.getTotal);

module.exports = router;
