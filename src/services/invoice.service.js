const calculateInvoice = (raw) => {
    const amount = Number(raw.amount);
    const taxRate = Number(raw.tax_rate);
    const discount = Number(raw.discount || 0);
  
    const tax_amount = amount * taxRate;
    const subtotal = amount + tax_amount;
    const total = subtotal - discount;
  
    const riesgo_crediticio =
      Math.log(total * 7.3) / Math.sqrt(amount);
  
    return {
      ...raw,
      amount,
      tax_rate: taxRate,
      discount,
      tax_amount,
      subtotal,
      total,
      riesgo_crediticio
    };
  };
  
  module.exports = {
    calculateInvoice
  };
  