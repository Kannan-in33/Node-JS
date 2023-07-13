let dCompanyObject = {};
let x10dCompanyObject = {};
let dE;
let BuyObject40 = {};
let BuyObject30 = {};
let BuyObject20 = {};
let BuyObject3Avg = {};
let compareList =[];
let companyDetails = [];

let rupee = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumSignificantDigits: 3,
});

function updateCompantDeatils(){
  for(let d = 0 ; d < companyDetails.length ; d++) {

    if (document.querySelectorAll('#'+ companyDetails[d].toString().replace("&"," ")).length > 0 &&  document.querySelectorAll('#'+ companyDetails[d] + " .right .block1").length == 0){

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
}
}
}

function compareStocks(){
  let lst = document.querySelectorAll(".charts div");
  lst.forEach(element => {
    element.remove();    
  });

//   let divtag = document.createElement("div");
//         divtag.setAttribute("class", "block");
//         document.getElementById("comparel").appendChild(divtag);
        
       
//   let   divtagc = document.createElement("div");
//         divtagc.setAttribute("class", "company");
//         divtagc.innerText = "COMPANY";
//         divtag.appendChild(divtagc);

//         divtagc = document.createElement("div");
//         divtagc.setAttribute("class", "MarketCap");
//         divtagc.innerText = "Market Cap";
//         divtag.appendChild(divtagc);

//         divtagc = document.createElement("div");
//         divtagc.setAttribute("class", "bookvalue");
//         divtagc.innerText = "Book Value";
//         divtag.appendChild(divtagc);

//         divtagc = document.createElement("div");
//         divtagc.setAttribute("class", "High");
//         divtagc.innerText = "High";
//         divtag.appendChild(divtagc);

//         divtagc = document.createElement("div");
//         divtagc.setAttribute("class", "Low");
//         divtagc.innerText = "Low";
//         divtag.appendChild(divtagc);

//         divtagc = document.createElement("div");
//         divtagc.setAttribute("class", "Reserve");
//         divtagc.innerText = "Reserve";
//         divtag.appendChild(divtagc);

//         divtagc = document.createElement("div");
//         divtagc.setAttribute("class", "Barrowing");
//         divtagc.innerText = "Barrowing";
//         divtag.appendChild(divtagc);
      

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

}

function clea() {
    document.getElementById("filter").value = '';
    document.getElementById("SectorList").style.display = "";
    myFunction();

    compareList.forEach(( ) =>{
      compareList.pop();
      compareList.splice(0,1)
    });
    document.getElementById("comparel").innerHTML ="";
    
}

function getDay(days){
  removeActive();
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
          yValues  = [...companyObject[key]];
          let xValues = [];
          let yValues2 = [];

            yValues.reverse();
            for(let y = 0; y < Math.min(companyObject[key].length, days) ; y++){
              yValues2[y] =  yValues[y] ;
            }
                for (let i = 0; i < Math.min(companyObject[key].length, days) ; i++) {
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
                          
                        if (( ( (Number(buyAvg[20]) + Number(buyAvg[29]) + Number(buyAvg[15])) / 3) < (ccurrect * 1.09 )) && (((cmax-ccurrect)/cmax) * 100) > 30 ){
                          BuyObject3Avg[key] = companyObject[key];
                          // console.log(key + "    " + ( (Number(buyAvg[20]) + Number(buyAvg[29]) + Number(buyAvg[15]) )/3).toFixed(2) + "    " + ccurrect);
                        }

                      
                        new Chart(canvas, {
                            type: "line",
                            data: {
                            labels: xValues,
                            datasets: [{
                                    label: key + '   FL ' + ( ((cmax-cmin)/cmax) * 100).toFixed(2).toString() + ' %  FC (' + ( ((cmax-ccurrect)/cmax) * 100).toFixed(2).toString() + ' )'  ,
                                    pointRadius: 0,
                                    borderWidth : 0.5,
                                    borderColor: "rgba(0,0,0,0.9)",
                                    data: [...yValues2].reverse(),
                                    }]
                                  }   
                            });



    }
document.getElementById("results").innerText = resultCount.toString();
let idlst = document.querySelectorAll("[id^='getData']");
idlst.forEach( element => {
element.innerText = "Stocks " + element.classList[0] +'+';
element.classList.remove('active');
})


setTimeout(updateFavourite, 1000);
setTimeout(updateCompantDeatils, 1000);
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

function getData() {
        // removeActive();
        document.getElementById("filter").value = event.target.innerText;
        event.target.parentElement.style.display = 'none';
        document.getElementById("results").innerText = "Loading...";
        event.target.classList.add('active');
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/" + event.target.id.toString());
        xhr.send();
        xhr.responseType = "json";
        xhr.onload = () => {
          if (xhr.readyState == 4 && xhr.status == 200) {
            dCompanyObject = xhr.response.companyObject;
            createChart( xhr.response.companyObject, event.target.id);
          } 
          else {
            console.log(`Error: ${xhr.status}`);
            }
          };
  }

  

 

// Search Bar Script to filter charts matching the typed text
function setFilter(){
    let filterData = (document.querySelector("#filter").value).toUpperCase();
    if ( filterData.length > 0) {
        let lst = document.querySelectorAll(".charts a");
        lst.forEach( (ele) => {
          if(!ele.id.toLowerCase().includes(filterData)){
          ele.style.visibility = "hidden" ;
          }
        });
        
        // lst = document.querySelectorAll(".charts a[id^= '" + filterData + "']");
        // lst.forEach( ele => { 
        //   ele.style.display = "" ;
        // }); 
    }

    else{
      let lst = document.querySelectorAll(".charts a");
      lst.forEach( ele => ele.style.display = "" );
    }
    }


function letsDebounce(fn,d){
    let timer;
    return function(){
    clearTimeout(timer);
    timer=setTimeout(fn,d);
    }
}

function setComp(event){

    if (event.target.checked){
      compareList.push(event.target.classList[0]);
      console.log(compareList);
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
            console.log("Success");
            getCompareObject = xhr.response;
            // console.log(getCompareObject);
        } 
        else {
            console.log(`Error: ${xhr.status}`);
            }
        };
}
getCompare();



let myFunc = letsDebounce(myFunction,1000);
document.getElementById("filter").addEventListener('input', myFunc);


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
function setFilter2(){
      let filterData = (document.querySelector("#filters").value).toUpperCase();
      if ( filterData.length > 0) {
          var lst = Array.from(document.querySelectorAll(".charts div"));
          lst.forEach( (ele) => ele.style.display = "none" );

          lst = Array.from(document.querySelectorAll("[class^= '" + filterData + "']"));
          lst.forEach( ele => ele.style.display = "" ); 

      }
  
      else{
        let lst = document.querySelectorAll(".charts div");
        lst.forEach( ele => ele.style.display = "" );
      }
      }
  
let myFunc2 = letsDebounce(setFilter2,1000);
  
  function letsDebounce(fn,d){
      let timer;
      return function(){
      clearTimeout(timer);
      timer=setTimeout(fn,d);
      }
  }
  
  document.getElementById("filters").addEventListener('input', myFunc2);

  function getFavourits(){

    let lst = document.querySelectorAll(".charts > div");
    lst.forEach( (ele) => {
      ele.style.display = "none" ;
    });
    
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
  
  