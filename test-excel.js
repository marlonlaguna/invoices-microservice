const { loadExcel } = require('./src/services/excel.service');

(async () => {
  const data = await loadExcel('./test.xlsx');
  console.log(data[0]);
})();