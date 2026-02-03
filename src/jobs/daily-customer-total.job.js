const axios = require('axios');
const { sendEmail } = require('../services/email.service');

const CUSTOMER_ID = process.env.CUSTOMER_ID || 'C001';
const API_BASE_URL =
  process.env.API_BASE_URL || 'http://localhost:3000';

const run = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/customers/${CUSTOMER_ID}/total`
    );

    const { customer_id, total } = response.data;

    const subject = `Total de factura del cliente ${customer_id}`;
    const body = `
Estimado cliente ${customer_id},

El total acumulado de sus facturas es: ${total}.
`;

    await sendEmail({
      to: 'cliente@mock.com',
      subject,
      body
    });

    console.log('Job ejecutado correctamente');
    process.exit(0);
  } catch (error) {
    console.error('Error ejecutando el Job:', error.message);
    process.exit(1);
  }
};

run();
