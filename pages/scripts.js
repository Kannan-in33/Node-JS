let dCompanyObject = {};
let dVolumeObject = {};
let dCompanyDateObject = {};
let x10dCompanyObject = {};
let dE;
let BuyObject40 = {};
let BuyObject30 = {};
let BuyObject20 = {};
let BuyObject3Avg = {};
let compareList =[];
let companyDetails = [];
let positive0 = []; 
let positiveCompany0 = {};
let positive1 = [];
let positiveCompany1 = {};
let negativeList1 = [];
let negativeCompany1 = {};
let negativeList0 = [];
let negativeCompany0 = {};
let positive2 = [];
let positiveCompany2 = {};
let negativeList2 = [];
let negativeCompany2 = {};
let positive3 = [];
let positiveCompany3 = {};
let negativeList3 = [];
let negativeCompany3 = {};
let positive4 = [];
let positiveCompany4 = {};
let negativeList4 = [];
let negativeCompany4 = {};
let positive5 = [];
let positiveCompany5 = {};
let negativeList5 = [];
let negativeCompany5 = {};
let CurrentPriceObj = {};
let currentPriceData1 = {};
let currentPriceDataMid = {};
let currentPriceDataTable = {};
let currentVolumeDataTable = {};
let positive = [];
let positiveCompany = {};
let Masterpositive = [];
let MasterpositiveCompany = {};
let Masterpositive1 = [];
let MasterpositiveCompany1 = {};
let Masterpositive2 = [];
let MasterpositiveCompany2 = {};
let Masterpositive3 = [];
let MasterpositiveCompany3 = {};
let MasterdCompanyObject = {};
let MasterdCompanyObjectCopy = {};
let longtermData = [];
let MasterNegative = [];
let MasterNegativeCompany = {};
let MasterNegative1 = [];
let MasterNegativeCompany1 = {};
let MasterNegative2 = [];
let MasterNegativeCompany2 = {};
let MasterNegative3 = [];
let MasterNegativeCompany3 = {};
let positiveCompanyObject = {};
let DAmFlag = 0;
let negative = [];
let negativeCompany = {};
let upvalue0 = 0;
let downvalue0 = 0;
let upvalue1 = 0;
let downvalue1 = 0;
let upvalue2 = 0;
let downvalue2 = 0;
let upvalue3 = 0;
let downvalue3 = 0;
let upvalue4 = 0;
let downvalue4 = 0;
let upvalue5 = 0;
let downvalue5 = 0;
let checknum = 0;
let closeOpenPriceData = [];
let closeOpenPriceDataObject = {};
let getCompareObject = {};
let highPriceData = [];
let lowPriceData = [];
let BuyObject52High = {};

let rupee = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumSignificantDigits: 3,
    
});

function getCompare() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/getcompare");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
      getCompareObject = xhr.response;
  } 
  else {
      console.log(`Error: ${xhr.status}`);
      }
  };
}
getCompare();


