"use strict";

const express = require('express');
const fs = require('fs');
const path = require('path');
const {google} = require('googleapis');
const { isNumberObject } = require('util/types');

const port = process.env.PORT || 5000 ;
const server = express();
let currentPriceData = {};
let currentPriceData1 = {};
let currentPriceDataMid = {};
let currentPriceDataArray = {};
let currentPriceDataTable ={};
let currentVolumeDataTable = {};
let previousDayVolumeDataTable = {};
let timestamp = new Date().getHours();
let cpvalues;
let cvvalues;
let copvalues;
let cpvaluesTable;
let closeOpenPriceData = [];
let highPriceData = [];
let lowPriceData = [];
let closeOpenPriceDataObject = {};
let tempArr = [];
let tempArr2 =[];
let t = 0;
let longterm =[];
let FivePerData = [];
let getFiveMinVolumeData = {};
let getFiveMinVolumeValues ;



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
let lastFiveOpenClose = {};
let getFiveDayCloseOpenValues;
let test = 0;

const spreadsheetId = "13BOxMT5cUoScurImRrDK0PwwLYAtV7qJiI75Knw44kQ";

// Get CloseAndOpenPriceData

const getCloseOpenPrice =  async () =>{
    // console.log(closeOpenPriceData.length);
             if( closeOpenPriceData.length == 0){
                        
                    const auth = new google.auth.GoogleAuth({
                        keyFile: "credentials.json",
                        scopes: "https://www.googleapis.com/auth/spreadsheets",
                    });
                    const client = await auth.getClient();
                    const googleSheets = google.sheets({
                        version: "v4",
                        auth: client
                    });
                    const closeOpenPrice = await googleSheets.spreadsheets.values.get({
                        auth,
                        spreadsheetId,
                        range: 'DailyGainers!A2:V2396', 
                    });
                    highPriceData =[];
        copvalues = (closeOpenPrice.data.values);    
            copvalues.forEach ( (ele, i) => {
                closeOpenPriceDataObject[ele[0]] = copvalues[i];
                let yday = copvalues[i][3];
                let tday = copvalues[i][1];           
                if( !isNaN(yday) && !isNaN(tday) ){                    
                if((((tday - yday)/yday) * 100).toFixed(1) > 2) {                    
                    closeOpenPriceData.push(ele[0]);
                }
            }

            let currentPrice = ele[2];
            let highPrice = ele[4];
            let lowPrice = ele[5];
            if( currentPrice > 0 && (currentPrice == highPrice ||  highPrice <= ( currentPrice * 1.03))){
                highPriceData.push(ele[0]);
                // console.log(ele[0] + ' highPrice = ' + highPrice + ' currentPrice =' + currentPrice);
            }
            if( (currentPrice > 0) && ( lowPrice >= (currentPrice * 0.9))){

                // console.log(ele[0] + '  ' + lowPrice +  '    '  + currentPrice * 0.9);
                lowPriceData.push(ele[0]);
                // console.log(ele[0] + ' highPrice = ' + highPrice + ' currentPrice =' + currentPrice);
            }

});

}
}

