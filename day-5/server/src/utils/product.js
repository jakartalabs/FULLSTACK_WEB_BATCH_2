const ejs = require('ejs');
const path = require('path');
const convertHTMLToPDF = require('pdf-puppeteer');
const Product = require('../models/product');
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


module.exports = {
  generatePDFProduct
}