function updateCompanyDeatils(){


upvalue0 = 0;
downvalue0 = 0;
upvalue1 = 0;
downvalue1 = 0;
upvalue2 = 0;
downvalue2 = 0;
upvalue3 = 0;
downvalue3 = 0;
upvalue4 = 0;
downvalue4 = 0;
upvalue5 = 0;
downvalue5 = 0;
  
// let positivelength = positive0.length;

// for(let p = 0; p < positivelength; p++) {
//   positive0.pop();
// }

// let negativeListlength = negativeList0.length

// for(let n = 0; n < negativeListlength; n++) {
//   negativeList0.pop();
// }

// // 1***********************
// positivelength = positive1.length;

// for(let p = 0; p < positivelength; p++) {
//   positive1.pop();
// }

// negativeListlength = negativeList1.length

// for(let n = 0; n < negativeListlength; n++) {
//   negativeList1.pop();
// }
// // / END 1***************************

// positivelength = positive2.length;

// for(let p = 0; p < positivelength; p++) {
//   positive2.pop();
// }

// negativeListlength = negativeList2.length

// for(let n = 0; n < negativeListlength; n++) {
//   negativeList2.pop();
// }



// // END 2***************************

// positivelength = positive3.length;

// for(let p = 0; p < positivelength; p++) {
//   positive3.pop();
// }

// negativeListlength = negativeList3.length

// for(let n = 0; n < negativeListlength; n++) {
//   negativeList3.pop();
// }

// // END 3******************************

// positivelength = positive4.length;

// for(let p = 0; p < positivelength; p++) {
//   positive4.pop();
// }

// negativeListlength = negativeList4.length

// for(let n = 0; n < negativeListlength; n++) {
//   negativeList4.pop();
// }

// // END 4 ******************************


// positivelength = positive5.length;

// for(let p = 0; p < positivelength; p++) {
//   positive5.pop();
// }

// negativeListlength = negativeList5.length

// for(let n = 0; n < negativeListlength; n++) {
//   negativeList5.pop();
// }

// END 5 ******************************

  for(let d = 0 ; d < companyDetails.length ; d++) {
    
if (document.querySelectorAll('[id="'+ companyDetails[d].toString().replace("&"," ")  + '"]').length > 0 &&  document.querySelectorAll('[id="'+ companyDetails[d] + '"] .right .block1').length == 0){

if (JSON.stringify(getCompareObject).includes([companyDetails[d]])){
let divtag0 = document.createElement("div");
  divtag0.setAttribute("class", "block1");
  document.querySelector('[id="'+ companyDetails[d] + '"] .right').appendChild(divtag0);

let divtag = document.createElement("div");
    divtag.setAttribute("class", "dayComp");

// Start UPDTAE CURRENT and 1 Data************************************************

let divtagDC = document.createElement("div");
divtagDC.setAttribute("class", "dayCompare");
let complen = dCompanyObject[companyDetails[d]].length -1 ;
let tday;
let yday;
// DC data
if(Object.keys(currentPriceDataMid).length < 20){
  tday = CurrentPriceObj[companyDetails[d]][0];
  yday = (dCompanyObject[companyDetails[d]][complen]);
}
else{
  tday = currentPriceDataMid[companyDetails[d]];
  yday = (dCompanyObject[companyDetails[d]][complen]);
}
if(tday !== undefined ){
 checknum = checkPercent(tday, yday) ;
    if ((((tday - yday) / yday) * 100) < 0){
      divtagDC.classList.add("downTrend0");  
      divtagDC.id = companyDetails[d];
    }
    else{
      divtagDC.classList.add("upTrend0");
      divtagDC.id = companyDetails[d];
      
    }

divtagDC.innerText = Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag.appendChild(divtagDC);
}


if(Object.keys(currentPriceDataMid).length > 20){
  tday = CurrentPriceObj[companyDetails[d]];
  yday = currentPriceDataMid[companyDetails[d]];
  let divtagLC = document.createElement("div");
  divtagLC.setAttribute("class", "LCompare");

if(tday !== undefined ){
 checknum = checkPercent(tday, yday) ;
    if ((((tday - yday) / yday) * 100) < 0){
      divtagLC.classList.add("downTrend0");  
    }
    else{
      divtagLC.classList.add("upTrend0");
    }

    divtagLC.innerText = Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag.appendChild(divtagLC);
}

}



divtag0.appendChild(divtag);

// **************************************update Current and 1 data END************************************




// divtag.setAttribute("class", "Company");
// divtag.innerText = companyDetails[d];
// divtag0.appendChild(divtag);

  divtag = document.createElement("div");
  divtag.setAttribute("class", "MarketCap");
  divtag.innerText = "M:" + rupee.format(getCompareObject[companyDetails[d]]['Market Cap']);
  divtag0.appendChild(divtag);

divtag = document.createElement("div");
divtag.setAttribute("class", "bookvalue");
divtag.innerText = "BK:  " + getCompareObject[companyDetails[d]]['Book Value'];
divtag0.appendChild(divtag);

// PEG Ratio
divtag = document.createElement("div");
divtag.setAttribute("class", "High");
divtag.innerText = "PG: " + getCompareObject[companyDetails[d]]['PEG Ratio'];
divtag0.appendChild(divtag);

// divtag = document.createElement("div");
// divtag.setAttribute("class", "High");
// divtag.innerText = "H :" + getCompareObject[companyDetails[d]].High;
// divtag0.appendChild(divtag);

// divtag = document.createElement("div");
// divtag.setAttribute("class", "Low");
// divtag.innerText = "L :" +getCompareObject[companyDetails[d]].Low;
// divtag0.appendChild(divtag);

// DMA 5
// dCompanyObject[companyDetails[d]][complen -1]
let DMA20 = 0;
let DMA5 = 0;
let DMACompany = [];

DMACompany = [...dCompanyObject[companyDetails[d]]];
DMACompany.reverse();

for(let i = 0; i < Number(maxi.value) ; i++){
  // if(i > 5){
  DMA20 = Number(DMA20) + Number(DMACompany[i]);
  // }
  if(i < 5){
    DMA5 = Number(DMA5) + Number(DMACompany[i]);
  }
}

DMA5 = DMA5/5;
DMA20 = DMA20/Number(maxi.value);

if((DMA5 > 0) && (DMA5 > DMA20)){

divtag = document.createElement("div");
divtag.setAttribute("class", "Low");
divtag.innerText = "DMA 5 :" 
divtag0.appendChild(divtag);
divtag.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("dma");

}

// DMA 5 End

divtag = document.createElement("div");
divtag.setAttribute("class", "Promoter holding");
divtag.innerText = "PH: " + getCompareObject[companyDetails[d]]['Promoter holding'];
divtag0.appendChild(divtag);

divtag = document.createElement("div");
divtag.setAttribute("class", "Debt to equity");
divtag.innerText = "DE: " + getCompareObject[companyDetails[d]]['Debt to equity'];
divtag0.appendChild(divtag);


//  UPDTAE CURRENT Data************************************************

divtag = document.createElement("div");
divtag.setAttribute("class", "difference0");
complen = dCompanyObject[companyDetails[d]].length -1 ;
tday = CurrentPriceObj[companyDetails[d]][0];
yday = (dCompanyObject[companyDetails[d]][complen]);

if(tday !== undefined ){
 checknum = checkPercent(tday, yday) ;
if ((((tday - yday) / yday) * 100) < 0){
  downvalue0++;
  divtag.classList.add("downTrend0");
  document.querySelector("button.downTrend0 span").innerText =  "  " + downvalue0;  
  document.querySelector("#Dnumbers").innerText = downvalue0;
  negativeList0.push((checkPercent(tday, yday) ));
  negativeCompany0[checkPercent(tday, yday) ] = companyDetails[d];
  MasterNegative.push((checkPercent(tday, yday) ));
  MasterNegativeCompany[checkPercent(tday, yday) ] = companyDetails[d];
  
}
else{
  if ((((tday - yday) / yday) * 100) > 0.02){
  upvalue0++;
  divtag.classList.add("upTrend0");
  document.querySelector("button.upTrend0 span").innerText =  "  " + upvalue0;
  document.querySelector("#Gnumbers").innerText = upvalue0;
  positive0.push((checkPercent(tday, yday) ));
  positiveCompany0[checkPercent(tday, yday) ] = companyDetails[d];
  Masterpositive.push((checkPercent(tday, yday) ));
  MasterpositiveCompany[checkPercent(tday, yday) ] = companyDetails[d];
  // console.log(companyDetails[d]);
  // console.log(checkPercent(tday, yday) );
  }
}
// }
divtag.innerText = "0:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;

}
divtag0.appendChild(divtag);

// **************************************update Current data END************************************

divtag = document.createElement("div");
divtag.setAttribute("class", "difference1");
complen = dCompanyObject[companyDetails[d]].length -1 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );
checknum = checkPercent(tday, yday) ;
if (checknum < 0){
  downvalue1++;
  divtag.classList.add("downTrend1");
  document.querySelector("button.downTrend1 span").innerText =  "  " + downvalue1;  
  negativeList1.push(checknum);
  negativeCompany1[checknum] = companyDetails[d];
  MasterNegative1.push(checknum);
  MasterNegativeCompany1[checknum] = companyDetails[d];
  
}
else{
  upvalue1++;
  divtag.classList.add("upTrend1");
  document.querySelector("button.upTrend1 span").innerText =  "  " + upvalue1;    
  positive1.push(checknum);
  positiveCompany1[checknum] = companyDetails[d];
  Masterpositive1.push(checknum);
  MasterpositiveCompany1[checknum] = companyDetails[d];

}
divtag.innerText = "1:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag0.appendChild(divtag);

// Second Symbol


divtag = document.createElement("div");
divtag.setAttribute("class", "difference2");
complen = dCompanyObject[companyDetails[d]].length -2 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );
checknum = checkPercent(tday, yday) ;
if (checknum < 0){
  downvalue2++;
  divtag.classList.add("downTrend2");
  document.querySelector("button.downTrend2 span").innerText =  "  " + downvalue2;  
  negativeList2.push(checknum);
  negativeCompany2[checknum] = companyDetails[d];
  MasterNegative2.push(checknum);
  MasterNegativeCompany2[checknum] = companyDetails[d];
  
}
else{
  upvalue2++;
  divtag.classList.add("upTrend2");
  document.querySelector("button.upTrend2 span").innerText =  "  " + upvalue2;
  positive2.push(checknum);
  positiveCompany2[checknum ] = companyDetails[d];
  Masterpositive2.push(checknum);
  MasterpositiveCompany2[checknum] = companyDetails[d];


}
divtag.innerText = "2:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag0.appendChild(divtag);

// Third Symbol*****************************************************************************


divtag = document.createElement("div");
divtag.setAttribute("class", "difference3");
complen = dCompanyObject[companyDetails[d]].length -3 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );
checknum = checkPercent(tday, yday) ;

if (checknum < 0){
  downvalue3++;
  divtag.classList.add("downTrend3");
  document.querySelector("button.downTrend3 span").innerText =  "  " + downvalue3;  
  negativeList3.push(checknum);
  negativeCompany3[checknum] = companyDetails[d];
  MasterNegative3.push(checknum);
  MasterNegativeCompany3[checknum] = companyDetails[d];
  
}
else{
  upvalue3++;
  divtag.classList.add("upTrend3");
  document.querySelector("button.upTrend3 span").innerText = "  " + upvalue3;
  positive3.push(checknum);
  positiveCompany3[checknum] = companyDetails[d];
  Masterpositive3.push(checknum);
  MasterpositiveCompany3[checknum] = companyDetails[d];


}
divtag.innerText = "3:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag0.appendChild(divtag);


// divtag = document.createElement("div");
// divtag.setAttribute("class", "currentPrice");
// complen = dCompanyObject[companyDetails[d]].length -1 ;
// tday = (dCompanyObject[companyDetails[d]][complen]);
// divtag.innerText = rupee.format(tday) ;
// divtag0.appendChild(divtag);

// Third symbol END*******************************************************************


// Fourth Symbol*****************************************************************************


divtag = document.createElement("div");
divtag.setAttribute("class", "difference4");
complen = dCompanyObject[companyDetails[d]].length -4 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );
checknum = checkPercent(tday, yday) ;

if (checknum < 0){
  downvalue3++;
  divtag.classList.add("downTrend4");
  document.querySelector("button.downTrend3 span").innerText =  "  " + downvalue4;
  
  negativeList4.push(checknum);
  negativeCompany4[checknum] = companyDetails[d];
  
}
else{
  upvalue4++;
  divtag.classList.add("upTrend4");
  document.querySelector("button.upTrend3 span").innerText = "  " + upvalue4;
  positive4.push(checknum);
  positiveCompany4[checknum] = companyDetails[d];


}
divtag.innerText = "4:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag0.appendChild(divtag);


