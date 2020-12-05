const  GoogleSpreadsheet  = require('google-spreadsheet');
const creds = require('./credenciais.json');
const { promisify } = require('util'); 

const accessSpreadsheet = async () =>{
    const doc = new GoogleSpreadsheet('167rsrZz7er0JZYLO3C5DeYq-vsezjkFuy9_xQ-NkeIM');
    await promisify(doc.useServiceAccountAuth)(creds)

    const info = await promisify(doc.getInfo)()
    
    const worksheet = info.worksheets[0]

    const rows = await promisify(worksheet.getRows)({
        offset:1
    })
    rows.forEach(row => {
        console.log(row.engenhariadesoftware)
       var obj5 = {
           Aluno:row._cokwr, 
           Faltas:row._cpzh4,
           P1:row._cre1l,
           P2:row._chk2m,
           P3:row._ciyn3
       }
       console.log(obj5)
    });
}   

accessSpreadsheet();
