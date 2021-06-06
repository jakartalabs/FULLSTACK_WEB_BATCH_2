const ejs = require('ejs');
const path = require('path');
const exceljs = require('exceljs');
const convertHTMLToPDF = require('pdf-puppeteer');
const generatePDFProduct = (product) =>{
  return new Promise((resolve, reject)=>{
    ejs.renderFile(path.resolve(__dirname, './templates/product-detail.ejs'), {...product}, (err, html)=>{
      if(err){
        return reject(err);
      }
      return convertHTMLToPDF(html, (pdf)=>{
        resolve(pdf);
      }, {
        printBackground: true,
        format:'A4',
      },{
        args: ['--no-sanbox']
      })
    })
  })
}

const generateExcelProduct = (product) => {
 const workbook = new exceljs.Workbook();
 const sheet = workbook.addWorksheet(product.productUuid);
 sheet.columns =[
   {header: 'uuid', key: 'productUuid'},
   {header: 'name', key: 'name'}
 ]
 sheet.addRow([product.productUuid, product.name]);
 return workbook.xlsx.writeBuffer();
}


module.exports = {
  generatePDFProduct,
  generateExcelProduct
}