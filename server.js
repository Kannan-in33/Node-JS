const express = require('express');
const fs = require('fs');
const path = require('path');
const {google} = require('googleapis');

const port = process.env.PORT || 5000 ;
const server = express();
let currentPriceData = {};
let currentPriceData1 = {};
let currentPriceDataMid = {};
let currentPriceDataArray = {};
let currentPriceDataTable ={};
let currentVolumeDataTable = {};
let timestamp = new Date().getHours();
let cpvalues;
let cvvalues;
let cpvaluesTable;
let tempArr = [];
let tempArr2 =[];
let t = 0;
const spreadsheetId = "13BOxMT5cUoScurImRrDK0PwwLYAtV7qJiI75Knw44kQ";

server.get('/',  (req, res) => {
    getUpdatedPrice();
getUpdatedPriceTable();
getUpdatedVolomeTable();

res.sendFile(path.join(__dirname, './pages/index.html'));

});

server.get('/sector', (req, res) => {
    getUpdatedPrice();
getUpdatedPriceTable();
getUpdatedVolomeTable();
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
    if(folder == 'All'){
        console.log(folder);
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
                if (i == files.length -1 ){
                obj3 = { 
                    "company" : company,
                    "companyObject" : companyObject,
                    "volumeObject" : volumeObject,
                    "currentPriceData": currentPriceData,
                    "currentPriceData1": currentPriceData1,
                    "currentPriceDataTable":currentPriceDataTable,
                    "currentVolumeDataTable": currentVolumeDataTable,
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
                obj3 = { 
                "company" : company,
                "volumeObject" : volumeObject,                
                "companyObject" : companyObject,
                "currentPriceData" : currentPriceData,
                "currentPriceData1": currentPriceData1,
                "currentPriceDataTable":currentPriceDataTable,
                "currentVolumeDataTable":currentVolumeDataTable,
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
    getUpdatedPriceTable();
    getUpdatedVolomeTable();
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
        range: 'NSE Daily!A1:B2822', 
    });


   cpvalues = (CPdata.data.values);

   cpvalues.forEach ( (ele, i) => {
   currentPriceData[ele[0].toString().split(",")[0]] = ele[1].toString();
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

    const GsUpdate = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Bar!A1:Z2822",
    });

    cpvaluesTable = (GsUpdate.data.values);
    cpvaluesTable.forEach ( (ele, i) => {
        tempArr2 = [];
        for(let j=1; j<ele.length; j++) {
            tempArr2.push(ele[j].toString())
        }
        currentPriceDataTable[ele[0].toString().split(",")[0]] = tempArr2;
     });

    return GsUpdate;

}

getUpdatedVolomeTable =  async () =>{
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/drive",
    });

    const client = await auth.getClient();
    const googleSheets = google.sheets({
        version: "v4",
        auth: client
    });


    //  Capturing Volume Data

    const CVVdata = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'Daily Volume!A1:AA2822', 
    });

   cvvalues = (CVVdata.data.values);

cvvalues.forEach ( (ele, i) => {
    tempArr2 = [];
    for(let j = 2; j < ele.length; j++) {

            tempArr2.push(((ele[j-1] - ele[j])/1000).toString());
        
    }
    currentVolumeDataTable[ele[0].toString().split(",")[0]] = tempArr2;
 });

 return CVVdata;

}


// Try Getting data from Bar END

// if(timestamp < 18){
//     // currentPriceData1 ={};
//     setInterval(getUpdatedPriceTable, (1000 * 10 * 60));
// }
// if(timestamp > 18){
//     clearInterval(getUpdatedPriceTable);
// }

