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
let CurrentPriceObj = {};

const weekday = ["S","M","T","W","Th","F","St"];

let rupee = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumSignificantDigits: 3,
    
});

function updateCompanyDeatils(){
  let upvalue0 = 0;
  let downvalue0 = 0;
  let upvalue1 = 0;
  let downvalue1 = 0;
  let upvalue2 = 0;
  let downvalue2 = 0;
  let upvalue3 = 0;
  let downvalue3 = 0;
  let checknum = 0;
  
let positivelength = positive0.length;

for(let p = 0; p < positivelength; p++) {
  positive0.pop();
}

let negativeListlength = negativeList0.length

for(let n = 0; n < negativeListlength; n++) {
  negativeList0.pop();
}

// 1***********************
positivelength = positive1.length;

for(let p = 0; p < positivelength; p++) {
  positive1.pop();
}

negativeListlength = negativeList1.length

for(let n = 0; n < negativeListlength; n++) {
  negativeList1.pop();
}
// / END 1***************************

positivelength = positive2.length;

for(let p = 0; p < positivelength; p++) {
  positive2.pop();
}

negativeListlength = negativeList2.length

for(let n = 0; n < negativeListlength; n++) {
  negativeList2.pop();
}



// END 2***************************

positivelength = positive3.length;

for(let p = 0; p < positivelength; p++) {
  positive3.pop();
}

negativeListlength = negativeList3.length

for(let n = 0; n < negativeListlength; n++) {
  negativeList3.pop();
}

// END 3******************************

  for(let d = 0 ; d < companyDetails.length ; d++) {
    
if (document.querySelectorAll('#'+ companyDetails[d].toString().replace("&"," ")).length > 0 &&  document.querySelectorAll('#'+ companyDetails[d] + " .right .block1").length == 0){

if (JSON.stringify(getCompareObject).includes([companyDetails[d]])){
let divtag0 = document.createElement("div");
  divtag0.setAttribute("class", "block1");
  document.querySelector('#'+ companyDetails[d] + " .right").appendChild(divtag0);

let divtag = document.createElement("div");
divtag.setAttribute("class", "Company");
divtag.innerText = companyDetails[d];
divtag0.appendChild(divtag);

  divtag = document.createElement("div");
  divtag.setAttribute("class", "MarketCap");
  divtag.innerText = "M  :  " + rupee.format(getCompareObject[companyDetails[d]]['Market Cap']);
  divtag0.appendChild(divtag);

divtag = document.createElement("div");
divtag.setAttribute("class", "bookvalue");
divtag.innerText = "BK:  " + getCompareObject[companyDetails[d]]['Book Value'];
divtag0.appendChild(divtag);

divtag = document.createElement("div");
divtag.setAttribute("class", "High");
divtag.innerText = "H   :  " + getCompareObject[companyDetails[d]].High;
divtag0.appendChild(divtag);

divtag = document.createElement("div");
divtag.setAttribute("class", "Low");
divtag.innerText = "L   :  " +getCompareObject[companyDetails[d]].Low;
divtag0.appendChild(divtag);

divtag = document.createElement("div");
divtag.setAttribute("class", "Reserve");
divtag.innerText = "R  :  " + rupee.format(getCompareObject[companyDetails[d]].Reserves);
divtag0.appendChild(divtag);

divtag = document.createElement("div");
divtag.setAttribute("class", "Barrowing");
divtag.innerText = "B  :  " + rupee.format(getCompareObject[companyDetails[d]].Borrowings);
divtag0.appendChild(divtag);


//  UPDTAE CURRENT Data************************************************

divtag = document.createElement("div");
divtag.setAttribute("class", "difference0");
let complen = dCompanyObject[companyDetails[d]].length -1 ;
let tday = CurrentPriceObj[companyDetails[d]];
let yday = (dCompanyObject[companyDetails[d]][complen]);

if(tday !== undefined ){
 checknum = checkPercent(tday, yday) ;
if ((((tday - yday) / yday) * 100) < 0){
  downvalue0++;
  divtag.classList.add("downTrend0");
  document.querySelector("button.downTrend0").innerText = downvalue0;  
  negativeList0.push((checkPercent(tday, yday) ));
  negativeCompany0[checkPercent(tday, yday) ] = companyDetails[d];
  
}
else{
  upvalue0++;
  divtag.classList.add("upTrend0");
  document.querySelector("button.upTrend0").innerText = upvalue0;
  positive0.push((checkPercent(tday, yday) ));
  positiveCompany0[checkPercent(tday, yday) ] = companyDetails[d];
}
// }
divtag.innerText = "0:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) + ' %';
}
divtag0.appendChild(divtag);

// **************************************update Current data END************************************

divtag = document.createElement("div");
divtag.setAttribute("class", "difference1");
complen = dCompanyObject[companyDetails[d]].length -1 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
yday = (dCompanyObject[companyDetails[d]][complen -1] );

// console.log(((tday - yday) / yday) * 100);
checknum = checkPercent(tday, yday) ;
if (checknum < 0){
  downvalue1++;
  divtag.classList.add("downTrend1");
  document.querySelector("button.downTrend1").innerText = downvalue1;
  
  negativeList1.push(checknum);
  negativeCompany1[checknum] = companyDetails[d];
  
}
else{
  upvalue1++;
  divtag.classList.add("upTrend1");
  document.querySelector("button.upTrend1").innerText = upvalue1;    
  positive1.push(checknum);
  positiveCompany1[checknum] = companyDetails[d];

}
divtag.innerText = "1:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) + ' %';
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
  document.querySelector("button.downTrend2").innerText = downvalue2;  
  negativeList2.push(checknum);
  negativeCompany2[checknum] = companyDetails[d];
  
}
else{
  upvalue2++;
  divtag.classList.add("upTrend2");
  document.querySelector("button.upTrend2").innerText = upvalue2;
  positive2.push(checknum);
  positiveCompany2[checknum ] = companyDetails[d];


}
divtag.innerText = "2:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) + ' %';
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
  document.querySelector("button.downTrend3").innerText = downvalue3;
  
  negativeList3.push(checknum);
  negativeCompany3[checknum] = companyDetails[d];
  
}
else{
  upvalue3++;
  divtag.classList.add("upTrend3");
  document.querySelector("button.upTrend3").innerText = upvalue3;
  positive3.push(checknum);
  positiveCompany3[checknum] = companyDetails[d];


}
divtag.innerText = "3:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) + ' %';
divtag0.appendChild(divtag);


divtag = document.createElement("div");
divtag.setAttribute("class", "currentPrice");
complen = dCompanyObject[companyDetails[d]].length -1 ;
tday = (dCompanyObject[companyDetails[d]][complen]);
divtag.innerText = rupee.format(tday) ;
divtag0.appendChild(divtag);

// Third symbol END*******************************************************************
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
}

function checkPercent(tday, yday) {
  if (tday == 0 || tday == undefined || ((Math.abs(((tday - yday) / yday) * 100)) > 25)){
    return (Math.random() * 0.0005);
  }
  
  return (((tday - yday) / yday) * 100);
}

function compareStocks(){
  document.querySelector(".charts").style.display = "none";   

  if ( compareList.length > 0) {
    for(let d =0; d < compareList.length ; d++) {

      let divtag0 = document.createElement("div");
        divtag0.setAttribute("class", "block1");
        document.getElementById("comparel").appendChild(divtag0);

        createChartMini(dCompanyObject, compareList[d], divtag0);
      
      let divtag = document.createElement("div");
      divtag.setAttribute("class", "company");
      divtag.innerText = compareList[d];
      divtag0.appendChild(divtag);

        divtag = document.createElement("div");
        divtag.setAttribute("class", "MarketCap");
        divtag.innerText = 'M : ' + getCompareObject[compareList[d]]['Market Cap'];
        divtag0.appendChild(divtag);

        divtag = document.createElement("div");
        divtag.setAttribute("class", "bookvalue");
        divtag.innerText = "BK:  " + getCompareObject[companyDetails[d]]['Book Value'];
        divtag0.appendChild(divtag);

      divtag = document.createElement("div");
      divtag.setAttribute("class", "High");
      divtag.innerText = 'H : ' + getCompareObject[compareList[d]].High;
      divtag0.appendChild(divtag);

      divtag = document.createElement("div");
      divtag.setAttribute("class", "Low");
      divtag.innerText = 'L : ' + getCompareObject[compareList[d]].Low;
      divtag0.appendChild(divtag);

      divtag = document.createElement("div");
      divtag.setAttribute("class", "Reserve");
      divtag.innerText = 'R : ' + getCompareObject[compareList[d]].Reserves;
      divtag0.appendChild(divtag);

      divtag = document.createElement("div");
      divtag.setAttribute("class", "Barrowing");
      divtag.innerText = 'B : ' + getCompareObject[compareList[d]].Borrowings;
      divtag0.appendChild(divtag);
    }
    }
    comparetoggleHide();
}

function clearcompareStocks(){
  document.querySelector(".charts").style.display = "block";   
  document.querySelector("#comparel").innerHTML = "";
  comparetoggleHide();
}

function comparetoggleHide(){
  document.getElementById("compare").classList.toggle("hide");
  document.getElementById("clearcompare").classList.toggle("hide");
}

function clea() {
    document.getElementById("filter").value = '';
    document.getElementById("SectorList").style.display = "block";
    document.querySelector(".charts").innerHTML = "";
    myFunction();

    compareList.forEach(( ) =>{
      compareList.pop();
      compareList.splice(0,1)
    });
    document.getElementById("comparel").innerHTML ="";
    
}

function getDay(days){
  removeActive();
  cleanUpCompare();
//   event.target.classList.add('active');
  createChart(dCompanyObject, dE, days = days)
}
function removeActive(){
//   let lst = document.querySelectorAll("[id^='days']");
//   lst.forEach( element => element.classList.remove('active') );
}
function getBuyMain(){
  let lst = document.querySelectorAll(".buy");
  lst.forEach(element => {
    element.classList.toggle('show');    
  });

}
function getBuy(margin){
              removeActive();
            //   event.target.classList.add('active');
              switch(margin) {
                case 40:
                  createChart(BuyObject40, dE);
                  break;
                case 30:
                  createChart(BuyObject30, dE);
                  break;
                case 60:
                  createChart(BuyObject3Avg, dE);
                  break;
                default:
                  createChart(BuyObject20, dE);
              }
        getBuyMain(); 
}

function createChart(companyObject, e, days = 1000){

let lst = [];
lst = document.querySelectorAll(".charts div");
if(lst.length > 1){
      Array.from(lst).forEach( (element) =>  element.remove() );
}
dE = e;
let resultCount = 0;
    for (let key in companyObject) {
      resultCount++;
          let yValues  = [];
          let volumeValues = [];
          yValues  = [...companyObject[key]];
          volumeValues  = [...dVolumeObject[key]];
          let xValues = [];
          let yValues2 = [];

            yValues.reverse();
            for(let y = 0; y < Math.min(companyObject[key].length, days) ; y++){
              yValues2[y] =  yValues[y] ;
            }
                for (let i = 0; i < Math.min(companyObject[key].length, days) ; i++) {
                  // let d = new Date(dCompanyDateObject[key][i]);
                  // xValues.push( weekday[d.getDay()]);

                  xValues.push(i);
                }
                xValues.reverse();
        let divtag = document.createElement("div");                  
                let lbl = document.createElement("label");
                lbl.setAttribute("for", key);
                lbl.setAttribute("value", 'compare');
                lbl.innerText = 'Compare';
                divtag.appendChild(lbl);
        let checkBox = document.createElement("input");
                  checkBox.setAttribute("type", "checkbox");
                  checkBox.setAttribute("class", key);
                  checkBox.addEventListener("click", setComp);
                  divtag.appendChild(checkBox);
        let lblF = document.createElement("label");
                lblF.setAttribute("for", key);
                lblF.setAttribute("value", 'favourite');
                lblF.innerText = 'Favourite';
                divtag.appendChild(lblF);
        let checkBoxF = document.createElement("input");
                  checkBoxF.setAttribute("type", "checkbox");
                  checkBoxF.setAttribute("class", 'favourite');
                  checkBoxF.setAttribute("id", key);
                  // checkBoxF.setAttribute("value", "favourite");
                  checkBoxF.addEventListener("click", setFav);
                  divtag.appendChild(checkBoxF);
                  companyDetails.push(key);


        let anchortag = document.createElement("a");
              anchortag.setAttribute("href", "https://www.screener.in/company/" + key + "/");
              anchortag.setAttribute("target", "_blank");
              anchortag.appendChild(divtag);
        let canvas = document.createElement("canvas");
                    canvas.setAttribute("id", key);
                    canvas.setAttribute("class", key);       
        
        let divtagMain = document.createElement("div"); 
                  divtagMain.setAttribute("id", key);
        let divtagLeft = document.createElement("div"); 
                  divtagMain.appendChild(divtagLeft);
                  divtagLeft.appendChild(anchortag);
        let divtagRight = document.createElement("div"); 
                divtagRight.setAttribute("class", "right");
                  divtagMain.appendChild(divtagRight);

        divtag.appendChild(canvas);
                    document.querySelector(".charts").appendChild(divtagMain);
                      // let cmax = Math.max(...yValues2);
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
                          // if (( ( (Number(buyAvg[20]) + Number(buyAvg[29]) + Number(buyAvg[15])) / 3) < (ccurrect * 1.09 )) && (((cmax-ccurrect)/cmax) * 100) > 30 ){
                            BuyObject3Avg[key] = companyObject[key];
                            // console.log(key + "    " + ( (Number(buyAvg[20]) + Number(buyAvg[29]) + Number(buyAvg[15]) )/3).toFixed(2) + "    " + ccurrect);
                          }

                      
                        new Chart(canvas, {
                            type: "line",
                            data: {
                            labels: xValues,
                            datasets: [{
                                    label: key + '   FL ' + ( ((cmax-cmin)/cmax) * 100).toFixed(2).toString() + ' %   FC  ' + ( ((cmax-ccurrect)/cmax) * 100).toFixed(2).toString() + ' %' ,
                                    pointRadius: 0,
                                    borderWidth : 0.5,
                                    borderColor: "rgba(0,0,0,0.9)",
                                    data: [...yValues2].reverse(),
                                    }]
                                  },  
                                  options: {
                                    animation: false,
                                    normalized: true,
                                      scales: {
                                          yAxes: [{
                                              ticks: {
                                                  fontSize: 14
                                          }
                                      }]
                                  }
                                  }

                            });
                      
                            let canvas2 = document.createElement("canvas");
                            canvas2.setAttribute("class", 'volume');
                            divtag.appendChild(canvas2);
                            new Chart(canvas2, {
                              type: "line",
                              data: {
                              labels: xValues, // .reverse().slice(0,30),
                              datasets: [{
                                      label: volumeValues[volumeValues.length - 1],
                                      tooltip: '',
                                      pointRadius: 0,
                                      borderWidth : 0.5,
                                      borderColor: "rgba(0,0,0,0.9)",
                                      data: [...volumeValues]
                                      }]
                                    },
                              options: {
                                    animation: false,
                                    normalized: true,
                                      plugins: {
                                          legend: true // Hide legend
                                      },
                                      scales: {
                                        yAxes: [{
                                            ticks: {
                                                fontSize: 14
                                            }
                                        }]
                                    }
                                    }
                              });





    }
document.getElementById("results0").innerText = resultCount.toString();
let idlst = document.querySelectorAll("[id^='getData']");
idlst.forEach( element => {
element.innerText = "Stocks " + element.classList[0] +'+';
element.classList.remove('active');
})
updateCompanyDeatils();
// setTimeout(updateCompanyDeatils, 1000);
// setTimeout(updateFavourite, 5000);

// setTimeout(getFav, 100);

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


  function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function getData(e) {
        removeActive();
        cleanUpCompare();
        document.getElementById("getData" + e).innerText = "Loading...";
        event.target.classList.add('active');
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/" + e.toString());
        xhr.send();
        xhr.responseType = "json";
        xhr.onload = () => {
          if (xhr.readyState == 4 && xhr.status == 200) {
            dCompanyObject = xhr.response.companyObject;
            dCompanyDateObject = xhr.response.companyDateObj;
            dVolumeObject = xhr.response.volumeObject;
            if(JSON.stringify(CurrentPriceObj).length == 2) {
            CurrentPriceObj = xhr.response.currentPriceData;
            }
            createChart( xhr.response.companyObject, e);
          } 
          else {
            console.log(`Error: ${xhr.status}`);
            }
          };
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
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/" + event.target.id.toString());
        xhr.send();
        xhr.responseType = "json";
        xhr.onload = () => {
          if (xhr.readyState == 4 && xhr.status == 200) {
            dCompanyObject = xhr.response.companyObject;
            dCompanyDateObject = xhr.response.companyDateObj;
            dVolumeObject = xhr.response.volumeObject;
            CurrentPriceObj = xhr.response.currentPriceData;
            createChart( xhr.response.companyObject, event.target.id);
          } 
          else {
            console.log(`Error: ${xhr.status}`);
            }
          };
  }

  function getSectorDataAll() {
    // removeActive();
    document.getElementById("filter").value = 'All';
    document.getElementById("results0").innerText = "Loading...";
    document.getElementById("SectorList").style.display = 'none';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/All" );
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        dCompanyObject = xhr.response.companyObject;
        dCompanyDateObject = xhr.response.companyDateObj;
        dVolumeObject = xhr.response.volumeObject;
        CurrentPriceObj = xhr.response.currentPriceData;
        createChart( xhr.response.companyObject, 'All');
      } 
      else {
        console.log(`Error: ${xhr.status}`);
        }
      };
}

 

