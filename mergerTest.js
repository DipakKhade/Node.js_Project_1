//merging the pdf s

const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const Merger_=async  (pdf1,pdf2) => {
  await merger.add('pdf1.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.add('pdf2.pdf');  //merge all pages. parameter is the path to file and filename.
  
  await merger.save('public/merged.pdf')
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}


export default {Merger_} ;


