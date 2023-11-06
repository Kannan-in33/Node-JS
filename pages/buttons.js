// GET SECTOR Button Get Sector from Search box
function getsector(sector){
    
    let listOfCompanies = [];
    listOfCompanies = Object.keys(getCompareObject);
    let sectorList = [];
    for(let i = 0 ; i < listOfCompanies.length -1; i++){
      // let companyPrice = (getCompareObject[listOfCompanies[i]]['Current Price']);
      if( listOfCompanies[i].includes(sector.toUpperCase()) ){
        sectorList.push(listOfCompanies[i]);
      }
  }
      getHTTPs(' ,' + sectorList, 1 );
  
}

// CLEAR Button X for Clearing Search box
function clea() {
    lst = document.querySelectorAll(".charts > div");
    // lst.forEach( ele => ele.style.display = "");
    document.getElementById("filter").value = '';
  if(document.URL.includes("Sector")){
    
    document.getElementById("SectorList").style.display = "block";
    // document.querySelector(".charts").innerHTML = "";
    myFunction();

    compareList.forEach(( ) =>{
      compareList.pop();
      compareList.splice(0,1)
    });
    document.getElementById("comparel").innerHTML ="";
  }
  else{
    setFilter();
  }
  
}

// FAVOURITE button
function getFavData(stockName) {    
    getHTTPs("," + stockName, 1);
    updateCompanyDeatils();
    showPages();
}

//GET STOCKS button
function getStockData(){
    getSectorList();
  }
//GET STOCKS button
function getSectorList(){
    let listOfCompanies = [];
    listOfCompanies = Object.keys(getCompareObject);
    let sectorList = [];
    for(let i = 0 ; i < listOfCompanies.length -1; i++){
      let companyPrice = (getCompareObject[listOfCompanies[i]]['Current Price']);
      if( (companyPrice > Number(pricemin.value)) && (companyPrice < Number(pricemax.value)) ){
        sectorList.push(listOfCompanies[i]);
      }
  }
      getHTTPs(' ,' + sectorList);
  }



// UP Show Gainers button DropDown List
function showGainers(){
    document.querySelector("#pagesDropdown").style.display = 'none';
    document.querySelector("#GainDropdown").style.display = '';
    document.querySelector("#NoGainDropdown").style.display = 'none';
      let lst = document.querySelectorAll("[class^='upTrend']");
      lst.forEach(element => {
        element.classList.toggle('show');    
      });
    
}

// DOWN Show No Gainers dropdown button
function showNoGainers(){
    document.querySelector("#pagesDropdown").style.display = 'none';
    document.querySelector("#GainDropdown").style.display = 'none';
    document.querySelector("#NoGainDropdown").style.display = '';
    let lst = document.querySelectorAll("[class^='downTrend']");
    lst.forEach(element => {
      element.classList.toggle('show');    
    });
  
}

// Get DOWN Buttons to see 5 days down
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

// get UP Buttons to see who is currently up
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
  
// Fill Favorites Star Color
function getFav(){
    for (let i= 0; i < localStorage.length; i ++ ){
      let clr = document.querySelectorAll("#" + localStorage.getItem(i))[1];
      clr.classList.toggle("star");

    };
}

// SET INTERVAL function
let myFunc1 = letsDebounce(setFilter,1000);
    
function letsDebounce(fn,d){
          let timer;
          return function(){
            document.getElementById("sliderminval").innerText = 9 + Math.trunc(((slidermin.value * 5)+ 15)  / 60) + ':' + Math.trunc(((slidermin.value * 5)+ 15)  % 60);
          clearTimeout(timer);
          timer=setTimeout(fn,d);
          }
      }
      if(document.querySelectorAll("#filter").length > 0){
        document.getElementById("filter").addEventListener('input', myFunc1);
}