// Search Bar Script to filter charts matching the typed text




function setComp(event){

    if (event.target.checked){
      compareList.push(event.target.classList[0]);
      // console.log(compareList);
    }
    else{
      let index = compareList.indexOf(event.target.classList[0]);
      compareList.splice(index,1)
    
    }
    
    }

    function setFav(event){
        let AFL = [...Array.from(localStorage)];
    
        if(!AFL.includes(event.target.id.toString())){
          localStorage.setItem(localStorage.length, event.target.id.toString());
          let clr = document.querySelectorAll("#" + event.target.id.toString())[1];
          clr.classList.add("star");
        }
        else{
          let clr = document.querySelectorAll("#" + event.target.id.toString())[1];
          clr.classList.toggle("star");
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

      function getCompare() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/getcompare");
        xhr.send();
        xhr.responseType = "json";
        xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // console.log("Success");
            getCompareObject = xhr.response;
            // console.log(getCompareObject);
        } 
        else {
            console.log(`Error: ${xhr.status}`);
            }
        };
}
getCompare();

// let CrLink = 'https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vSe4LB0TG9QgBjssTYT2uOd_83tl16F1UP0fdBaFMB6fC1lBYMz9y8yQaiokTid2fsQW1M5aZ7oLG8D/pubhtml?gid=0&single=true';



