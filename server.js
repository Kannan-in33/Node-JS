const express = require('express');
const fs = require('fs');
const path = require('path');
const {google} = require('googleapis');
// const req = require('request');

const port = process.env.PORT || 5000 ;
const server = express();
currentPriceData = {};
currentPriceData1 = {};
currentPriceDataMid = {};
currentPriceDataArray = {};
let timestamp = new Date().getHours();
let cpvalues;
let cpvaluesTable;
let tempArr = [];
let tempArr2 =[ , ];
let t = 0;
const spreadsheetId = "13BOxMT5cUoScurImRrDK0PwwLYAtV7qJiI75Knw44kQ";

server.get('/',  (req, res) => {
getUpdatedPrice();
res.sendFile(path.join(__dirname, './pages/index.html'));

});

server.get('/sector', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/sector.html'));

});

server.get('/compare', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/compare.html'));

});

server.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/style.css'));

});
server.get('/scripts.js', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/scripts.js'));

});

server.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/favicon.ico'));

});
        
server.use( (req, res)=>{

    let obj ={};
    let obj2 = [];
    let datesObj = [];
    let company =[];
    let obj3 = {};
    let valueList = {};
    let volumeList = {};
    let companyObject = {};
    let companyDateObj = {};
    let companyList =[];
    let volumeObj =[];
    let volumeObject = {};
    
    let max = 0;
    let  companyObject2 ={};


if(req.path == '/All') {
    let j = 0;
    let k = 0;
    let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src/'));
    foldersPath.forEach( (folder, j) => {
        //  ||  folder == '401'
    if(folder == '50' || folder == '101'|| folder == '201'){
    const directorypath = path.join(__dirname, 'src/' + folder);
    fs.readdir(directorypath , function (err, files) {
    if (err) throw err;
    files.forEach( (file, i) => {
        k++;
        fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
        if (err2) throw err2;
            obj = JSON.parse(data);
            let j = 0;
            company.push(file);
            
                if(obj['datasets'].length > 0 ){
                    // valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
                    max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
                    for (let key in obj['datasets'][0]['values']) {
                            obj2.push(obj['datasets'][0]['values'][key][1]);  
                                volumeObj.push((obj['datasets'][1]['values'][key][1])/100000); 
                    }
                    companyObject[file.split('.')[0]] = [...obj2];
                    volumeObject[file.split('.')[0]] = [...volumeObj];
                    obj2 =[];
                    datesObj = [];
                    volumeObj =[];
            }
                if (i == files.length -1 && folder == '201' ){
                obj3 = { 
                    "company" : company,
                    "companyObject" : companyObject,
                    "volumeObject" : volumeObject,
                    "currentPriceData": currentPriceData,
                    "currentPriceData1": currentPriceData1,
                    "currentPriceDataMid":currentPriceDataMid,
                }
                res.send(obj3);
    }
    
    });
    
    });
    
    });

}
});  
}

else if(req.path.includes('getcompare')) {

    const directorypath = path.join(__dirname, 'SectorData');
    fs.readFile(path.join(directorypath , 'Comparison.json'), 'utf8', function (err2, data) {
        if (err2) throw err2;
        obj = JSON.parse(data);
        res.send(data);
    });
    }

else{
    let j = 0;
const directorypath = path.join(__dirname, (req.path.replace('/', 'src/').replaceAll('%20', ' ') ));
fs.readdir(directorypath , function (err, files) {
    
                if (err) throw err;
                files.forEach( (file, i) => {    
                    // console.log(file);                
                fs.readFile(path.join(directorypath , file), 'utf8', 
                function (err2, data) {
                if (err2) throw err2;
                obj = JSON.parse(data);
                company.push(file);
                if(obj['datasets'].length > 0 ){

                    valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
                    max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
                    for (let key in obj['datasets'][0]['values']) {
                    obj2.push(obj['datasets'][0]['values'][key][1]);  
                            volumeObj.push((obj['datasets'][1]['values'][key][1])/100000);                        
                    }
                    companyObject[file.split('.')[0]] = [...obj2];
                    volumeObject[file.split('.')[0]] = [...volumeObj];
                    obj2 =[];
                    datesObj = [];
                    volumeObj =[];
            }
                if (i == files.length -1 ){
                obj3 = { "company" : company,
                "volumeObject" : volumeObject,                
                "companyObject" : companyObject,
                "currentPriceData" : currentPriceData,
                "currentPriceData1": currentPriceData1,
                "currentPriceDataMid": currentPriceDataMid,
                "cpvaluesTable":cpvaluesTable,
                "timestamp": timestamp,
                }
                res.send(obj3);
                }
                });
                });

                });

                }


});