// Last Five Close Open Data
const getLastCloseOpenPrice =  async () =>{
                       
                    const auth = new google.auth.GoogleAuth({
                        keyFile: "credentials.json",
                        scopes: "https://www.googleapis.com/auth/spreadsheets",
                    });
                    const client = await auth.getClient();
                    const googleSheets = google.sheets({
                        version: "v4",
                        auth: client
                    });
                    const lastFiveCloseOpenPrice = await googleSheets.spreadsheets.values.get({
                        auth,
                        spreadsheetId,
                        range: 'Open-Close!A1:V2396',
                    });

                    getFiveDayCloseOpenValues = (lastFiveCloseOpenPrice.data.values);   
                    getFiveDayCloseOpenValues.forEach ( (ele, i) => {
            tempArr2 = [];
           
                    tempArr2.push((((ele[2] - ele[3])/ele[3]) * 100).toFixed(1));
                    tempArr2.push((((ele[4] - ele[5])/ele[5]) * 100).toFixed(1));
                    tempArr2.push((((ele[6] - ele[7])/ele[7]) * 100).toFixed(1));
                    tempArr2.push((((ele[8] - ele[9])/ele[9]) * 100).toFixed(1));
                    tempArr2.push((((ele[10] - ele[11])/ele[11]) * 100).toFixed(1));
                    tempArr2.push((((ele[12] - ele[11])/ele[13]) * 100).toFixed(1));
                    tempArr2.push((((ele[14] - ele[11])/ele[15]) * 100).toFixed(1));
                    tempArr2.push((((ele[16] - ele[11])/ele[17]) * 100).toFixed(1));
                    tempArr2.push((((ele[18] - ele[11])/ele[19]) * 100).toFixed(1));
                    tempArr2.push((((ele[20] - ele[11])/ele[21]) * 100).toFixed(1));
        
                    lastFiveOpenClose[ele[0]] = tempArr2;

                } );


}

const getFiveMinVolume =  async () =>{
    // console.log(closeOpenPriceData.length);
             if( closeOpenPriceData.length == 0){
                        
                    const auth = new google.auth.GoogleAuth({
                        keyFile: "credentials.json",
                        scopes: "https://www.googleapis.com/auth/spreadsheets",
                    });
                    const client = await auth.getClient();
                    const googleSheets = google.sheets({
                        version: "v4",
                        auth: client
                    });
                    const getFiveMinVolumeGdata = await googleSheets.spreadsheets.values.get({
                        auth,
                        spreadsheetId,
                        range: '5-min-Volume!A1:E2396', 
                    });

                    getFiveMinVolumeValues = (getFiveMinVolumeGdata.data.values);   
                    getFiveMinVolumeValues.forEach ( (ele, i) => {
            tempArr2 = [];
                    tempArr2.push(ele[1].toString());
                    tempArr2.push(ele[2].toString())
                    tempArr2.push(ele[3].toString())
                    tempArr2.push(ele[4].toString())
        
                    getFiveMinVolumeData[ele[0]] = tempArr2;
        //    console.log(ele[0] + '   '  + get5MinVolumeData[ele[0]][0] );
        });         
}
}

getFiveMinVolume();
// UpdateBarData Returns currentPriceData = {}

const getUpdatedPrice =  async () =>{
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
        range: 'NSE Daily!A1:E2396', 
    });


   cpvalues = (CPdata.data.values);

   cpvalues.forEach ( (ele, i) => {
    tempArr2 = [];
            tempArr2.push(ele[1].toString());
            tempArr2.push(ele[2].toString())
            tempArr2.push(ele[3].toString())
            tempArr2.push(ele[4].toString())

   currentPriceData[ele[0]] = tempArr2;
});


}



// Get Five Per Data FivePerData = []

const getFivePercent =  async () =>{
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
        range: 'NSE Daily!A1:E2396', 
    });

   cpvalues = (CPdata.data.values);
    let dt = new Date();
        let d = dt.getHours();
        let m = dt.getMinutes();

   cpvalues.forEach ( (ele, i) => {
    FivePerData.push([ele[0]]);        
});

// console.log(FivePerData);

}
getFivePercent();



// Try Getting data from Bar Day's Price data currentPriceDataTable = {}
const getUpdatedPriceTable =  async () =>{
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
        range: "Bar!A1:BZ2396",
    });

    cpvaluesTable = (GsUpdate.data.values);
    cpvaluesTable.forEach ( (ele, i) => {
        tempArr2 = [];
        for(let j = 1; j < ele.length ; j++) {
            tempArr2.push(ele[j].toString())
        }
        currentPriceDataTable[ele[0].toString().split(",")[0]] = tempArr2.reverse();
     });

    return GsUpdate;

}



// Try Getting data from Bar Day's Volume data currentVolumeDataTable = {}