function getCurrentPrice() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", CrLink);
  xhr.send();
  xhr.responseType = "text/html";
  xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
      CurrentPriceObj = xhr.response;
      // console.log(CurrentPriceObj);
  } 
  else {
      console.log(`Error: ${xhr.status}`);
      }
  };
}




function createChartMini(companyObject, companyName, divtag0, days = 1000){
          let yValues  = [];
          yValues  = [...companyObject[companyName]];
          let xValues = [];
          let yValues2 = [];

            yValues.reverse();
            for(let y = 0; y < Math.min(companyObject[companyName].length, days) ; y++){
              yValues2[y] =  yValues[y] ;
            }
                for (let i = 0; i < Math.min(companyObject[companyName].length, days) ; i++) {
                  xValues.push(i);
                }
                xValues.reverse();
        let divtag = document.createElement("div");
        let anchortag = document.createElement("a");
        anchortag.setAttribute("href", "https://www.screener.in/company/" + companyName + "/");
        anchortag.setAttribute("target", "_blank");
        anchortag.appendChild(divtag);
                    let canvas = document.createElement("canvas");
                    canvas.setAttribute("id", companyName );
                    canvas.setAttribute("class", "miniChart" );
        divtag.appendChild(canvas);
        divtag0.appendChild(anchortag);
                      // let cmax = Math.max(...yValues2);
                      let ccurrect = yValues2[0];
                      let cmin = Math.min(...yValues2);
                      let cmax = Math.max(...yValues2);
                      let buyAvg = [...yValues2];                        
                      
                        new Chart(canvas, {
                            type: "line",
                            data: {
                            labels: xValues,
                            datasets: [{
                                    label: companyName + '   FL ' + ( ((cmax-cmin)/cmax) * 100).toFixed(2).toString() + ' %  FC (' + ( ((cmax-ccurrect)/cmax) * 100).toFixed(2).toString() + ' )'  ,
                                    pointRadius: 0,
                                    borderWidth : 0.5,
                                    borderColor: "rgba(0,0,0,0.9)",
                                    data: [...yValues2].reverse(),
                                    }]
                                  },
                                  options: {
                                          plugins: {
                                          legend: {
                                          labels: {
                                          font: {
                                          size: 8
                                          }
                                          }
                                          }
                                          }
                                          }  
                            });

    }


 
  // Search Bar Script to filter charts matching the typed text

  function setFilter(){
    let filterData = (document.querySelector("#filter").value).toUpperCase();
    if ( filterData.length > 0) {
        var lst = Array.from(document.querySelectorAll(".charts > div"));
        lst.forEach( (ele) => ele.style.display = "none" );

        lst = Array.from(document.querySelectorAll("[id^= '" + filterData + "']"));
        lst.forEach( ele => ele.style.display = "" ); 

    }

    else{
      let lst = document.querySelectorAll(".charts > div");
      lst.forEach( ele => ele.style.display = "" );
    }
    }

