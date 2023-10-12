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
  document.querySelector("button.upTrend1 span").innerText =  "  " + upvalue1;    

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
  document.querySelector("button.upTrend3 span").innerText = "  " + upvalue3;


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
  
function getUp(){
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

    window.scrollTo({top: 0, behavior: 'smooth'});
    showGainers();
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
        // console.log(xhr.response.ddtime);
        createChart( xhr.response.companyObject );
        // updateCompanyDeatils();
      } 
      else {
        document.getElementById("filter").value = "Please Reload"
        console.log(`Error: ${xhr.status}`);
        
        }
      };
    }

    
    function getFiveHTTPs(path, flag = 0) {
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
            // console.log(xhr.response.ddtime);
            if(flag == 0){
              createFiveChartVol( xhr.response.companyObject );
            }
            else {
              createFiveChart( xhr.response.companyObject );
            }
            // updateCompanyDeatils();
          } 
          else {
            document.getElementById("filter").value = "Please Reload"
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
       

    } 



function createFiveChart(companyObject, e, days = 1000){
      let chartlim = 0;
      let lst = [];
      let newPositiveSort = [];
      let per = 0;
      let newCompanyObject2 ={};

        let newCompanyObject = {};
        let posi = {};
        let positiveSort = [];
        if(Object.keys(companyObject).length ){
          document.getElementById("pages2").innerText = Object.keys(companyObject).length;
      }
              
        for (let key in companyObject) {
            let CobjLen = [...currentPriceDataTable[key]].length;           

            if(CobjLen >= 4){
                let data = [...currentPriceDataTable[key]];
                let cdata = [...currentPriceDataTable[key]][CobjLen -1];
                let pdata = [...currentPriceDataTable[key]][CobjLen - 2];
                let ppdata = [...currentPriceDataTable[key]][CobjLen - 3] || 0;
                let pppdata = [...currentPriceDataTable[key]][0] || 0;

                let cvolume= [...currentVolumeDataTable[key]][CobjLen -1] / [CobjLen -1];
                let pvolume = [...currentVolumeDataTable[key]][CobjLen - 10] / [CobjLen - 10] || [...currentVolumeDataTable[key]][CobjLen -2] / [CobjLen -2];

                // if((cdata > pdata) || (cdata > ppdata) || (cdata > pppdata)) {
                if((cdata > pppdata) ) {
                    per = ((cdata - pppdata )/ pppdata);
                    // console.log(per);
                    if(per > 0.03){
                            positiveSort.push(per);
                            posi[per] = key;

                    }
                    
                    // newCompanyObject[key] = [...companyObject[key]];
                }


            }
                


        }
        if(positiveSort.length > 0 ){
          // console.log(positiveSort);
            positiveSort.sort((a,b) => a - b);
            positiveSort.reverse();
            // console.log(positiveSort);
            positiveSort.forEach( (ele) =>{
              // console.log(ele);
                newCompanyObject2[posi[ele]] = companyObject[posi[ele]];
            })

        }
        // console.log(newCompanyObject2);

        
      dE = e;
      let resultCount = 0;
          for (let key in newCompanyObject2) {
            if(!(key.includes('undefined')) ){
            resultCount++;
            // console.log(key);

            let newVolume = [];
            for(let i = 1; i < [...currentVolumeDataTable[key]].length - 1; i++){                    
              newVolume.push([...currentVolumeDataTable[key]][i]/[i]);
              
            }
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

              let cplen = [...currentPriceDataTable[key]].length;
              let cp = [...currentPriceDataTable[key]][cplen - 1];
              let op = [...currentPriceDataTable[key]][0];
              let currPer = (((cp - op) / op) * 100).toFixed(1);

                      lblF.setAttribute("for", key);
                      lblF.setAttribute("value", 'favourite');
                      lblF.innerText = currPer + '  ' + key;
                      topDivtag.appendChild(lblF);
              let checkBoxF = document.createElement("input");
                        checkBoxF.setAttribute("type", "checkbox");
                        checkBoxF.setAttribute("class", 'favourite');


                        checkBoxF.setAttribute("id",  key);
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
              document.getElementById("pages2").innerText = positiveSort.length;
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
                                label: 'L : ' + Math.min(...[...currentPriceDataTable[key]]) + '   H : ' + Math.max(...[...currentPriceDataTable[key]]) + '        C : ' + [...currentPriceDataTable[key]][[...currentPriceDataTable[key]].length - 1],
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
                        
                        let currentVolume = 0;
                        let lastNum = [...currentVolumeDataTable[key]].length - 1;
                        currentVolume =  [...currentVolumeDataTable[key]][[lastNum]] - ([...currentVolumeDataTable[key]][[lastNum - 1]]);

                        

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
                                label: 'C : ' + (currentVolume).toLocaleString('en-IN')  +   '  P : ' + Math.trunc(Number(dvolumeAvg.toFixed(0))/80).toLocaleString('en-IN') ,
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

            document.querySelector(".charts").appendChild(divtagMain);

            //   let bottomDivTag = document.createElement("div");
            //   bottomDivTag.setAttribute("class", "bottomDivTag");

            //   let canvas = document.createElement("canvas");
            //               canvas.setAttribute("id", key);
            //               canvas.setAttribute("class", key);       
              

            //   let divtagLeft = document.createElement("div"); 
            //             divtagMain.appendChild(divtagLeft);
            //             // divtagLeft.appendChild(anchortag);
                          
            //   let divtagRight = document.createElement("div"); 
            //           divtagRight.setAttribute("class", "right");
                        

            //             divtagLeft.appendChild(canvas);
            //             bottomDivTag.appendChild(divtagLeft);
            //             bottomDivTag.appendChild(divtagRight);
            //             mainBlock.appendChild(bottomDivTag);

            //               document.querySelector(".charts").appendChild(divtagMain);
            //                 let ccurrect = yValues2[0];
            //                 let cmin = Math.min(...yValues2);
            //                 let cmax = Math.max(...yValues2);
            //                 let buyAvg = [...yValues2];                        
            //                   if (Math.floor(((cmax-ccurrect)/cmax) * 100) > 40 && ccurrect < cmax){
            //                     BuyObject40[key] = companyObject[key];
            //                   }
            //                   else if (Math.floor(((cmax-ccurrect)/cmax) * 100) > 30 && ccurrect < cmax){
            //                     BuyObject30[key] = companyObject[key];
            //                   }
            //                   else if (Math.floor(((cmax-ccurrect)/cmax) * 100) > 20 && ccurrect < cmax){
            //                     BuyObject20[key] = companyObject[key];
            //                   }
            //                   if ((yValues2[1] * 1.05) < ccurrect){
            //                     BuyObject3Avg[key] = companyObject[key];
            //                     }
            //                     if (cmax == ccurrect){
            //                       BuyObject52High[key] = companyObject[key];
            //                       }
                            
                            //   new Chart(canvas, {
                            //       type: "line",
                            //       data: {
                            //       labels: xValues,
                            //       datasets: [{
                            //               label: key + '   FL ' + ( ((cmax-cmin)/cmax) * 100).toFixed(2).toString() + ' %   FC  ' + ( ((cmax-ccurrect)/cmax) * 100).toFixed(2).toString()  ,
                            //               pointRadius: 0,
                            //               borderWidth : 0.5,
                            //               borderColor: "rgba(0,0,0,0.9)",
                            //               data: [...yValues2].reverse(),
                            //               }]
                            //             },  
                            //             options: {
                            //                 scales: {
                            //                     yAxes: [{
                            //                         ticks: {
                            //                             fontSize: 14
                            //                     }
                            //                 }]
                            //             }
                            //             }

                            //       });
      //  chart ends here
          }

        }
      
    //   updateCompanyDeatils();

}