const getUpdatedVolomeTable =  async () =>{
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
        range: 'Daily Volume!A1:BZ2396', 
    });
    // console.log('log: ' + CVVdata);

   cvvalues = (CVVdata.data.values);
    cvvalues.forEach ( (ele, i) => {
    tempArr2 = [];
    
        // console.log(ele[0].toString().split(",")[0]);
    for(let j = 1; j < ele.length ; j++) {
        tempArr2.push(ele[j]);        
    }

    // for(let k = 0; k < 3; k++) {
        // tempArr2.push((getFiveMinVolumeData[ele[0]])[k]);
    // }


    currentVolumeDataTable[ele[0]] = tempArr2.reverse();
 });

 return CVVdata;

}


const getPreviousUpdatedVolomeTable =  async () =>{
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

    const CVVdataP = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'Pre Volume!A1:BZ2396', 
    });
    // console.log('log: ' + CVVdata);

   cvvalues = (CVVdataP.data.values);
    cvvalues.forEach ( (ele, i) => {
    tempArr2 = [];
    
        // console.log(ele[0].toString().split(",")[0]);
    for(let j = 1; j < ele.length ; j++) {
        tempArr2.push(ele[j]);        
    }

    // for(let k = 0; k < 3; k++) {
        // tempArr2.push((getFiveMinVolumeData[ele[0]])[k]);
    // }


    previousDayVolumeDataTable[ele[0]] = tempArr2.reverse();
 });

 return CVVdataP;

}


function getlongtermarray(){
    const directorypath = path.join(__dirname, 'SectorData');
    fs.readFile(path.join(directorypath , 'ComparisonVolume.json'), 'utf8', function (err2, data) {
        if (err2) throw err2;
        obj = JSON.parse(data);
        for (const key in obj){
            longterm.push(key);
        }
    });
}

getCloseOpenPrice();
getUpdatedPrice();
// console.log(getUpdatedPriceTable());
// console.log(getUpdatedVolomeTable());
// getlongtermarray();

server.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/favicon.ico'));

});

server.get('/',  (req, res) => {
res.sendFile(path.join(__dirname, './pages/index.html'));

});

server.get('/allv', (req, res) => {

    res.sendFile(path.join(__dirname, './pages/allv.html'));

});
server.get('/all8', (req, res) => {

    res.sendFile(path.join(__dirname, './pages/all8.html'));

});
server.get('/store', (req, res) => {

    res.sendFile(path.join(__dirname, './pages/store.html'));

});
server.get('/allp', (req, res) => {

    res.sendFile(path.join(__dirname, './pages/allp.html'));

});
server.get('/alln', (req, res) => {

    res.sendFile(path.join(__dirname, './pages/alln.html'));

});
server.get('/sell', (req, res) => {

    res.sendFile(path.join(__dirname, './pages/sell.html'));

});
server.get('/home', (req, res) => {

    res.sendFile(path.join(__dirname, './pages/home.html'));

});
server.get('/sector', (req, res) => {

    res.sendFile(path.join(__dirname, './pages/sector.html'));

});

server.get('/openg', (req, res) => {
    
    res.sendFile(path.join(__dirname, './pages/openg.html'));

});

server.get('/fav', (req, res) => {

    res.sendFile(path.join(__dirname, './pages/fav.html'));

});

server.get('/compare', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/compare.html'));

});

server.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/style.css'));

});
server.get('/common.js', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/common.js'));

});
server.get('/buttons.js', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/buttons.js'));

});
server.get('/scripts.js', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/scripts.js'));

});
server.get('/fivescripts.js', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/fivescripts.js'));

});
server.get('/fscripts.js', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/fscripts.js'));

});

server.get('/high', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/high.html'));

});

server.get('/low', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/low.html'));

});

server.get('/volume', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/volume.html'));

});
server.get('/lt', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/lt.html'));

});




