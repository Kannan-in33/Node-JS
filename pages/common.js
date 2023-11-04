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

function setFav(event){
    let AFL = [...Array.from(localStorage)];
    let clr = document.querySelectorAll("#" + event.target.id.toString())[1];
      clr.classList.toggle("star");

    if(!AFL.includes(event.target.id.toString())){
      localStorage.setItem(localStorage.length, event.target.id.toString());
      
    }
    else{
      for(let i = 0; i < localStorage.length; i++){

        if(localStorage[i] == event.target.id.toString()){
          localStorage.removeItem(i);
          let AFL2 = [];

          for(let key in localStorage){
            if(AFL2.length < AFL.length - 1){
              AFL2.push(localStorage[key]);
            }
          }

          localStorage.clear();

          for(let j = 0; j < AFL2.length ; j++){

            if(AFL2[j] != undefined){
              localStorage.setItem(j , AFL2[j]);
            }
          }
        }

      }
    }
    

    }

function updateFavourite(){
    for( let i = 0; i < localStorage.length; i++ ){
if (document.querySelectorAll("#" + localStorage[i]).length > 0 ){
    let ele =  document.querySelectorAll("#" + localStorage[i])[1];
    //  ele.checked = true;
    ele.classList.add("star");
    }
    }
}

function checkPercent(tday, yday) {
    if (tday == 0 || tday == undefined || ((Math.abs(((tday - yday) / yday) * 100)) > 25)){
      return (Math.random() * 0.0005);
    }
    
    return (((tday - yday) / yday) * 100);
  }