// divtag = document.createElement("div");
// divtag.setAttribute("class", "currentPrice");
// complen = dCompanyObject[companyDetails[d]].length -1 ;
// tday = (dCompanyObject[companyDetails[d]][complen]);
// divtag.innerText = rupee.format(tday) ;
// divtag0.appendChild(divtag);

// Fourth symbol END*******************************************************************

// Fifth Symbol*****************************************************************************


divtag = document.createElement("div");
divtag.setAttribute("class", "difference5");
complen = dCompanyObject[companyDetails[d]].length -5 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );
checknum = checkPercent(tday, yday) ;

if (checknum < 0){
  downvalue5++;
  divtag.classList.add("downTrend5");
  document.querySelector("button.downTrend3 span").innerText =  "  " + downvalue5;
  
  negativeList5.push(checknum);
  negativeCompany5[checknum] = companyDetails[d];
  
}
else{
  upvalue5++;
  divtag.classList.add("upTrend5");
  document.querySelector("button.upTrend3 span").innerText = "  " + upvalue5;
  positive5.push(checknum);
  positiveCompany5[checknum] = companyDetails[d];


}
divtag.innerText = "5:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag0.appendChild(divtag);


divtag = document.createElement("div");
divtag.setAttribute("class", "currentPrice");
complen = dCompanyObject[companyDetails[d]].length -1 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
divtag.innerText = rupee.format(tday) ;
divtag0.appendChild(divtag);

// Fifth symbol END*******************************************************************

}

}
}
positive0.sort((a, b) => b - a);
positive1.sort((a, b) => b - a);
positive2.sort((a, b) => b - a);
positive3.sort((a, b) => b - a);

negativeList0.sort((a, b) => a - b);
negativeList1.sort((a, b) => a - b);
negativeList2.sort((a, b) => a - b);
negativeList3.sort((a, b) => a - b);

Masterpositive.sort((a, b) => b - a);
Masterpositive1.sort((a, b) => b - a);
Masterpositive2.sort((a, b) => b - a);
Masterpositive3.sort((a, b) => b - a);

MasterNegative.sort((a, b) => a - b);
MasterNegative1.sort((a, b) => a - b);
MasterNegative2.sort((a, b) => a - b);
MasterNegative3.sort((a, b) => a - b);
}

function updatePoitiveCompanyDeatils(){

             
  for(let d = 0 ; d < companyDetails.length ; d++) {
    
if (document.querySelectorAll('[id="'+ companyDetails[d].toString().replace("&"," ")  + '"]').length > 0 &&  document.querySelectorAll('[id="'+ companyDetails[d] + '"] .right .block1').length == 0){

if (JSON.stringify(getCompareObject).includes([companyDetails[d]])){
let divtag0 = document.createElement("div");
  divtag0.setAttribute("class", "block1");
  document.querySelector('[id="'+ companyDetails[d] + '"] .right').appendChild(divtag0);

let divtag = document.createElement("div");
    divtag.setAttribute("class", "dayComp");

// Start UPDTAE CURRENT and 1 Data************************************************

let divtagDC = document.createElement("div");
divtagDC.setAttribute("class", "dayCompare");
let complen = dCompanyObject[companyDetails[d]].length -1 ;
let tday;
let yday;
// DC data
if(Object.keys(currentPriceDataMid).length < 20){
  tday = CurrentPriceObj[companyDetails[d]][0];
  yday = (dCompanyObject[companyDetails[d]][complen]);
}
else{
  tday = currentPriceDataMid[companyDetails[d]];
  yday = (dCompanyObject[companyDetails[d]][complen]);
}
if(tday !== undefined ){
 checknum = checkPercent(tday, yday) ;
    if ((((tday - yday) / yday) * 100) < 0){
      divtagDC.classList.add("downTrend0");  
      divtagDC.id = companyDetails[d];
    }
    else{
      divtagDC.classList.add("upTrend0");
      divtagDC.id = companyDetails[d];
      
    }

divtagDC.innerText = Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag.appendChild(divtagDC);
}


if(Object.keys(currentPriceDataMid).length > 20){
  tday = CurrentPriceObj[companyDetails[d]];
  yday = currentPriceDataMid[companyDetails[d]];
  let divtagLC = document.createElement("div");
  divtagLC.setAttribute("class", "LCompare");

if(tday !== undefined ){
 checknum = checkPercent(tday, yday) ;
    if ((((tday - yday) / yday) * 100) < 0){
      divtagLC.classList.add("downTrend0");  
    }
    else{
      divtagLC.classList.add("upTrend0");
    }

    divtagLC.innerText = Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag.appendChild(divtagLC);
}

}



divtag0.appendChild(divtag);

// **************************************update Current and 1 data END************************************


  divtag = document.createElement("div");
  divtag.setAttribute("class", "MarketCap");
  divtag.innerText = "M:" + rupee.format(getCompareObject[companyDetails[d]]['Market Cap']);
  divtag0.appendChild(divtag);

divtag = document.createElement("div");
divtag.setAttribute("class", "bookvalue");
divtag.innerText = "BK:  " + getCompareObject[companyDetails[d]]['Book Value'];
divtag0.appendChild(divtag);

// PEG Ratio
divtag = document.createElement("div");
divtag.setAttribute("class", "High");
divtag.innerText = "PG: " + getCompareObject[companyDetails[d]]['PEG Ratio'];
divtag0.appendChild(divtag);



// DMA 5
// dCompanyObject[companyDetails[d]][complen -1]
let DMA20 = 0;
let DMA5 = 0;
let DMACompany = [];

DMACompany = [...dCompanyObject[companyDetails[d]]];
DMACompany.reverse();

for(let i = 0; i < Number(maxi.value) ; i++){
  // if(i > 5){
  DMA20 = Number(DMA20) + Number(DMACompany[i]);
  // }
  if(i < 5){
    DMA5 = Number(DMA5) + Number(DMACompany[i]);
  }
}

DMA5 = DMA5/5;
DMA20 = DMA20/Number(maxi.value);

if((DMA5 > 0) && (DMA5 > DMA20)){

divtag = document.createElement("div");
divtag.setAttribute("class", "Low");
divtag.innerText = "DMA 5 :" 
divtag0.appendChild(divtag);
divtag.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("dma");

}

// DMA 5 End

divtag = document.createElement("div");
divtag.setAttribute("class", "Promoter holding");
divtag.innerText = "PH: " + getCompareObject[companyDetails[d]]['Promoter holding'];
divtag0.appendChild(divtag);

divtag = document.createElement("div");
divtag.setAttribute("class", "Debt to equity");
divtag.innerText = "DE: " + getCompareObject[companyDetails[d]]['Debt to equity'];
divtag0.appendChild(divtag);


//  UPDTAE CURRENT Data************************************************

divtag = document.createElement("div");
divtag.setAttribute("class", "difference0");
complen = dCompanyObject[companyDetails[d]].length -1 ;
tday = CurrentPriceObj[companyDetails[d]][0];
yday = (dCompanyObject[companyDetails[d]][complen]);

if(tday !== undefined ){
 checknum = checkPercent(tday, yday) ;
if ((((tday - yday) / yday) * 100) < 0){
  downvalue0++;
  divtag.classList.add("downTrend0");

}
else{
  if ((((tday - yday) / yday) * 100) > 0.02){
  upvalue0++;
  divtag.classList.add("upTrend0");
  }
}
// }
divtag.innerText = "0:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;

}
divtag0.appendChild(divtag);

// **************************************update Current data END************************************

divtag = document.createElement("div");
divtag.setAttribute("class", "difference1");
complen = dCompanyObject[companyDetails[d]].length -1 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );
checknum = checkPercent(tday, yday) ;
if (checknum < 0){
  downvalue1++;
  divtag.classList.add("downTrend1");

}
else{
  upvalue1++;
  divtag.classList.add("upTrend1");

}
divtag.innerText = "1:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag0.appendChild(divtag);

// Second Symbol


divtag = document.createElement("div");
divtag.setAttribute("class", "difference2");
complen = dCompanyObject[companyDetails[d]].length -2 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );
checknum = checkPercent(tday, yday) ;
if (checknum < 0){
  downvalue2++;
  divtag.classList.add("downTrend2");
  
}
else{
  upvalue2++;
  divtag.classList.add("upTrend2");

}
divtag.innerText = "2:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag0.appendChild(divtag);

// Third Symbol*****************************************************************************


divtag = document.createElement("div");
divtag.setAttribute("class", "difference3");
complen = dCompanyObject[companyDetails[d]].length -3 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );
checknum = checkPercent(tday, yday) ;

if (checknum < 0){
  downvalue3++;
  divtag.classList.add("downTrend3");
 
}
else{
  upvalue3++;
  divtag.classList.add("upTrend3");

}
divtag.innerText = "3:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag0.appendChild(divtag);


// Third symbol END*******************************************************************


// Fourth Symbol*****************************************************************************


divtag = document.createElement("div");
divtag.setAttribute("class", "difference4");
complen = dCompanyObject[companyDetails[d]].length -4 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );
checknum = checkPercent(tday, yday) ;