// Filter Chart based on the typed text
function setFilter2(){
    let filterData = (document.querySelector("#filters").value).toUpperCase();
    if ( filterData.length > 0) {
      var lst = Array.from(document.querySelectorAll(".charts > div"));
      lst.forEach( (ele) => ele.style.display = "none" );
       lst = Array.from(document.querySelectorAll(".charts8 > div"));
      lst.forEach( (ele) => ele.style.display = "none" );
       lst = Array.from(document.querySelectorAll(".downcharts > div"));
      lst.forEach( (ele) => ele.style.display = "none" );
       lst = Array.from(document.querySelectorAll(".flatcharts > div"));
      lst.forEach( (ele) => ele.style.display = "none" );


        lst = Array.from(document.querySelectorAll("[id^= '" + filterData + "']"));
        lst.forEach( ele => ele.style.display = "" ); 

    }

    else{
      var lst = Array.from(document.querySelectorAll(".charts > div"));
      lst.forEach( (ele) => ele.style.display = "" );
       lst = Array.from(document.querySelectorAll(".charts8 > div"));
      lst.forEach( (ele) => ele.style.display = "" );
       lst = Array.from(document.querySelectorAll(".downcharts > div"));
      lst.forEach( (ele) => ele.style.display = "" );
       lst = Array.from(document.querySelectorAll(".flatcharts > div"));
      lst.forEach( (ele) => ele.style.display = "" );
    }
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

function checkPercent(tday, yday) {
    if (tday == 0 || tday == undefined || ((Math.abs(((tday - yday) / yday) * 100)) > 25)){
      return (Math.random() * 0.0005);
    }
    
    return (((tday - yday) / yday) * 100);
}
// Favourite Section update
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
// Favourite section update end

var sliderchart = document.querySelector('#slidermin');

function getChart() {
    document.querySelector("#sliderminval").innerText = sliderchart.value;
    window.scrollTo({ left: 0, top: 0 , behavior: "smooth" });
    // getFivePer();
       
  }
  let myFunc2 = letsDebounce(getCharts,800);
  
  function getCharts(){
    clearChart();
    window.scrollTo({ left: 0, top: 0 , behavior: "smooth" });
      // createFiveChart(dCompanyObject);
      createFiveChart(companyList, days = sliderchart.value);
      // clearVChart();
    }

    
  function moveChart(event){
    let settimer;
    let sliderValue = event.target.value;
    document.getElementById("stockslider").innerText = event.target.value;
    // console.log(event.target.id, event.target.value);
    days = event.target.value;
    let cnewCompanyObject2 = {};
      cnewCompanyObject2[event.target.id] = currentPriceDataTable[event.target.id];
      document.getElementById("sliderminval").innerText = 9 + Math.trunc(((sliderValue * 5)+ 15)  / 60) + ':' + Math.trunc(((sliderValue * 5)+ 15)  % 60);
    
  setTimeout(movingAddingCharts(event.target.id, location, sliderValue), 1000);

  }


function movingAddingCharts(key, location, days){    
                              addPriceChart(key, location, days);
                              addVolumeChart(key, location, days)
                }

                if(document.querySelectorAll("#slidermin").length > 0){
                  document.getElementById("slidermin").addEventListener('input', myFunc2);
              }

              var slider = document.querySelector('#slider');
              var mini = document.getElementById("mini");
              var maxi = document.getElementById("maxi");
              // mini.value = maxi.value = slider.value;
              // maxi.value = slider.value;
              
              // slider.oninput = function() {
              //   // if (slider.value < 0){
              //   //   mini.value = 248 - this.value;
              //   //   maxi.value = 0;
              //   // }
              //   // else{
              //     maxi.value = this.value;
              //   //   mini.value = 0;
              //   // }
                  
              //   }
              
              //   // mini.oninput = function() {
              //   //   slider.value = this.value;   
                    
              //   //   }
              //     maxi.oninput = function() {
              //       slider.value = this.value;   
                      
              //       }
              
              //       function resetSlider(){
              //         maxi.value = 0;
              //         slider.value = 0;
              //         getDay(20);
              //       }
              
              //       document.onscroll = function(){
              //         document.querySelector(".range").classList.add("hide");
              //         }
              //         document.querySelector("#rangeshow").onclick = function(){
              //           document.querySelector(".range").classList.toggle("hide");
              //         }
                      
              
              // var priceslidermin = document.querySelector('#slidermin');
              // var favButton = document.querySelector('#result');
              // var priceslidermin2 = document.querySelector('#slidermin2');
              // var priceslidermax = document.querySelector('#slidermax');
              // var pricemin = document.getElementById("pricemin");
              // var pricemax = document.getElementById("pricemax");


                      

              //         priceslidermin.oninput = function() {
              //           pricemin.value = this.value;
              //           if ((Number(this.value) + 5) >= priceslidermax.value){
              //               priceslidermax.value = Number(this.value) + 5;
              //               pricemax.value = Number(this.value) + 5;
              //           }
              //           }
              //         priceslidermin2.oninput = function() {
              //           pricemin.value = this.value;
              //           if ((Number(this.value) + 5) >= priceslidermax.value){
              //               priceslidermax.value = Number(this.value) + 5;
              //               pricemax.value = Number(this.value) + 5;
              //           }
              //           }
                      
                      
              //         priceslidermax.oninput = function() {
              //           pricemax.value = this.value;
              //           priceslidermin2.max = Number(this.value) - 5;
              //           if (Number(this.value)  <= (Number(pricemin.value) + 5)){
              //             pricemin.value = Number(this.value) -5;
              //             priceslidermin2.value = Number(this.value) - 5;
              //         }
              
              //           }
                      
              
              //             maxi.oninput = function() {
              //               slider.value = this.value;   
                              
              //               }

function getFavNew(){
    days = Math.min(currentPriceDataTable[companyList[0]].length - 1, slidermin.value);
    clearChart();
    SliderRange = days;
    let FavcompareList = [...Array.from(localStorage)].sort();

            goingUpCompanyObject = {};      
        for (let i = 0; i < FavcompareList.length; i++) {  
            // goingUpCompanyObject[FavcompareList[i]] = currentPriceDataTable[FavcompareList[i]];   
            let key =FavcompareList[i];
            createChartSection(key, "charts", days);
    
            addPriceChart(key, "charts", days);        

            addVolumeChart(key, "charts", days);    
}

}
// favButton.onclick = function() {
//                 getFavNew();
// }