function setFilter2(){
      let filterData = (document.querySelector("#filters").value).toUpperCase();
      if ( filterData.length > 0) {
          var lst = Array.from(document.querySelectorAll(".charts > div"));
          lst.forEach( (ele) => ele.style.display = "none" );

          lst = Array.from(document.querySelectorAll("[id^= '" + filterData + "']"));
          lst.forEach( ele => ele.style.display = "" ); 

      }
  
      else{
        let lst = document.querySelectorAll(".charts > div");
        lst.forEach( ele => ele.style.display = "" );
      }
      }


let myFunc1 = letsDebounce(setFilter,1000);
let myFunc2 = letsDebounce(setFilter2,1000);
  
  function letsDebounce(fn,d){
      let timer;
      return function(){
      clearTimeout(timer);
      timer=setTimeout(fn,d);
      }
  }
  if(document.querySelectorAll("#filter").length > 0){
    document.getElementById("filter").addEventListener('input', myFunc1);
}

  if(document.querySelectorAll("#filters").length > 0){
      document.getElementById("filters").addEventListener('input', myFunc2);
  }

  function cleanUpCompare() {
    lst = document.querySelectorAll(".comparel .block1");
    lst.forEach( (ele) => {
      ele.style.display = "none" ;
    });
    

  }


  function getUp0(){

    let lst = document.querySelectorAll(".charts > div");
    lst.forEach( (ele) => {
      ele.style.display = "none" ;
    });
   //positive0.length - 1;
      for(let i = 0; i < Math.min(300, positive0.length - 1);){
      let indx = positiveCompany0[positive0[i]];
      // console.log(i + "   " + indx);
      let elementUp = document.getElementById(indx);
      if (elementUp != null){
      elementUp.parentElement.insertBefore(elementUp, elementUp.parentElement.children[i]);
      elementUp.style.display = "";
      i++;
      document.getElementById("results0").innerText = Math.max(i , 1) ;
      }
      }



}