if (checknum < 0){
  downvalue3++;
  divtag.classList.add("downTrend4");

}
else{
  upvalue4++;
  divtag.classList.add("upTrend4");

}
divtag.innerText = "4:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag0.appendChild(divtag);



// Fourth symbol END*******************************************************************

// Fifth Symbol*****************************************************************************


divtag = document.createElement("div");
divtag.setAttribute("class", "difference5");
complen = dCompanyObject[companyDetails[d]].length -5 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );
checknum = checkPercent(tday, yday) ;

if (checknum < 0){
  downvalue5++;
  divtag.classList.add("downTrend5");
 
}
else{
  upvalue5++;
  divtag.classList.add("upTrend5");

}
divtag.innerText = "5:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
divtag0.appendChild(divtag);


divtag = document.createElement("div");
divtag.setAttribute("class", "currentPrice");
complen = dCompanyObject[companyDetails[d]].length -1 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
divtag.innerText = rupee.format(tday) ;
divtag0.appendChild(divtag);

// Fifth symbol END*******************************************************************

}

}
}

}


function getBuy(margin){
              removeActive();
            //   event.target.classList.add('active');
              switch(margin) {
                case 40:
                  // createChart(BuyObject40, dE);
                  hideBuyStocks(BuyObject40);
                  break;
                case 30:
                  // createChart(BuyObject30, dE);
                  hideBuyStocks(BuyObject30);
                  break;
                case 60:
                  // createChart(BuyObject3Avg, dE);
                  hideBuyStocks(BuyObject3Avg);
                  break;
                default:
                  // createChart(BuyObject20, dE);
                  hideBuyStocks(BuyObject20);
              }
        getBuyMain(); 
}

