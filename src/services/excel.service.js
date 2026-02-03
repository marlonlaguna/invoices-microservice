const ExcelJS = require('exceljs');
const { calculateInvoice } = require('./invoice.service');

let invoices = [];

const loadExcel = async (filePath) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const sheet = workbook.worksheets[0];
  const parsed = [];

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return; 

    const [
      customer_id,
      customer_name,
      invoice_id,
      amount,
      tax_rate,
      discount,
      date
    ] = row.values.slice(1);

    parsed.push(
      calculateInvoice({
        customer_id,
        customer_name,
        invoice_id,
        amount,
        tax_rate,
        discount,
        date
      })
    );
  });

  invoices = parsed;
  return invoices;
};

const getInvoices = () => invoices;

const getInvoiceById = (invoiceId) =>
  invoices.find(i => i.invoice_id === invoiceId);

const getCustomerTotal = (customerId) =>
  invoices
    .filter(i => i.customer_id === customerId)
    .reduce((acc, i) => acc + i.total, 0);

module.exports = {
  loadExcel,
  getInvoices,
  getInvoiceById,
  getCustomerTotal
};