function getDown0(){

  let lst = document.querySelectorAll(".charts > div");
  lst.forEach( (ele) => {
    ele.style.display = "none" ;
  });

// negativeList0.length  - 1
  for(let i = 0; i < Math.min(300, negativeList0.length  - 1); ){
    let indx = negativeCompany0[negativeList0[i]];
    // console.log(i + "   " + indx);
    let elementUp = document.getElementById(indx);
    if (elementUp != null){
    elementUp.style.display = "";
    i++;
    elementUp.parentElement.insertBefore(elementUp, elementUp.parentElement.children[i]);
    document.getElementById("resultsd0").innerText = Math.max((i) , 1) ;
    }
    }


}

// GET UP DOWN DUP WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

function getUp1(){

  let lst = document.querySelectorAll(".charts > div");
  lst.forEach( (ele) => {
    ele.style.display = "none" ;
  });
//  positive1.length  - 1
    for(let i = 0; i < Math.min(250, positive1.length - 1);){
    let indx = positiveCompany1[positive1[i]];
    // console.log(i + "   " + indx);
    let elementUp = document.getElementById(indx);
    if (elementUp != null){
    elementUp.style.display = "";
    i++;
    elementUp.parentElement.insertBefore(elementUp, elementUp.parentElement.children[i]);
    document.getElementById("results1").innerText = Math.max(i , 1) ;
    }
    }



}