function createChart(companyObject, e, days = 1000){
          let chartlim = 0;
          let lst = [];
          window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
          // clearChart();
          dE = e;
          let resultCount = 0;
              for (let key in companyObject) {
                if(!(key.includes('undefined')) ){
                resultCount++;
                // console.log(key);
                    let yValues  = [];
                    let volumeValues = [];
                    yValues  = [...companyObject[key]];
                    volumeValues  = [...dVolumeObject[key]];
                    let xValues = [];
                    let yValues2 = [];

                      yValues.reverse();

                      if(days < 0){

                        for(let y = 0 ; y < companyObject[key].length + Number(days) ; y++){
                          yValues2[y] =  yValues[y] ;
                        }
                            for (let i = 0 ; i < companyObject[key].length + Number(days) ; i++) {
                              xValues.push(i);
                            }
                      }
                      
                    else if (days < companyObject[key].length){
                      // days = 20
                      for(let y = days ; y < companyObject[key].length ; y++){
                        yValues2[y] =  yValues[y] ;
                      }
                          for (let i = days ; i < companyObject[key].length ; i++) {
                            xValues.push(i);
                          }
                    }
                    else{
                      // days = 1000
                      for(let y = 0; y < Math.min(companyObject[key].length, days) ; y++){
                        yValues2[y] =  yValues[y] ;
                      }
                          for (let i = 0; i < Math.min(companyObject[key].length, days) ; i++) {
                            xValues.push(i);
                          }
                    }
                          xValues.reverse();
                  let mainBlock = document.createElement("div");   
                  mainBlock.setAttribute("class", "mainBlock");

                  let topDivtag = document.createElement("div"); 
                  topDivtag.setAttribute("class", "topDivtag");
                  // let checkBox = document.createElement("input");
                  //           checkBox.setAttribute("type", "checkbox");
                  //           checkBox.setAttribute("class", key);
                  //           checkBox.addEventListener("click", setComp);
                  //           divtag.appendChild(checkBox);
                  // let lbl = document.createElement("label");
                  //           lbl.setAttribute("for", key);
                  //           lbl.setAttribute("value", 'compare');
                  //           lbl.innerText = 'Compare';
                  //           divtag.appendChild(lbl);
                  let lblF = document.createElement("label");
                          lblF.setAttribute("for", key);
                          lblF.setAttribute("value", 'favourite');
                          lblF.innerText = 'Favourite';
                          topDivtag.appendChild(lblF);
                  let checkBoxF = document.createElement("input");
                            checkBoxF.setAttribute("type", "checkbox");
                            checkBoxF.setAttribute("class", 'favourite');
                            checkBoxF.setAttribute("id", key);
                            // checkBoxF.setAttribute("value", "favourite");
                            checkBoxF.addEventListener("click", setFav);
                            topDivtag.appendChild(checkBoxF);
                            companyDetails.push(key);
                            
                  let anchortag = document.createElement("a");
                        anchortag.setAttribute("href", "https://www.screener.in/company/" + key + "/");
                        anchortag.setAttribute("target", "_blank");
                        topDivtag.appendChild(anchortag);
                        mainBlock.appendChild(topDivtag);
                    
                    
                if(Object.keys(currentPriceDataTable).length > 1){
                    let bar = document.createElement("div");
                        bar.setAttribute("class", "bar");
                    let canvasb = document.createElement("canvas");
                          canvasb.setAttribute("id", "bar" + key);
                          canvasb.setAttribute("class", "bar" + key); 
                          canvasb.setAttribute("height", "250"); 
                          canvasb.setAttribute("width", "600"); 

                          let xaxisprice = [];
                          for(let i = 1; i < 80; i++){ //[...currentPriceDataTable[key]].length - 1; i++){
                            xaxisprice.push(i);
                          }

                          bar.appendChild(canvasb);
                              // console.log([...currentPriceDataTable[key]].reverse());
                          new Chart(canvasb, {
                            type: "line",
                            data: {
                            labels: [...xaxisprice],
                            datasets: [{
                                    label: 'H : ' + Math.max(...[...currentPriceDataTable[key]]) + '        C : ' + [...currentPriceDataTable[key]][[...currentPriceDataTable[key]].length - 1],
                                    fontSize: 16,
                                    pointRadius: 0,
                                    borderWidth : 0.5,
                                    borderColor: "rgba(0,0,0,0.9)",
                                    data: [...currentPriceDataTable[key]],
                                    }]
                                  },  
                                  options: {
                                      scales: {
                                          yAxes: [{
                                              ticks: {
                                                  fontSize: 15,
                                                  family: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'monospace'"
                                          }
                                      }]
                                  }
                                  }

                            }); 

                      // let preHig = 0;
                      //   let largebar = 0;
                      //   let smallbar = 0;
                      //   largebar = Math.max(...[...currentPriceDataTable[key]]);
                      //   smallbar = Math.min(...[...currentPriceDataTable[key]]);


                      
                      // for(let i = 0 ;i  < currentPriceDataTable[key].length ;  i++){

                      // let barc = document.createElement("div");
                      // let barct = document.createElement("div");
                      //   barc.setAttribute("class", "barc");
                      //   let hig =  (Number(currentPriceDataTable[key][i])); // - (smallbar * 0.5));
                      //   let PperDif;
                      //   if (i == 0){
                      //     PperDif = 0;
                      //   }
                      //   else{
                      //     PperDif = (((hig - preHig)/hig)*100).toFixed(1);
                      //   }   
                      //     num = Number(hig);
                      //     let unit = (100 / (largebar - smallbar)); // (largebar - smallbar))
                      //     let barHig  = ((unit * (num - smallbar) )).toFixed(1);

                      //   if(preHig >= hig){
                      //     barc.style.backgroundColor = "rgba(255, 0,0, 0.35)";
                      //   }
                      //   else{
                      //     barc.style.backgroundColor = "rgba(20, 255 ,20, 0.75)";
                          
                      //   }
                      //   preHig = hig;
                      //   // let barHig = (hig * (100 / largebar)).toFixed(1);
                      //   barc.style.height = "100px"; //((Number(barHig)).toString()) + 'px'; //((largebar - Number(currentPriceData1[key][i])).toFixed(1).toString() + 'px').toString();
                      //   // barc.style.top = (100 - Number(barHig).toFixed(1).toString())+ 'px';
                      //   // barc.style.fontSize = '14px';
                      //   // barc.style.width = '10px';
                        

                      //   let barcspan = document.createElement("span");
                      //   barcspan.setAttribute("class", "barcspan");

                      //   if(i == 0){
                      //     barcspan.innerText = Number(CurrentPriceObj[key][1]).toFixed(1);  //perDif; 
                      //     }
                      //     else{
                      //       let PreviousPrice = currentPriceDataTable[key][i -1];
                      //       let CurrentPrice = currentPriceDataTable[key][i];

                      //       barcspan.innerText = (((CurrentPrice - PreviousPrice)/ PreviousPrice) * 100).toFixed(1);
                      //     }                       
                        
                      //   barct.appendChild(barc);
                      //   barc.appendChild(barcspan);
                      //   bar.appendChild(barct);
                      // }
                      anchortag.appendChild(bar);
                      topDivtag.appendChild(anchortag);
                        }

                        // volume chart starts *********************************************************************************

                        if(Object.keys(currentVolumeDataTable).length > 1){
                          let barv = document.createElement("div");
                              barv.setAttribute("class", "barv");

                          let canvasv = document.createElement("canvas");
                              canvasv.setAttribute("id", "barv" + key);
                              canvasv.setAttribute("class", "barv" + key); 
                              canvasv.setAttribute("height", "250"); 
                              canvasv.setAttribute("width", "600");
                              let xaxisvolume = [];
                            let newVolume = [];
                              for(let i = 1; i < [...currentVolumeDataTable[key]].length - 1; i++){
                        
                                newVolume.push([...currentVolumeDataTable[key]][i]/[i]);
                              }

                            for(let i = 1; i < 80 ; i++){
                                xaxisvolume.push(i);
                                
                              }


                            
                              barv.appendChild(canvasv);
                              let dvolumeAvg = 0;
                              for(let v = 1; v < 6; v++){
                                dvolumeAvg = Number(dvolumeAvg) + Number(dVolumeObject[key][dVolumeObject[key].length - v]);
                              }
                              dvolumeAvg = dvolumeAvg/5;
                              // console.log([...currentPriceDataTable[key]].reverse());
                          new Chart(canvasv, {
                            type: "line",
                            data: {
                            labels: [...xaxisvolume],
                            datasets: [{
                                    label: 'H : ' + (Math.max(...[...currentVolumeDataTable[key]])).toLocaleString('en-IN')  +   '  P : ' + Math.trunc(Number(dvolumeAvg.toFixed(0))/80).toLocaleString('en-IN') ,
                                    fontSize: 16,
                                    pointRadius: 0,
                                    borderWidth : 0.5,
                                    borderColor: "rgba(0,0,0,0.9)",
                                    data: [...newVolume], // ...currentVolumeDataTable[key]],
                                    }]
                                  },  
                                  options: {
                                      scales: {
                                          yAxes: [{
                                              ticks: {
                                                  fontSize: 15,
                                                  family: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'monospace'"
                                          }
                                      }]
                                  },
                                      annotation: {
                    annotations: [{
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: Number(dvolumeAvg) / 80,
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 4,
                        label: {
                            enabled: true,
                            content: 'Average',
                        }
                    }]
                }
                                  }

                            }); 

                            // let preHigv = 0;
                            //   let largebarv = 0;
                            //   let smallbarv = 0;
                            //   largebarv = Math.max(...[...currentVolumeDataTable[key]]);
                            //   smallbarv = Math.min(...[...currentVolumeDataTable[key]]);
                
                
                            
                            // for(let i =0; i < currentVolumeDataTable[key].length ;  i++){
                            //   // console.log(i);
                
                            // let barcv = document.createElement("div");
                            // let barct = document.createElement("div");
                            //   barcv.setAttribute("class", "barcv");
                              
                            //   let higv =  (Number(currentVolumeDataTable[key][i])); // - (smallbar * 0.5));
                            //   let perDif;
                            //   if (i == 0){
                            //     perDif = higv;
                            //   }
                            //   else{
                            //     perDif = (higv - preHigv);
                            //     // perDif = (((higv - preHigv)/higv)*100).toFixed(1);
                            //   }     

                
                            //     numv = Number(higv);
                            //     let unitv = (100 / (largebarv - smallbarv)); // (largebar - smallbar))
                            //     let barHigv  = ((unitv * (numv - smallbarv) )).toFixed(1);
                
                            //   if(preHigv >= higv){
                            //     barcv.style.backgroundColor = "rgba(255, 0,0, 0.35)";
                            //   }
                            //   else{
                            //     barcv.style.backgroundColor = "rgba(20, 255 ,20, 0.75)";
                                
                            //   }
                              
                            //   // let barHig = (hig * (100 / largebar)).toFixed(1);
                            //   barcv.style.height = '100px'; //(Number(barHigv)).toString() + 'px'; //((largebar - Number(currentPriceData1[key][i])).toFixed(1).toString() + 'px').toString();
                            //   // barcv.style.top = (100 - Number(barHigv).toFixed(1).toString())+ 'px';
                            //   // barc.style.width = '10px';
                              
                
                            //   let barcspanv = document.createElement("span");
                            //   barcspanv.setAttribute("class", "barcspanv");
                              
                            //   barcspanv.innerText = (perDif / 1000).toFixed(0); //; Number(currentVolumeDataTable[key][i]).toFixed(0) 

                              // barct.appendChild(barc);
                              // barc.appendChild(barcspan);
                              // bar.appendChild(barct);

                              // barv.appendChild(barct);
                              // barct.appendChild(barcv);
                              // barcv.appendChild(barcspanv);
                              // preHigv = higv;
                            // }
                            topDivtag.appendChild(barv);
                              }


                              // Volume chart ends }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
                    mainBlock.appendChild(topDivtag);

                    let divtagMain = document.createElement("div"); 
                            divtagMain.setAttribute("id", key);
                            divtagMain.appendChild(mainBlock);

                  let bottomDivTag = document.createElement("div");
                  bottomDivTag.setAttribute("class", "bottomDivTag");

                  let canvas = document.createElement("canvas");
                              canvas.setAttribute("id", key);
                              canvas.setAttribute("class", key);       
                  

                  let divtagLeft = document.createElement("div"); 
                            divtagMain.appendChild(divtagLeft);
                            // divtagLeft.appendChild(anchortag);
                              
                  let divtagRight = document.createElement("div"); 
                          divtagRight.setAttribute("class", "right");
                            

                            divtagLeft.appendChild(canvas);
                            bottomDivTag.appendChild(divtagLeft);
                            bottomDivTag.appendChild(divtagRight);
                            mainBlock.appendChild(bottomDivTag);

                              document.querySelector(".charts").appendChild(divtagMain);
                                let ccurrect = yValues2[0];
                                let cmin = Math.min(...yValues2);
                                let cmax = Math.max(...yValues2);
                                let buyAvg = [...yValues2];                        
                                  if (Math.floor(((cmax-ccurrect)/cmax) * 100) > 40 && ccurrect < cmax){
                                    BuyObject40[key] = companyObject[key];
                                  }
                                  else if (Math.floor(((cmax-ccurrect)/cmax) * 100) > 30 && ccurrect < cmax){
                                    BuyObject30[key] = companyObject[key];
                                  }
                                  else if (Math.floor(((cmax-ccurrect)/cmax) * 100) > 20 && ccurrect < cmax){
                                    BuyObject20[key] = companyObject[key];
                                  }
                                  if ((yValues2[1] * 1.05) < ccurrect){
                                    BuyObject3Avg[key] = companyObject[key];
                                    }
                                    if (cmax == ccurrect){
                                      BuyObject52High[key] = companyObject[key];
                                      }
                                
                                  new Chart(canvas, {
                                      type: "line",
                                      data: {
                                      labels: xValues,
                                      datasets: [{
                                              label: key + '   FL ' + ( ((cmax-cmin)/cmax) * 100).toFixed(2).toString() + ' %   FC  ' + ( ((cmax-ccurrect)/cmax) * 100).toFixed(2).toString()  ,
                                              pointRadius: 0,
                                              borderWidth : 0.5,
                                              borderColor: "rgba(0,0,0,0.9)",
                                              data: [...yValues2].reverse(),
                                              }]
                                            },  
                                            options: {
                                                scales: {
                                                    yAxes: [{
                                                        ticks: {
                                                            fontSize: 14
                                                    }
                                                }]
                                            }
                                            }

                                      });
                                
                                      // let canvas2 = document.createElement("canvas");
                                      // canvas2.setAttribute("class", 'volume');
                                      // mainBlock.appendChild(canvas2);
                                      // new Chart(canvas2, {
                                      //   type: "line",
                                      //   data: {
                                      //   labels: xValues, // .reverse().slice(0,30),
                                      //   datasets: [{
                                      //           label: volumeValues[volumeValues.length - 1],
                                      //           tooltip: '',
                                      //           pointRadius: 0,
                                      //           borderWidth : 0.5,
                                      //           borderColor: "rgba(0,0,0,0.9)",
                                      //           data: [...volumeValues]
                                      //           }]
                                      //         },
                                      //   options: {
                                      //           plugins: {
                                      //               legend: true // Hide legend
                                      //           },
                                      //           scales: {
                                      //             yAxes: [{
                                      //                 ticks: {
                                      //                     fontSize: 14
                                      //                 }
                                      //             }]
                                      //         }
                                      //         }
                                      //   });
          //  chart ends here
              }

            }
          document.getElementById("results0").innerText = resultCount.toString();
          let idlst = document.querySelectorAll("[id^='getData']");
          idlst.forEach( element => {
          element.innerText = "Stocks " + element.classList[0] +'+';
          element.classList.remove('active');
          })
          // updateCompanyDeatils();
          updateFavourite();
}

