const {
    getInvoices,
    getInvoiceById
  } = require('../services/excel.service');
  
  exports.getAll = (req, res) => {
    res.json(getInvoices());
  };
  
  exports.getById = (req, res) => {
    const invoice = getInvoiceById(req.params.invoice_id);
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }
    res.json(invoice);
  };
  