function getDown1(){

let lst = document.querySelectorAll(".charts > div");
lst.forEach( (ele) => {
  ele.style.display = "none" ;
});

// negativeList1.length  - 1
for(let i = 0; i < Math.min(300, negativeList1.length  - 1); ){
  let indx = negativeCompany1[negativeList1[i]];
  // console.log(i + "   " + indx);
  let elementUp = document.getElementById(indx);
  if (elementUp != null){
  elementUp.style.display = "";
  i++;
  elementUp.parentElement.insertBefore(elementUp, elementUp.parentElement.children[i]);
  document.getElementById("resultsd1").innerText = Math.max((i) , 1) ;
  }
  }


}

function getUp2(){

  let lst = document.querySelectorAll(".charts > div");
  lst.forEach( (ele) => {
    ele.style.display = "none" ;
  });
//  positive2.length  - 1
    for(let i = 0; i < Math.min(250, positive2.length - 1);){
    let indx = positiveCompany2[positive2[i]];
    // console.log(i + "   " + indx);
    let elementUp = document.getElementById(indx);
    if (elementUp != null){
    elementUp.style.display = "";
    i++;
    elementUp.parentElement.insertBefore(elementUp, elementUp.parentElement.children[i]);
    // document.getElementById("results2").innerText = Math.max(i , 1) ;
    }
    }



}