server.use( (req, res)=>{

// console.log(req.path);




if(req.path.includes('getcompare')) {
        const directorypath = path.join(__dirname, 'SectorData');
        fs.readFile(path.join(directorypath , 'Comparison.json'), 'utf8', function (err2, data) {
            if (err2) throw err2;
            obj = JSON.parse(data);
            res.send(data);
        });
        }

// Get FivePer

else if(req.path.includes('getFivePer')) {
    let ARR = [...FivePerData];
                

                obj3 = { 
                    "companyList" : FivePerData,
                    "currentPriceData": currentPriceData,
                    "currentPriceDataTable":currentPriceDataTable,
                    "currentVolumeDataTable": currentVolumeDataTable,
                    "getFiveMinVolumeData" : getFiveMinVolumeData,
                    "closeOpenPriceDataObject": closeOpenPriceDataObject,
                    "lastFiveOpenClose":lastFiveOpenClose,
                    "previousDayVolumeDataTable": previousDayVolumeDataTable,
                    
                }
                // console.log(obj3);
                res.send(obj3);
    }
    


// Get FivePer End


        // Long Term
//   else if(req.path.includes('longterm')) { 
   
//     let ARR = [...longterm];
//     let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src/'));
//     foldersPath.forEach( (folder, j) => {
//     if(folder == 'All'){ 
//     const directorypath = path.join(__dirname, 'src/' + folder);
//     fs.readdir(directorypath , function (err, files) {
//     if (err) throw err;
//     for(let j = 1; j < ARR.length; j++){
//         // console.log(ARR[j]);
//     files.forEach( (file, i) => {
        
//         if (file.split('.')[0] == ARR[j]){
//         fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
//         if (err2) throw err2;
//             obj = JSON.parse(data);
//             let j = 0;
//             company.push(file);
            
//                 if(obj['datasets'].length > 0 ){
                    
//                     // valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
//                     max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
                    
//                     for (let key in obj['datasets'][0]['values']) {
//                         // console.log(obj['datasets'][1]['values'][key][1]["delivery"]);
//                             obj2.push(obj['datasets'][0]['values'][key][1]);  
//                                 volumeObj.push((obj['datasets'][1]['values'][key][1])); 
//                     }


//                     companyObject[file.split('.')[0]] = [...obj2];
//                     volumeObject[file.split('.')[0]] = [...volumeObj];
//                     obj2 =[];
//                     datesObj = [];
//                     volumeObj =[];
//             }

//                 if (i == 10) {
//                     // console.log(i);
//                 obj3 = { 
//                     "company" : company,
//                     "companyObject" : companyObject,
//                     "volumeObject" : volumeObject,
//                     "currentPriceData": currentPriceData,
//                     "currentPriceData1": currentPriceData1,
//                     "currentPriceDataTable":currentPriceDataTable,
//                     "currentVolumeDataTable": currentVolumeDataTable,
//                     "closeOpenPriceDataObject": closeOpenPriceDataObject,
//                     "longterm":longterm,
//                 }
//                 res.send(obj3);
//     }
    
//     });
    
// }

//     });
    
// }

//     });

// }
// });  
// Long Term End
// console.log(ARR); 
            // }

// Volume page data

// else if(req.path.includes('volumedata')) {
       
//     let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src/'));
//     foldersPath.forEach( (folder, j) => {
//         //  ||  folder == '401'
//     if(folder == 'All'){  // 'All
//     const directorypath = path.join(__dirname, 'src/' + folder);
//     fs.readdir(directorypath , function (err, files) {
//     if (err) throw err;

//     files.forEach( (file, i) => {
        
//         fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
//         if (err2) throw err2;
//             obj = JSON.parse(data);
//             let j = 0;
//             company.push(file);
            
//                 if(obj['datasets'].length > 0 ){
//                     let pos = obj['datasets'][0]['values'].length - 1;
//                     // let todayPrice = obj['datasets'][0]['values'][pos][1];
//                     // let dma200 = obj['datasets'][2]['values'][pos][1];

//                     if(true){ // todayPrice >= dma200
//                     // valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
//                     max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
//                     let MAXI = [];
//                     let flag = 0;
//                     let Max2 = 0;
//                     for (let keyItem in obj['datasets'][0]['values']) {
//                         let value = obj['datasets'][1]['values'][keyItem][1];
//                         let delivery = obj['datasets'][1]['values'][keyItem][2]['delivery']
                        
//                         MAXI.push(value * delivery);
//                             obj2.push(obj['datasets'][1]['values'][keyItem][1]); 
                             
//                     }
                    
//                     let MAXI2 = MAXI.sort((a, b) => b - a);
//                     let maxiLength = MAXI.length;
//                     if((MAXI2[0] > 5 ) && (MAXI2[0] >= (8 * MAXI2[1]))){ 
          
//                         companyObject[file.split('.')[0]] = [...obj2];
//                         volumeObject[file.split('.')[0]] = [...volumeObj];
//                     }
                    
//                     obj2 =[];
//                     datesObj = [];
//                     volumeObj =[];
//                 }
//             }

//                 if (i == files.length -1 ){
//                 obj3 = { 
//                     "company" : company,
//                     "companyObject" : companyObject,
//                     "volumeObject" : volumeObject,
//                     "currentPriceData": currentPriceData,
//                     "currentPriceData1": currentPriceData1,
//                     "currentPriceDataTable":currentPriceDataTable,
//                     "currentVolumeDataTable": currentVolumeDataTable,
//                     "closeOpenPriceDataObject": closeOpenPriceDataObject,
//                     "highPriceData":highPriceData,
//                 }
//                 res.send(obj3);
//     }
    
//     });
    

//     });
    


//     });

// }
// });  
// }

// Volume Page End


// High page data

// else if(req.path.includes('highp')) {
//     let ARR = [...highPriceData];        
//     let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src/'));
//     foldersPath.forEach( (folder, j) => {
//         //  ||  folder == '401'
//     if(folder == 'All'){  // 'All
//     const directorypath = path.join(__dirname, 'src/' + folder);
//     fs.readdir(directorypath , function (err, files) {
//     if (err) throw err;
//     for(let j = 1; j < ARR.length; j++){
//     files.forEach( (file, i) => {
        
//         if (file.split('.')[0] == ARR[j]){
//         fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
//         if (err2) throw err2;
//             obj = JSON.parse(data);
//             let j = 0;
//             company.push(file);
            
//                 if(obj['datasets'].length > 0 ){
                    
//                     // valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
//                     max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
                    
//                     for (let key in obj['datasets'][0]['values']) {
//                         // console.log(obj['datasets'][1]['values'][key][1]["delivery"]);
//                             obj2.push(obj['datasets'][0]['values'][key][1]);  
//                                 volumeObj.push((obj['datasets'][1]['values'][key][1])); 
//                     }


//                     companyObject[file.split('.')[0]] = [...obj2];
//                     volumeObject[file.split('.')[0]] = [...volumeObj];
//                     obj2 =[];
//                     datesObj = [];
//                     volumeObj =[];
//             }

//                 if (file.split('.')[0] == ARR[ARR.length - 1] ){
//                 obj3 = { 
//                     "company" : company,
//                     "companyObject" : companyObject,
//                     "volumeObject" : volumeObject,
//                     "currentPriceData": currentPriceData,
//                     "currentPriceData1": currentPriceData1,
//                     "currentPriceDataTable":currentPriceDataTable,
//                     "currentVolumeDataTable": currentVolumeDataTable,
//                     "closeOpenPriceDataObject": closeOpenPriceDataObject,
//                     "highPriceData":highPriceData,
//                 }
//                 res.send(obj3);
//     }
    
//     });
    
// }

//     });
    
// }

//     });

// }
// });  
// }

// High Page End

// Low page data

// else if(req.path.includes('low52')) {
    
//     let ARR = [...lowPriceData]; 
//     // console.log(ARR);   
//     let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src/'));
//     foldersPath.forEach( (folder, j) => {
//         //  ||  folder == '401'
//     if(folder == 'All'){  // 'All
//     const directorypath = path.join(__dirname, 'src/' + folder);
//     fs.readdir(directorypath , function (err, files) {
//     if (err) throw err;
//     for(let j = 0; j < ARR.length -1 ; j++){
//     files.forEach( (file, i) => {
        
//         if (file.split('.')[0] == ARR[j]){
//         fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
//         if (err2) throw err2;
//             obj = JSON.parse(data);
//             let j = 0;
//             company.push(file);
            
//                 if(obj['datasets'].length > 0 ){
//                     // valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
//                     max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
//                     for (let key in obj['datasets'][0]['values']) {
//                         // console.log(obj['datasets'][1]['values'][key][1]["delivery"]);
//                             obj2.push(obj['datasets'][0]['values'][key][1]);  
//                                 volumeObj.push((obj['datasets'][1]['values'][key][1])); 
//                     }
//                     companyObject[file.split('.')[0]] = [...obj2];
//                     volumeObject[file.split('.')[0]] = [...volumeObj];
//                     obj2 =[];
//                     datesObj = [];
//                     volumeObj =[];
//             }

//                 if (file.split('.')[0] == ARR[ARR.length - 2] ){
//                 obj3 = { 
//                     "company" : company,
//                     "companyObject" : companyObject,
//                     "volumeObject" : volumeObject,
//                     "currentPriceData": currentPriceData,
//                     "currentPriceData1": currentPriceData1,
//                     "currentPriceDataTable":currentPriceDataTable,
//                     "currentVolumeDataTable": currentVolumeDataTable,
//                     "closeOpenPriceDataObject": closeOpenPriceDataObject,
//                     "lowPriceData":lowPriceData,
                    
//                 }
//                 res.send(obj3);
//     }
    
//     });
    
// }

//     });
    
// }

//     });

// }
// });  
// }

// Low Page End

// Open page data

// else if(req.path.includes('open')) {
//     let ARR = [...closeOpenPriceData];        
//     // console.log(ARR.length);
//     let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src/'));
//     foldersPath.forEach( (folder, j) => {
//         //  ||  folder == '401'
//     if(folder == 'All'){  // 'All
//     const directorypath = path.join(__dirname, 'src/' + folder);
//     fs.readdir(directorypath , function (err, files) {
//     if (err) throw err;
//     for(let j = 1; j < ARR.length; j++){
//     files.forEach( (file, i) => {
        
//         if (file.split('.')[0] == ARR[j]){
//         fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
//         if (err2) throw err2;
//             obj = JSON.parse(data);
//             let j = 0;
//             company.push(file);
            
//                 if(obj['datasets'].length > 0 ){
//                     // valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
//                     max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
//                     for (let key in obj['datasets'][0]['values']) {
//                             obj2.push(obj['datasets'][0]['values'][key][1]);  
//                                 volumeObj.push((obj['datasets'][1]['values'][key][1])); 
//                     }
//                     companyObject[file.split('.')[0]] = [...obj2];
//                     volumeObject[file.split('.')[0]] = [...volumeObj];
//                     obj2 =[];
//                     datesObj = [];
//                     volumeObj =[];
//             }
            
//                 if (file.split('.')[0] == ARR[ARR.length - 1] ){
//                 obj3 = { 
//                     "company" : company,
//                     "companyObject" : companyObject,
//                     "volumeObject" : volumeObject,
//                     "currentPriceData": currentPriceData,
//                     "currentPriceData1": currentPriceData1,
//                     "currentPriceDataTable":currentPriceDataTable,
//                     "currentVolumeDataTable": currentVolumeDataTable,
//                     "closeOpenPriceDataObject": closeOpenPriceDataObject,
//                     "closeOpenPriceData":closeOpenPriceData,
//                 }
//                 res.send(obj3);
//     }
    
//     });
    
// }

//     });
    
// }

//     });

// }
// });  
// }

// Open Page End
else if(req.path == '/All') {
    let j = 0;
    let k = 0;
    let flag = 0;
    

    let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src/'));
    foldersPath.forEach( (folder, j) => {
        //  ||  folder == '401'
    if(folder == 'All'  ){  // 'All ||  folder == '201'  ||  folder == '401'
    const directorypath = path.join(__dirname, 'src/' + folder);
    fs.readdir(directorypath , function (err, files) {
    if (err) throw err;
    files.forEach( (file, i) => {
        
        
        fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
        if (err2) throw err2;
            obj = JSON.parse(data);
            j++;
            company.push(file);
                if(obj['datasets'].length > 0 ){
                    // valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
                    max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
                    for (let key in obj['datasets'][0]['values']) {
                            obj2.push(obj['datasets'][0]['values'][key][1]);  
                                volumeObj.push((obj['datasets'][1]['values'][key][1])); 
                    }
                    // console.log(file.split('.')[0]);
                    for (let key in obj['datasets'][1]['values']) {
                        // obj2.push(obj['datasets'][0]['values'][key][1]);  
                            volumeObj.push((obj['datasets'][1]['values'][key][1])); 
                }

                // console.log(file.split('.')[0]);
                    companyObject[file.split('.')[0]] = [...obj2];
                    volumeObject[file.split('.')[0]] = [...volumeObj];
                    obj2 =[];
                    datesObj = [];
                    volumeObj =[];
            }
            // console.log(k)
            
                if (i >= 500 && flag == 0){
                    flag = 1;
                obj3 = { 
                    "company" : company,
                    "companyObject" : companyObject,
                    "volumeObject" : volumeObject,
                    "currentPriceData": currentPriceData,
                    "currentPriceData1": currentPriceData1,
                    "currentPriceDataTable":currentPriceDataTable,
                    "currentVolumeDataTable": currentVolumeDataTable,
                    "closeOpenPriceDataObject": closeOpenPriceDataObject,
                    "lastFiveOpenClose": lastFiveOpenClose,
                    "previousDayVolumeDataTable": previousDayVolumeDataTable,
                }
                res.send(obj3);
                
    }
    
    });
    
    });
    
    });

}
});  
}


