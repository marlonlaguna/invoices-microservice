const express = require('express');
const cors = require('cors');

const invoiceRoutes = require('../routes/invoice.routes');
const customerRoutes = require('../routes/customer.routes');
const uploadRoutes = require('../routes/upload.routes');
const { swaggerUi, swaggerDocument } = require('./swagger');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/invoices', invoiceRoutes);
app.use('/customers', customerRoutes);
app.use('/upload', uploadRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/health', (_, res) => res.json({ status: 'ok' }));

module.exports = app;