function getData(e) {    
        removeActive();
        cleanUpCompare();
        clearChart();
        getHTTPs(e.toString());
        // updateCompanyDeatils();
        showPrice();
  }

function getSectorData(event) {
        document.getElementById("results0").innerText = 0;
        document.getElementById("results1").innerText = 0;
        document.getElementById("results2").innerText = 0;
        document.getElementById("results3").innerText = 0;
        document.getElementById("resultsd0").innerText = 0;
        document.getElementById("resultsd1").innerText = 0;
        document.getElementById("resultsd2").innerText = 0;
        document.getElementById("resultsd3").innerText = 0;
        document.getElementById("filter").value = event.target.innerText;
        event.target.parentElement.style.display = 'none';
        document.getElementById("results0").innerText = "Loading...";
        event.target.classList.add('active');
          getHTTPs(event.target.innerText);

       
  }

function getSectorDataAll() {
  document.getElementById("filter").value = "Loading...";
        document.getElementById("results0").innerText = "Loading...";
        document.getElementById("SectorList").style.display = 'none';
  getHTTPs("All");

}

  
function getUp(num){
  // document.querySelector(".charts").style.display = "none"; 
  let lst = document.querySelectorAll(".charts > div");
  lst.forEach( (ele) => {
    ele.style.display = "none" ;
  });

    let positivelength = positive.length;

    for(let p = 0; p < positivelength; p++) {
    positive.pop();
    }
    positiveCompany = {};

  switch (num){
    case 0:
      positive = [...Masterpositive];
      positiveCompany = MasterpositiveCompany;
      
      break;

      case 1:
        positive = [...Masterpositive1];
        positiveCompany = MasterpositiveCompany1;
        break;
      
      case 2:
      positive = [...Masterpositive2];
      positiveCompany = MasterpositiveCompany2;
      break;

      case 3:
        positive = [...Masterpositive3];
        positiveCompany = MasterpositiveCompany3;
        break;
  }
// positive.sort().reverse();
positive.sort((a, b) => b - a);
createPositiveChart(positive, positiveCompany);
// showGainers();

  //       case 2:
  //         positive = [...positive, ...positive2];
  //         positiveCompany = object.assign(positiveCompany , positiveCompany2);
  //         break;

  //         case 3:
  //           positive = [...positive, ...positive3];
  //           positiveCompany = object.assign(positiveCompany , positiveCompany3);
  //           break;
 

      
      
      // let DownList = document.querySelectorAll('.dayCompare.downTrend0');
      // DownList.forEach( (DowEle) => {
      //   let DowEleParent = document.getElementById(DowEle.id);
      //       DowEleParent.style.display = 'none';

      // });
      // positive.sort().reverse()

     

  
  // createPositiveChart(dCompanyObject);
    // for(let i = 0; i < Math.max(positive.length , 0);){
    //     let indx = positiveCompany[positive[i]];
    //     let elementUp = document.getElementById(indx);
    //     if (elementUp != null){
    //         elementUp.parentElement.insertBefore(elementUp, elementUp.parentElement.children[i]);
    //         // elementUp.style.display = "";
    //         i++;
    //         document.getElementById("Gnumbers").innerText = Math.max(i , 1) ;
    //     }   
    // }
    // document.querySelector(".charts").style.display = ""; 
    window.scrollTo({top: 0, behavior: 'smooth'});
    showGainers();
  }

