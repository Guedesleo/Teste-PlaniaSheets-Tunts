const GoogleSpreadsheet  = require('google-spreadsheet');
const creds = require('./credenciais.json');
const { promisify } = require('util'); 
async function accessSpreadsheet() {
     const doc = new GoogleSpreadsheet('167rsrZz7er0JZYLO3C5DeYq-vsezjkFuy9_xQ-NkeIM');
      await doc.useServiceAccountAuth({
        client_email: creds.client_email,
        private_key: creds.private_key,
      })
      await doc.loadInfo(); 
      console.log(doc.title)
      const sheet = doc.sheetsByIndex[0]; 
      const Registro = await sheet.getRows()
      console.log(Registro)
      
}
accessSpreadsheet();


// const getDoc = async () => {
//     const doc = new GoogleSpreadsheet('167rsrZz7er0JZYLO3C5DeYq-vsezjkFuy9_xQ-NkeIM');
    
//     await doc.useServiceAccountAuth({
//         client_email: creds.client_email,
//         private_key: creds.private_key.replace(/\\n/g, '\n')
//     })
    
//     await doc.loadInfo();

//     await sheet.loadCells('A1:E10'); // loads a range of cells
//     console.log(sheet.cellStats);  

//     return doc;
// }

// let sheet; 
// getDoc().then(doc => {
 
//     sheet = doc.sheetsByIndex[0];
//     sheet.getRows().then(rows => {
//         rows.map(row => {
//             console.log(row);
//         })
//     })
 
// })