function getDown2(){

let lst = document.querySelectorAll(".charts > div");
lst.forEach( (ele) => {
  ele.style.display = "none" ;
});

// negativeList2.length  - 1
for(let i = 0; i < Math.min(300, negativeList2.length  - 1); ){
  let indx = negativeCompany2[negativeList2[i]];
  // console.log(i + "   " + indx);
  let elementUp = document.getElementById(indx);
  if (elementUp != null){
  elementUp.style.display = "";
  i++;
  elementUp.parentElement.insertBefore(elementUp, elementUp.parentElement.children[i]);
  // document.getElementById("resultsd2").innerText = Math.max((i) , 1) ;
  }
  }


}

function getUp3(){

  let lst = document.querySelectorAll(".charts > div");
  lst.forEach( (ele) => {
    ele.style.display = "none" ;
  });
//  positive3.length  - 1
    for(let i = 0; i < Math.min(250, positive3.length - 1);){
    let indx = positiveCompany3[positive3[i]];
    // console.log(i + "   " + indx);
    let elementUp = document.getElementById(indx);
    if (elementUp != null){
    elementUp.style.display = "";
    i++;
    elementUp.parentElement.insertBefore(elementUp, elementUp.parentElement.children[i]);
    // document.getElementById("results3").innerText = Math.max(i , 1) ;
    }
    }



}

