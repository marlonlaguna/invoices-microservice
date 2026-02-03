const { getCustomerTotal } = require('../services/excel.service');

exports.getTotal = (req, res) => {
  const total = getCustomerTotal(req.params.customer_id);
  res.json({
    customer_id: req.params.customer_id,
    total
  });
};