// Favourite Page Start

else if(req.path.includes(',')) {
    companyObject ={};
        let ARR = ([...req.path.replaceAll('/','').split(',')]); 
        let k = 1;
        // console.log(ARR);
        let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src/'));
        foldersPath.forEach( (folder, j) => {
        if(folder == 'All'){ 
        const directorypath = path.join(__dirname, 'src/' + folder);
        fs.readdir(directorypath , function (err, files) {
        if (err) throw err;
        // for(let j = 1; j < ARR.length; j++){
        files.forEach( (file, i) => {
            // console.log(k, file, ARR[k]);
            
            if ((file.split('.')[0]) == (ARR[k])){       
                if(k <= ARR.length -1){
                    k++;
                  } 
            fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
            if (err2) throw err2;
                obj = JSON.parse(data);
                let j = 0;
                company.push(file);
                // console.log(ARR);
                            if(obj['datasets'].length > 0 ){
                                    max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
                                    for (let key in obj['datasets'][0]['values']) {
                                        obj2.push(obj['datasets'][0]['values'][key][1]);  
                                        volumeObj.push((obj['datasets'][1]['values'][key][1])); 
                                    }
                                    companyObject[file.split('.')[0]] = [...obj2];
                                    volumeObject[file.split('.')[0]] = [...volumeObj];
                                    obj2 =[];
                                    datesObj = [];
                                    volumeObj =[];
                            }
                    if (file.split('.')[0] == ARR[ARR.length - 1] ){
                                        obj3 = { 
                                            "company" : company,
                                            "companyObject" : companyObject,
                                            "volumeObject" : volumeObject,
                                            "currentPriceData": currentPriceData,
                                            "currentPriceData1": currentPriceData1,
                                            "currentPriceDataTable":currentPriceDataTable,
                                            "currentVolumeDataTable": currentVolumeDataTable,
                                            "closeOpenPriceDataObject": closeOpenPriceDataObject,
                                            "lastFiveOpenClose": lastFiveOpenClose,
                                            "previousDayVolumeDataTable": previousDayVolumeDataTable,
                                        }
                                        res.send(obj3);
                                        return;
                                        }

        
        
        });
        
    }    



        });
        
    // }

        });
    
    }
    });  
    }