function getDown(num){
  // document.querySelector(".charts").style.display = "none"; 
  let lst = document.querySelectorAll(".charts > div");
  lst.forEach( (ele) => {
    ele.style.display = "none" ;
  });

  let positivelength = positive.length;

  for(let p = 0; p < positivelength; p++) {
  positive.pop();
  }
  positiveCompany = {};
  switch (num){
    case 0:
      positive = [...MasterNegative];
      positiveCompany = MasterNegativeCompany;
      
      break;

      case 1:
        positive = [...MasterNegative1];
        positiveCompany = MasterNegativeCompany1;
        break;
      
      case 2:
      positive = [...MasterNegative2];
      positiveCompany = MasterNegativeCompany2;
      break;

      case 3:
        positive = [...MasterNegative3];
        positiveCompany = MasterNegativeCompany3;
        break;
  }
// positive.sort().reverse();
positive.sort((a, b) => b - a);
createPositiveChart(positive, positiveCompany);
// createPositiveChart(MasterdCompanyObject);

  // document.querySelector(".charts").style.display = "none"; 
  // let lst = document.querySelectorAll(".charts > div");
  // lst.forEach( (ele) => {
  //   ele.style.display = "none" ;
  // });

  // let positivelength = positive.length;

  // for(let p = 0; p < positivelength; p++) {
  // positive.pop();
  // }
  // positiveCompany = {};

  // switch (num){
  //   case 0:
  //     positive = [...negativeList0];
  //     positiveCompany = negativeCompany0;
  //     break;

  //     case 1:
  //       positive = [...negativeList1];
  //       positiveCompany = negativeCompany1;
  //       break;

  //       case 2:
  //         positive = [...negativeList2];
  //         positiveCompany = negativeCompany2;
  //         break;

  //         case 3:
  //           positive = [...negativeList3];
  //           positiveCompany = negativeCompany3;
  //           break;
  // }
  // createPositiveChart(dCompanyObject);

    // for(let i = 0; i < Math.max(negative.length,0);){
    //     let indx = negativeCompany[negative[i]];
    //     let elementUp = document.getElementById(indx);
    //     if (elementUp != null){
    //         elementUp.parentElement.insertBefore(elementUp, elementUp.parentElement.children[i]);
    //         elementUp.style.display = "";
    //         i++;
    //         document.getElementById("Dnumbers").innerText = Math.max(i , 1) ;
    //     }   
    // }
    // document.querySelector(".charts").style.display = ""; 
    window.scrollTo({top: 0, behavior: 'smooth'});
    showNoGainers();
  }

  function getFavData(stockName) {    
    getHTTPs("," + stockName, 1);
    updateCompanyDeatils();
    showPages();
}
  

  
var slider = document.querySelector('#slider');
var mini = document.getElementById("mini");
var maxi = document.getElementById("maxi");
// mini.value = maxi.value = slider.value;
maxi.value = slider.value;

slider.oninput = function() {
  // if (slider.value < 0){
  //   mini.value = 248 - this.value;
  //   maxi.value = 0;
  // }
  // else{
    maxi.value = this.value;
  //   mini.value = 0;
  // }
    
  }

  // mini.oninput = function() {
  //   slider.value = this.value;   
      
  //   }
    maxi.oninput = function() {
      slider.value = this.value;   
        
      }

      function resetSlider(){
        maxi.value = 0;
        slider.value = 0;
        getDay(20);
      }

      document.onscroll = function(){
        document.querySelector(".range").classList.add("hide");
        }
        document.querySelector("#rangeshow").onclick = function(){
          document.querySelector(".range").classList.toggle("hide");
        }
        

var priceslidermin = document.querySelector('#slidermin');
var priceslidermax = document.querySelector('#slidermax');
var pricemin = document.getElementById("pricemin");
var pricemax = document.getElementById("pricemax");
        
        priceslidermin.oninput = function() {
          pricemin.value = this.value;
          if ((Number(this.value) + 5) >= priceslidermax.value){
              priceslidermax.value = Number(this.value) + 5;
              pricemax.value = Number(this.value) + 5;
          }
          }
        
        
        priceslidermax.oninput = function() {
          pricemax.value = this.value;
          priceslidermin.max = Number(this.value) - 5;
          if (Number(this.value)  <= (Number(pricemin.value) + 5)){
            pricemin.value = Number(this.value) -5;
            priceslidermin.value = Number(this.value) - 5;
        }

          }
        

            maxi.oninput = function() {
              slider.value = this.value;   
                
              }




function getOpenData() {
    getHTTPs('open');
    updateCompanyDeatils();
}
 
      //  High data Start
function getHighData() {
  getHTTPs('highp');
  updateCompanyDeatils(); 
}

// End of High Data

  function getLowData() {
    getHTTPs('low52');
    updateCompanyDeatils();
  }

  function getVolumeData() {
    getHTTPs('volumedata');
    updateCompanyDeatils();
  }
  function getLongTermData() {
    getHTTPs('longterm');
    updateCompanyDeatils();
  }

  
  function getHTTPs(path, flag = 0) {
    companyDetails = [];
    dCompanyObject = {};
    MasterdCompanyObjectCopy = {};
    if(flag == 0){
      dCompanyObject = {};
      clearChart();
      
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/" +  path)  ;
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        dCompanyObject = xhr.response.companyObject;
        // dCompanyDateObject = xhr.response.companyDateObj;
        
        if(Object.keys(MasterdCompanyObject).length == 0){
          MasterdCompanyObject = dCompanyObject;
          MasterdCompanyObjectCopy = dCompanyObject;
        }
        else{              
          MasterdCompanyObject = Object.assign(dCompanyObject, MasterdCompanyObjectCopy)
          MasterdCompanyObjectCopy = {};
          MasterdCompanyObjectCopy = dCompanyObject;
        }

        dVolumeObject = xhr.response.volumeObject;
        CurrentPriceObj = xhr.response.currentPriceData;
        currentPriceData1 = xhr.response.currentPriceData1;
        currentPriceDataTable = xhr.response.currentPriceDataTable;
        currentVolumeDataTable = xhr.response.currentVolumeDataTable,
        longtermData = xhr.response.longterm;
        lowPriceData = xhr.response.lowPriceData;
        highPriceData = xhr.response.highPriceData;
        closeOpenPriceDataObject = xhr.response.closeOpenPriceDataObject;
        closeOpenPriceData = xhr.response.closeOpenPriceData;
        createChart( xhr.response.companyObject );
        updateCompanyDeatils();
      } 
      else {
        console.log(`Error: ${xhr.status}`);
        }
      };
    }