server.listen(port, () => {    
    console.log('Server is listening on port ' + port);
    getUpdatedPrice();
  //  setInterval(getUpdatedPrice, (1000 * 60  * 30));
})

// UpdateBarData

getUpdatedPrice =  async () =>{
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();
    const googleSheets = google.sheets({
        version: "v4",
        auth: client
    });

    // get details of spreadsheet

    const CPdata = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'NSE Daily', 
    });

   cpvalues = (CPdata.data.values);

   cpvalues.forEach ( (ele, i) => {
   currentPriceData[ele[0].toString().split(",")[0]] = ele[1].toString();
//    tempArr.push(ele[1].toString());
//    tempArr2[i] = ( ele[1].toString());
});

}

// Try Getting data from Bar


getUpdatedPriceTable =  async () =>{
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/drive",
    });

    const client = await auth.getClient();
    const googleSheets = google.sheets({
        version: "v4",
        auth: client
    });

    // get details of spreadsheet

    const GsUpdate = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Bar",
    });

    cpvaluesTable = (GsUpdate.data.values);
    // const script = google.script({version: 'v1', auth});
    // const scriptId = '1z9Nc-LoBXdtthz9mxzC-phETkifTxbPG_gtXca3UBwqtEksZFZiAD6hv'
    // const GsUpdate2 = await script.scripts.run({
    //     auth: auth,
    //     resource: {
    //       function: 'UpdateBarData',
    //     },
    //     scriptId: scriptId,
    //   });

    return GsUpdate;

}

getUpdatedPriceTable();
// Try Getting data from Bar END





function getDayPriceData(){

if(timestamp >= 4 && Object.keys(currentPriceData1).length == 0 ){
      t = 1;  
    cpvalues.forEach ( ele => {
        currentPriceData1[ele[0].toString().split(",")[0]] = ele[1].toString(); 
    });
}

else {
    cpvalues.forEach ( ele => {
        if(t == 1){
        tempArr = [];
        tempArr.push(ele[1]);
        currentPriceData1[ele[0]] = tempArr;
        
        }
        // currentPriceDataMid
        else if(t == 8){
            tempArr =[];
            tempArr = currentPriceData1[ele[0]];
            tempArr.push(ele[1]);
            currentPriceData1[ele[0]] = [...tempArr];
            currentPriceDataMid[ele[0]] = [ele[1]];
        }
        else if(t < 18 && t != 8){
            tempArr =[];
            tempArr = currentPriceData1[ele[0]];
            tempArr.push(ele[1]);
            currentPriceData1[ele[0]] = [...tempArr];
        }
       
    });
    t = t +1;
}


}

if(timestamp >= 1){
    // currentPriceData1 ={};
    setInterval(getUpdatedPriceTable, (1000 * 8 * 1));
}
if(timestamp > 18 || t >= 18){
    clearInterval(getDayPriceData);
}

// OLD Codes
// if(req.path == '/10x'){
//     let j = 0;
//     let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src'));

//             foldersPath.forEach( (folder, j) => {

//                 const directorypath = path.join(__dirname, 'src/' + folder);
//                 fs.readdir(directorypath , function (err, files) {
//                 if (err) throw err;
//                 files.forEach( (file, i) => {
                    
//                         fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
//                         if (err2) throw err2;
//                         obj = JSON.parse(data);
//                         company.push(file);
//                         valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
//                         max = max < obj['datasets'][1]['values'].length ? obj['datasets'][1]['values'].length : max
//                         try{
//                             obj2[0] = obj['datasets'][1]['values'][max -1][1];
//                             obj2[1] = obj['datasets'][1]['values'][max -2][1];
//                         }catch{ }
//                                 if((obj2[0]/obj2[1]) > 3){
//                                 companyObject[file.split('.')[0]] = (obj2[0]/obj2[1]).toFixed(2);
//                                 }

//                                 if( j == foldersPath.length -1 && i == files.length -1){
//                                 obj3 = { 
//                                 "companyObject" : companyObject
//                                 }
//                                 res.send(obj3);
//                                 }

//     });   });  });  })


// }

// else if(req.path.includes('getcompare')) {

// const directorypath = path.join(__dirname, 'SectorData');
// fs.readFile(path.join(directorypath , 'Comparison.json'), 'utf8', function (err2, data) {
//     if (err2) throw err2;
//     // console.log(data);
//     obj = JSON.parse(data);
//     res.send(data);
// });
// }

// else 

// END OF OLD CODES