// Favourite Page End

// Favourite Page Start

else if(req.path.includes('.')) {
    companyObject = {};
    let ARR = ([...req.path.replaceAll('/','').split('.')]); 
    console.log(ARR[1]); 
    let AAR2 = [];      
    // req.params()
    let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src/'));
    foldersPath.forEach( (folder, j) => {
        //  ||  folder == '401'
    if(folder == 'All'){  // 'All
    const directorypath = path.join(__dirname, 'src/' + folder);
    fs.readdir(directorypath , function (err, files) {
    if (err) throw err;
    files.forEach( (file, i) => {
        console.log(file);
        if(file.includes(ARR[1])){
            AAR2.push(file.split('.')[0]);
        }
    });
    console.log(AAR2.length);
    for(let j = 0; j < AAR2.length -2 ; j++){
    files.forEach( (file, i) => {
        // console.log(i , AAR2[j]);
        if ((file.split('.')[0]).includes(AAR2[j])){
            // console.log(file)
        fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
        if (err2) throw err2;
            obj = JSON.parse(data);
            let j = 0;
            company.push(file);
            // console.log(company);
                if(obj['datasets'].length > 0 ){
                    // valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
                    max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
                    for (let key in obj['datasets'][0]['values']) {
                            obj2.push(obj['datasets'][0]['values'][key][1]);  
                                volumeObj.push((obj['datasets'][1]['values'][key][1])); 
                    }
                    companyObject[file.split('.')[0]] = [...obj2];
                    volumeObject[file.split('.')[0]] = [...volumeObj];
                    obj2 =[];
                    datesObj = [];
                    volumeObj =[];
            }
                if (file.split('.')[0] == AAR2[AAR2.length - 3] ){
                obj3 = { 
                    "company" : company,
                    "companyObject" : companyObject,
                    "volumeObject" : volumeObject,
                    "currentPriceData": currentPriceData,
                    "currentPriceData1": currentPriceData1,
                    "currentPriceDataTable":currentPriceDataTable,
                    "currentVolumeDataTable": currentVolumeDataTable,
                    "closeOpenPriceDataObject": closeOpenPriceDataObject,
                    "lastFiveOpenClose": lastFiveOpenClose,
                    "previousDayVolumeDataTable": previousDayVolumeDataTable,
                }
                // console.log(obj3);
                res.send(obj3);
    }
    
    });
    
}    

    });
    
}

    });

}
});  
}

// Favourite Page End

else{
    let j = 0;
const directorypath = path.join(__dirname, (req.path.replace('/', 'src/').replaceAll('%20', ' ') ));
companyObject = {};
// console.log(directorypath);
fs.readdir(directorypath , function (err, files) {    
                if (err) throw err;
                files.forEach( (file, i) => {    
                    
                    // return file;                
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
                            volumeObj.push((obj['datasets'][1]['values'][key][1]));                        
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
                "closeOpenPriceDataObject": closeOpenPriceDataObject,
                "previousDayVolumeDataTable": previousDayVolumeDataTable,
                }
                res.send(obj3);
                }
                });
                });

                });

                }


});

function runAfterFiveMinutes(){
getCloseOpenPrice();
getUpdatedPrice();
getUpdatedPriceTable();
getUpdatedVolomeTable();
}

server.listen(port, () => {    
    console.log('Server is listening on port ' + port);
    getPreviousUpdatedVolomeTable();
    runAfterFiveMinutes();
    setInterval(runAfterFiveMinutes, 1000 * 60);
    getLastCloseOpenPrice();
    // setInterval(getFiveMinVolume, 1000);

})