function createPositiveChart(dpositive, dpositiveCompany){
      positiveCompanyObject = {};
      for(var i = 0; i < Object.keys(positiveCompany).length - 1; i++){
        // console.log(dpositive[i]);
        // console.log(dpositiveCompany[dpositive[i]]);
        positiveCompanyObject[dpositiveCompany[dpositive[i]]] = dCompanyObject[dpositiveCompany[dpositive[i]]] ;

      }

      // console.log(positiveCompanyObject);
      clearChart();
      createChart(positiveCompanyObject);
      updatePoitiveCompanyDeatils();
      

    }



    function createChartFive(companyObject, e, days = 1000){
      let chartlim = 0;
      let lst = [];
  
      dE = e;
      let resultCount = 0;
          for (let key in companyObject) {
            if(!(key.includes('undefined')) ){
            resultCount++;
            // console.log(key);
                let yValues  = [];
                let volumeValues = [];
                yValues  = [...companyObject[key]];
                volumeValues  = [...dVolumeObject[key]];
                let xValues = [];
                let yValues2 = [];

                  yValues.reverse();

                  if(days < 0){

                    for(let y = 0 ; y < companyObject[key].length + Number(days) ; y++){
                      yValues2[y] =  yValues[y] ;
                    }
                        for (let i = 0 ; i < companyObject[key].length + Number(days) ; i++) {
                          xValues.push(i);
                        }
                  }
                  
                else if (days < companyObject[key].length){
                  // days = 20
                  for(let y = days ; y < companyObject[key].length ; y++){
                    yValues2[y] =  yValues[y] ;
                  }
                      for (let i = days ; i < companyObject[key].length ; i++) {
                        xValues.push(i);
                      }
                }
                else{
                  // days = 1000
                  for(let y = 0; y < Math.min(companyObject[key].length, days) ; y++){
                    yValues2[y] =  yValues[y] ;
                  }
                      for (let i = 0; i < Math.min(companyObject[key].length, days) ; i++) {
                        xValues.push(i);
                      }
                }
                      xValues.reverse();
              let mainBlock = document.createElement("div");   
              mainBlock.setAttribute("class", "mainBlock");

              let topDivtag = document.createElement("div"); 
              topDivtag.setAttribute("class", "topDivtag");
              let lblF = document.createElement("label");
                      lblF.setAttribute("for", key);
                      lblF.setAttribute("value", 'favourite');
                      lblF.innerText = 'Favourite';
                      topDivtag.appendChild(lblF);
              let checkBoxF = document.createElement("input");
                        checkBoxF.setAttribute("type", "checkbox");
                        checkBoxF.setAttribute("class", 'favourite');
                        checkBoxF.setAttribute("id", key);
                        // checkBoxF.setAttribute("value", "favourite");
                        checkBoxF.addEventListener("click", setFav);
                        topDivtag.appendChild(checkBoxF);
                        companyDetails.push(key);
                        
              let anchortag = document.createElement("a");
                    anchortag.setAttribute("href", "https://www.screener.in/company/" + key + "/");
                    anchortag.setAttribute("target", "_blank");
                    topDivtag.appendChild(anchortag);
                    mainBlock.appendChild(topDivtag);
                
                
            if(Object.keys(currentPriceDataTable).length > 1){
                let bar = document.createElement("div");
                    bar.setAttribute("class", "bar");
                let canvasb = document.createElement("canvas");
                      canvasb.setAttribute("id", "bar" + key);
                      canvasb.setAttribute("class", "bar" + key); 
                      canvasb.setAttribute("height", "250"); 
                      canvasb.setAttribute("width", "600"); 

                      let xaxisprice = [];
                      for(let i = 1; i < 80; i++){ //[...currentPriceDataTable[key]].length - 1; i++){
                        xaxisprice.push(i);
                      }

                      bar.appendChild(canvasb);
                          // console.log([...currentPriceDataTable[key]].reverse());
                      new Chart(canvasb, {
                        type: "line",
                        data: {
                        labels: [...xaxisprice],
                        datasets: [{
                                label: 'H : ' + Math.max(...[...currentPriceDataTable[key]]) + '        C : ' + [...currentPriceDataTable[key]][[...currentPriceDataTable[key]].length - 1],
                                fontSize: 16,
                                pointRadius: 0,
                                borderWidth : 0.5,
                                borderColor: "rgba(0,0,0,0.9)",
                                data: [...currentPriceDataTable[key]],
                                }]
                              },  
                              options: {
                                  scales: {
                                      yAxes: [{
                                          ticks: {
                                              fontSize: 15,
                                              family: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'monospace'"
                                      }
                                  }]
                              }
                              }

                        }); 

                 
                  anchortag.appendChild(bar);
                  topDivtag.appendChild(anchortag);
                    }

                    // volume chart starts *********************************************************************************

                    if(Object.keys(currentVolumeDataTable).length > 1){
                      let barv = document.createElement("div");
                          barv.setAttribute("class", "barv");

                      let canvasv = document.createElement("canvas");
                          canvasv.setAttribute("id", "barv" + key);
                          canvasv.setAttribute("class", "barv" + key); 
                          canvasv.setAttribute("height", "250"); 
                          canvasv.setAttribute("width", "600");
                          let xaxisvolume = [];
                        let newVolume = [];
                          for(let i = 1; i < [...currentVolumeDataTable[key]].length - 1; i++){
                    
                            newVolume.push([...currentVolumeDataTable[key]][i]/[i]);
                          }

                        for(let i = 1; i < 80 ; i++){
                            xaxisvolume.push(i);
                            
                          }
                        
                          barv.appendChild(canvasv);
                          let dvolumeAvg = 0;
                          for(let v = 1; v < 6; v++){
                            dvolumeAvg = Number(dvolumeAvg) + Number(dVolumeObject[key][dVolumeObject[key].length - v]);
                          }
                          dvolumeAvg = dvolumeAvg/5;
                          // console.log([...currentPriceDataTable[key]].reverse());
                      new Chart(canvasv, {
                        type: "line",
                        data: {
                        labels: [...xaxisvolume],
                        datasets: [{
                                label: 'H : ' + (Math.max(...[...currentVolumeDataTable[key]])).toLocaleString('en-IN')  +   '  P : ' + Math.trunc(Number(dvolumeAvg.toFixed(0))/80).toLocaleString('en-IN') ,
                                fontSize: 16,
                                pointRadius: 0,
                                borderWidth : 0.5,
                                borderColor: "rgba(0,0,0,0.9)",
                                data: [...newVolume], // ...currentVolumeDataTable[key]],
                                }]
                              },  
                              options: {
                                  scales: {
                                      yAxes: [{
                                          ticks: {
                                              fontSize: 15,
                                              family: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'monospace'"
                                      }
                                  }]
                              },
                                  annotation: {
                annotations: [{
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: Number(dvolumeAvg) / 80,
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 4,
                    label: {
                        enabled: true,
                        content: 'Average',
                    }
                }]
            }
                              }

                        }); 

                       topDivtag.appendChild(barv);
                          }


                          // Volume chart ends }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
                mainBlock.appendChild(topDivtag);

                let divtagMain = document.createElement("div"); 
                        divtagMain.setAttribute("id", key);
                        divtagMain.appendChild(mainBlock);

              let bottomDivTag = document.createElement("div");
              bottomDivTag.setAttribute("class", "bottomDivTag");

              let canvas = document.createElement("canvas");
                          canvas.setAttribute("id", key);
                          canvas.setAttribute("class", key);       
              

              let divtagLeft = document.createElement("div"); 
                        divtagMain.appendChild(divtagLeft);
                        // divtagLeft.appendChild(anchortag);
                          
              let divtagRight = document.createElement("div"); 
                      divtagRight.setAttribute("class", "right");
                        

                        divtagLeft.appendChild(canvas);
                        bottomDivTag.appendChild(divtagLeft);
                        bottomDivTag.appendChild(divtagRight);
                        mainBlock.appendChild(bottomDivTag);

                          document.querySelector(".charts").appendChild(divtagMain);
                            let ccurrect = yValues2[0];
                            let cmin = Math.min(...yValues2);
                            let cmax = Math.max(...yValues2);
                            let buyAvg = [...yValues2];                        
                              if (Math.floor(((cmax-ccurrect)/cmax) * 100) > 40 && ccurrect < cmax){
                                BuyObject40[key] = companyObject[key];
                              }
                              else if (Math.floor(((cmax-ccurrect)/cmax) * 100) > 30 && ccurrect < cmax){
                                BuyObject30[key] = companyObject[key];
                              }
                              else if (Math.floor(((cmax-ccurrect)/cmax) * 100) > 20 && ccurrect < cmax){
                                BuyObject20[key] = companyObject[key];
                              }
                              if ((yValues2[1] * 1.05) < ccurrect){
                                BuyObject3Avg[key] = companyObject[key];
                                }
                                if (cmax == ccurrect){
                                  BuyObject52High[key] = companyObject[key];
                                  }
                            
                              new Chart(canvas, {
                                  type: "line",
                                  data: {
                                  labels: xValues,
                                  datasets: [{
                                          label: key + '   FL ' + ( ((cmax-cmin)/cmax) * 100).toFixed(2).toString() + ' %   FC  ' + ( ((cmax-ccurrect)/cmax) * 100).toFixed(2).toString()  ,
                                          pointRadius: 0,
                                          borderWidth : 0.5,
                                          borderColor: "rgba(0,0,0,0.9)",
                                          data: [...yValues2].reverse(),
                                          }]
                                        },  
                                        options: {
                                            scales: {
                                                yAxes: [{
                                                    ticks: {
                                                        fontSize: 14
                                                }
                                            }]
                                        }
                                        }

                                  });
      //  chart ends here
          }

        }
      document.getElementById("results0").innerText = resultCount.toString();
      let idlst = document.querySelectorAll("[id^='getData']");
      idlst.forEach( element => {
      element.innerText = "Stocks " + element.classList[0] +'+';
      element.classList.remove('active');
      })
      updateCompanyDeatils();

}
