const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { loadExcel } = require('../services/excel.service');

const upload = multer({ dest: 'tmp/' });

exports.uploadExcel = [
  upload.single('file'),
  async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'File required' });
    }

    const filePath = path.resolve(req.file.path);

    try {
      const invoices = await loadExcel(filePath);
      fs.unlinkSync(filePath);

      res.json({
        message: 'Excel processed successfully',
        invoices: invoices.length
      });
    } catch (err) {
      res.status(500).json({ error: 'Failed to process Excel' });
    }
  }
];