function createFiveChartVol(companyObject, e, days = 1000){
  let chartlim = 0;
  let lst = [];
  let newPositiveSort = [];
  let per = 0;
  let newCompanyObject2 ={};
    if(Object.keys(companyObject).length ){
        document.getElementById("pages2").innerText = Object.keys(companyObject).length;
    }
    let newCompanyObject = {};
    let posi = {};
    let positiveSort = [];

          
    for (let key in companyObject) {
        let CobjLen = [...currentPriceDataTable[key]].length;           

        if(CobjLen >= 4){
            let data = [...currentPriceDataTable[key]];
            let cdata = [...currentPriceDataTable[key]][CobjLen -1];
            let pdata = [...currentPriceDataTable[key]][CobjLen - 2];
            let ppdata = [...currentPriceDataTable[key]][CobjLen - 3] || 0;
            let pppdata = [...currentPriceDataTable[key]][0] || 0;

            let cvolume= [...currentVolumeDataTable[key]][CobjLen -1] / [CobjLen -1];
            let pvolume = [...currentVolumeDataTable[key]][CobjLen - 10] / [CobjLen - 10] || [...currentVolumeDataTable[key]][CobjLen -2] / [CobjLen -2];

            // if((cdata > pdata) || (cdata > ppdata) || (cdata > pppdata)) {
            if((cdata > pppdata) & cvolume > pvolume ) {
                per = ((cdata - pppdata )/ pppdata);
                // console.log(per);
                if(per > 0.03){
                        positiveSort.push(per);
                        posi[per] = key;

                }
                
                // newCompanyObject[key] = [...companyObject[key]];
            }


        }
            


    }
    if(positiveSort.length > 0 ){
      // console.log(positiveSort);
        positiveSort.sort((a,b) => a - b);
        positiveSort.reverse();
        // console.log(positiveSort);
        positiveSort.forEach( (ele) =>{
          // console.log(ele);
            newCompanyObject2[posi[ele]] = companyObject[posi[ele]];
        })

    }
    // console.log(newCompanyObject2);

    
  dE = e;
  let resultCount = 0;
      for (let key in newCompanyObject2) {
        if(!(key.includes('undefined')) ){
        resultCount++;
        // console.log(key);

        let newVolume = [];
        for(let i = 1; i < [...currentVolumeDataTable[key]].length - 1; i++){                    
          newVolume.push([...currentVolumeDataTable[key]][i]/[i]);
          
        }
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

          let cplen = [...currentPriceDataTable[key]].length;
          let cp = [...currentPriceDataTable[key]][cplen - 1];
          let op = [...currentPriceDataTable[key]][0];
          let currPer = (((cp - op) / op) * 100).toFixed(1);

                  lblF.setAttribute("for", key);
                  lblF.setAttribute("value", 'favourite');
                  lblF.innerText = currPer + '  ' + key;
                  topDivtag.appendChild(lblF);
          let checkBoxF = document.createElement("input");
                    checkBoxF.setAttribute("type", "checkbox");
                    checkBoxF.setAttribute("class", 'favourite');


                    checkBoxF.setAttribute("id",  key);
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
          document.getElementById("pages").innerText = positiveSort.length;
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
                            label: 'L : ' + Math.min(...[...currentPriceDataTable[key]]) + '   H : ' + Math.max(...[...currentPriceDataTable[key]]) + '        C : ' + [...currentPriceDataTable[key]][[...currentPriceDataTable[key]].length - 1],
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
                    
                    let currentVolume = 0;
                    let lastNum = [...currentVolumeDataTable[key]].length - 1;
                    currentVolume =  [...currentVolumeDataTable[key]][[lastNum]] - ([...currentVolumeDataTable[key]][[lastNum - 1]]);

                    

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
                            label: 'C : ' + (currentVolume).toLocaleString('en-IN')  +   '  P : ' + Math.trunc(Number(dvolumeAvg.toFixed(0))/80).toLocaleString('en-IN') ,
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

        document.querySelector(".charts").appendChild(divtagMain);

      }

    }
  


}