function getDown3(){

let lst = document.querySelectorAll(".charts > div");
lst.forEach( (ele) => {
  ele.style.display = "none" ;
});


for(let i = 0; i < Math.min(300, negativeList3.length  - 1); ){
  let indx = negativeCompany3[negativeList3[i]];
  // console.log(i + "   " + indx);
  let elementUp = document.getElementById(indx);
  if (elementUp != null){
  elementUp.style.display = "";
  i++;
  elementUp.parentElement.insertBefore(elementUp, elementUp.parentElement.children[i]);
  // document.getElementById("resultsd3").innerText = Math.max((i) , 1) ;
  }
  }


}

// GET UP DOWN DUP ENDS WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW


  // compareStocks
  function getFavourits(){

    let lst = document.querySelectorAll(".charts > div");
    lst.forEach( (ele) => {
      ele.style.display = "none" ;
    });

    cleanUpCompare();

    lst = document.querySelectorAll(".charts div");
    lst.forEach( ele => { 
      if(ele.innerHTML.toString().includes("star")){
      ele.style.display = "" ;
      }
    }); 

    toggleHide();
}

function toggleHide(){
    document.getElementById("Favourits").classList.toggle("hide");
    document.getElementById("clearFavourits").classList.toggle("hide");
}

function clearFavourits(){

    let lst = document.querySelectorAll(".charts > div");
    lst.forEach( (ele) => {
      ele.style.display = "" ;
    });

    toggleHide();

}

//   function setFav(){
//     let AFL = [...Array.from(localStorage)];

//     if(!AFL.includes(event.target.id.toString())){
//       localStorage.setItem(localStorage.length, event.target.id.toString());
//       let clr = document.querySelectorAll("#" + event.target.id.toString())[1];
//       clr.classList.toggle("star");
//     }
//     else{
//       for(let i = 0; i < localStorage.length; i++){

//         if(localStorage[i] == event.target.id.toString()){
//           localStorage.removeItem(i);
//           let AFL2 = [];

//           for(let key in localStorage){
//             if(AFL2.length < AFL.length - 1){
//               AFL2.push(localStorage[key]);
//             }
//           }

//           localStorage.clear();

//           for(let j = 0; j < AFL2.length ; j++){

//             if(AFL2[j] != undefined){
//               localStorage.setItem(j , AFL2[j]);
//             }
//           }
//         }

//       }
//     }
    



//     }


    function getFav(){
    for (let i= 0; i < localStorage.length; i ++ ){
      let clr = document.querySelectorAll("#" + localStorage.getItem(i))[1];
      clr.classList.toggle("star");

    };
  }
  
  