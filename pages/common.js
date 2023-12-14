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
let previousDayVolumeDataTable = {};
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
let goingUp = [];
let goingUp8 = [];
let goingDown = [];
let goingFlat = [];
let goingFlatcounter = 0;
let goingUpPosition8 = {};
let goingUpPosition = {};
let goingDownPosition = {};
let goingFlatPosition = {};
let days = 0;
let lastFiveOpenClose ={};
let dict = {};
let lsData = {};

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

function getHTTPs(path){
    companyDetails = [];
    dCompanyObject = {};
    // MasterdCompanyObjectCopy = {};
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/" +  path)  ;
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        dCompanyObject = xhr.response.companyObject;
        // dCompanyDateObject = xhr.response.companyDateObj;
        
        // if(Object.keys(MasterdCompanyObject).length == 0){
        //   MasterdCompanyObject = dCompanyObject;
        //   MasterdCompanyObjectCopy = dCompanyObject;
        // }
        // else{              
        //   MasterdCompanyObject = Object.assign(dCompanyObject, MasterdCompanyObjectCopy)
        //   MasterdCompanyObjectCopy = {};
        //   MasterdCompanyObjectCopy = dCompanyObject;
        // }

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
        CurrentPriceObj = xhr.response.currentPriceData;
        getFiveMinVolumeData = xhr.response.getFiveMinVolumeData,
        companyObject = xhr.response.companyObject;
        lastFiveOpenClose = xhr.response.lastFiveOpenClose;
        previousDayVolumeDataTable = xhr.response.previousDayVolumeDataTable;
        
        // if( path == "getFivePer"){
            companyList = [...xhr.response.companyList];
            createFiveChart(companyList);
             
        // }
        // else{
        //     createChart( xhr.response.companyObject );
        //     updateCompanyDeatils();  
        // }
        
      } 
      else {
        console.log(`Error: ${xhr.status}`);
        }
      };
}

// New Chart Group ends here

let chartlim = 0;
let lst = [];
let newPositiveSort = [];
let per = 0;
let newCompanyObject2 ={};
let goingUpCompanyObject = {};
let newCompanyObject = {};
let posi = {};
let positiveSort = [];

// New Chart Group starts here
let userInput = "";
function createFiveChart(companyList){
    days = Math.min(currentPriceDataTable[companyList[0]].length , slidermin.value);
    SliderRange = days;
      let chartlim = 0;
      let lst = [];
      let newPositiveSort = [];
      let per = 0;
      let newCompanyObject2 ={};
      goingUp = [];
      goingUp8 = [];
      goingDown = [];
      goingFlat = [];
  
        let newCompanyObject = {};
        let posi = {};
       
        let positiveSort = [];
        if(companyList.length ){
          // document.getElementById("pages").innerText = companyList.length;
      }

      if(localStorage.getItem("VolumeHigh") != null){
        lsData = JSON.parse(localStorage.getItem("VolumeHigh"));
      }

      // Adding Faviourit

      if(localStorage.getItem("Favourite") != null){
        favData = JSON.parse(localStorage.getItem("Favourite"));
      }

        for (let i = 0; i < companyList.length; i++) {
            getStockStatus(companyList[i]);            
        }
  
        goingUpCompanyObject8 = {};
        goingUpCompanyObject = {};
        goingDownCompanyObject = {};
        goingFlatCompanyObject = {};
  
        if(goingUp8.length > 0 ){
            goingUp8.sort((a,b) => a - b);
            goingUp8.reverse();
            goingUp8.forEach( (CurrentPer) =>{
              goingUpCompanyObject8[goingUpPosition8[CurrentPer]] = currentPriceDataTable[goingUpPosition8[CurrentPer]];
            })
  
        }
        if(goingUp.length > 0 ){
            goingUp.sort((a,b) => a - b);
            goingUp.reverse();
            goingUp.forEach( (CurrentPer) =>{
              goingUpCompanyObject[goingUpPosition[CurrentPer]] = currentPriceDataTable[goingUpPosition[CurrentPer]];
            })
  
        }

        // if(document.getElementById("filter").value < 0){
        //     goingUp.reverse();
        // }
  
        if( goingDown.length > 0 ){
            goingDown.sort((a,b) => b - a);
            // goingDown.reverse();
            goingDown.forEach( (CurrentPer) =>{
            goingDownCompanyObject[goingDownPosition[CurrentPer]] = currentPriceDataTable[goingDownPosition[CurrentPer]];
          })
  
      }
  
      if( goingFlat.length > 0 ){
          goingFlat.sort((a,b) => a - b);
          goingFlat.reverse();
          goingFlat.forEach( (CurrentPer) =>{
          goingFlatCompanyObject[goingFlatPosition[CurrentPer]] = currentPriceDataTable[goingFlatPosition[CurrentPer]];
        })
  
    }
  
      // dE = e;
         addingCharts(goingUpCompanyObject, "charts", days);
         addingCharts(goingUpCompanyObject8, "charts8", days);
         addingCharts(goingDownCompanyObject, "downcharts", days);
         addingCharts(goingFlatCompanyObject, "flatcharts", days);
         let stocksliderLst = document.querySelectorAll(".stockslider");
                          stocksliderLst.forEach(element => {
                                element.addEventListener('input', moveChart);
                              });
  
  
          // document.querySelector("#result").innerText = (goingDown.length + goingFlat.length + goingUp.length + goingUp8.length);
          // document.getElementById("sliderminval").innerText = 9 + Math.trunc(((slidermin.value * 5)+ 15)  / 60) + ':' + Math.trunc(((slidermin.value * 5)+ 15)  % 60);
  
          localStorage.setItem("VolumeHigh",  JSON.stringify(lsData));
          goingFlatcounter = 0;
  }

  function getStorageV(){
    let ldNewData = JSON.parse(localStorage.getItem("VolumeHigh"));
    let ldNewData2 ={};
    clearChart();

    for(let i = 30; i > 1; i--){

        for(key in ldNewData){

            if(ldNewData[key] == i){
              ldNewData2[key] = i;
            }
        }
      
    }
    
    addingCharts(ldNewData2 , 'charts');
    let stocksliderLst = document.querySelectorAll(".stockslider");
                          stocksliderLst.forEach(element => {
                                element.addEventListener('input', moveChart);
                              });


    let FavList = Object.keys(localStorage).map( keya =>  keya);

    FavList.forEach( key => {


      if(!(key.includes('VolumeHigh')) ){
      if(document.querySelectorAll('[id="' + key + '"] input[type="range"]').length > 0){
        days = document.querySelector('[id="' + key + '"] input[type="range"]').value;
    }

    if(days == undefined){
      days = [...currentVolumeDataTable[key]].length - 1;
    }
    let location = "favouritsection" ;
      createChartSection(key, location, days);

      addPriceChart(key, location, days);        

      addVolumeChart(key, location, days);

      addVolumeChartP(key, location, days);

      

  }

    })
    updateFavourite();

  }
  

  
  
  function getStockStatus(key){
    Great = 0;
        
      let CobjLen = Math.min(document.getElementById("slidermin").value ,[...currentPriceDataTable[key]].length) -1;
      let data = [...currentPriceDataTable[key]];
      let cdata = [...currentPriceDataTable[key]][CobjLen];  
      let cdata1 = [...currentPriceDataTable[key]][CobjLen - 1];  
      let SlciedData = [...currentVolumeDataTable[key]].slice( 0, CobjLen);


            if(cdata > 200 && cdata < 1200){

              let Ldata = Math.min(...[...currentPriceDataTable[key]]);
                // console.log(key, Ldata);
                
                let cdata2 = [...currentPriceDataTable[key]][CobjLen -2] || 0;
                let cdata3 = [...currentPriceDataTable[key]][CobjLen -3] || 0;
                let cdata4 = [...currentPriceDataTable[key]][CobjLen -4] || 0;
                let cdata5 = [...currentPriceDataTable[key]][CobjLen -5] || 0;
                let cdata6 = [...currentPriceDataTable[key]][CobjLen -6] || 0;
                // console.log([CurrentPriceObj[key]]);
                
                
                let pdata = [...currentPriceDataTable[key]][CobjLen - 2];
                let ppdata = [...currentPriceDataTable[key]][CobjLen - 3] || 0;
                // let pppdata = [...CurrentPriceObj[key]][1] || 0;
                let pppdata = [...currentPriceDataTable[key]][0] || 0;
                
  
              // console.log(key + '    ' + getFiveMinVolumeData[key]);
                let cvolumeNew = Math.max(([...currentVolumeDataTable[key]][0] || 1) / [CobjLen], [...currentVolumeDataTable[key]][CobjLen -1] / [CobjLen -1]);
                
                let volume = [...currentVolumeDataTable[key]][CobjLen] ;
                let volume1 = [...currentVolumeDataTable[key]][CobjLen - 1] ;
                let cvolume = [...currentVolumeDataTable[key]][CobjLen ] / [CobjLen ];
                // [...previousDayVolumeDataTable[key]]
                let Precvolume = [...previousDayVolumeDataTable[key]][CobjLen -1] / [CobjLen -1];
                let PrecvolumeHigh = Math.max(...[...previousDayVolumeDataTable[key]]) / 70;

                let cvolume1 = [...currentVolumeDataTable[key]][CobjLen -1] / [CobjLen -1];
                let pvolume2 = [...currentVolumeDataTable[key]][CobjLen - 2] / [CobjLen - 2] ;
                let pvolume3 = [...currentVolumeDataTable[key]][CobjLen - 3] / [CobjLen - 3] ;
                let pvolume4 = [...currentVolumeDataTable[key]][CobjLen - 4] / [CobjLen - 4] ;
                let pvolume5 = [...currentVolumeDataTable[key]][CobjLen - 5] / [CobjLen - 5] || 0;
                let ppvolume = Math.max(...[...currentVolumeDataTable[key]]);
                
                // per = ((CurrentPriceObj[key][0] - CurrentPriceObj[key][3]  )/ CurrentPriceObj[key][3] );
                
                // 

                // per = ((CurrentPriceObj[key][0] - pppdata  )/ pppdata );
                per = (([...currentPriceDataTable[key]][CobjLen]  - [...currentPriceDataTable[key]][0]  )/ [...currentPriceDataTable[key]][0] );
               


                // userInput = document.getElementById("filter").value;
let w = window.location.toString();
if(w.includes("allv")){  
let k = 0;
// if((((cvolume - cvolume1)/ cvolume1) * 100 ) > 2  && cvolume > 5000 && cdata > 120 && cdata < 600 && cdata >  [...currentPriceDataTable[key]][0]  && cdata > cdata1 ){
            if(CobjLen >= 2 && (((cvolume - cvolume1)/ cvolume1) * 100 ) >= 2  &&  cdata > 200 && cdata < 1100 && cdata >  [...currentPriceDataTable[key]][0]  && (cdata > cdata1 || cdata > cdata2 || cdata > cdata3 || cdata > cdata4  ) && (per > 0.02) ){

                          // if(  (CobjLen >= 2 && cvolume > 25000) ||     (CobjLen >= 20 && cvolume > 20000)   || ( CobjLen >= 10 && cvolume > cvolume1  && cvolume > 10000) ){

                          if( (CobjLen >= 2 && cvolume > 25000) || ( CobjLen >= 6 && cvolume > cvolume1 && cvolume > 20000 )  || ( CobjLen >= 18 && cvolume > cvolume1 && cvolume > 15000 ) || ( CobjLen >= 38 && cvolume > cvolume1 && cvolume > 10000 )){ // 

                                        if( (cvolume >= (Precvolume * 1.25 )) && ((cdata - pppdata) >= 8)){ // ((Math.max(...[...SlciedData]) * 0.7 ) <= ( volume)) && 
                                        // per =(  (([...currentVolumeDataTable[key]][CobjLen] - [...currentVolumeDataTable[key]][CobjLen -1])/ [...currentVolumeDataTable[key]][CobjLen -1]) * 100   );
                                        console.log(key);
                                        data.reverse();
                                        for(let i = 0; i < CobjLen - 1; i++  ){
                                          if(data[i] >= data[i + 1]){
                                            Great++;
                                          }
                                        }
                                        if((CobjLen < 8 )){
                                            per = ((cvolume - cvolume1)/ cvolume1);
                                            goingUp.push(per);
                                            goingUpPosition[per] = key;
                                        }
                                        else if(CobjLen <= 20 && (Great >= (CobjLen - 4  ))){
                                          per = ((cvolume - cvolume1)/ cvolume1);
                                          goingUp.push(per);
                                          goingUpPosition[per] = key;
                                        }
                                        else if(CobjLen > 20 && (Great >= (CobjLen * 0.50 ))){
                                          per = ((cvolume - cvolume1)/ cvolume1);
                                          goingUp.push(per);
                                          goingUpPosition[per] = key;
                                        }

                                                if(lsData[key[0]] == undefined){
                                                  lsData[key[0]] = 1;
                                                } 
                                                else{
                                                  lsData[key[0]] = lsData[key[0]] + 1;
                                                }

                                              for(let p = 0; p < [...currentVolumeDataTable[key]].length -1 ; p++){
                                                        if(((([...currentVolumeDataTable[key]][CobjLen - p] - [...currentVolumeDataTable[key]][CobjLen - (p + 1)] )/ [...currentVolumeDataTable[key]][CobjLen - (p + 1)]) * 100 ) > 2){
                                                        k++;  
                                                        }
                                              }
                                        dict[key] = k;  
                                        }
                          } // cvolume > 10000 condition end
            }   

                   
                    }




                    else if(w.includes("tlow")){  
                                  if((   cdata > 400 && cdata < 800 && ( cvolume * 5) < (Precvolume) && cvolume > 5000)){
                                            console.log(Math.max(...[...previousDayVolumeDataTable[key]]), key);
                                                                  per = ((cvolume - cvolume1)/ cvolume1);
                                                                  goingUp.push(per);
                                                                  goingUpPosition[per] = key;
                                                              }

                                                      }
                    else if(w.includes("oup")){  
                                let closePrice = CurrentPriceObj[key][3];
                                let openPrice =  CurrentPriceObj[key][1];
                                per = ((openPrice - closePrice)/ closePrice) * 100;
                                  if((   cdata > 200 && cdata < 1600 && per > 3)){
                                                                  goingUp.push(per);
                                                                  goingUpPosition[per] = key;
                                                              }
                                                            }
                    else if(w.includes("more")){  
                                let closePrice = CurrentPriceObj[key][3];
                                let openPrice =  CurrentPriceObj[key][1];
                                per = ((openPrice - closePrice)/ closePrice) * 100;
                                  if((   cdata > 200 && cdata < 1600 && per > 5)){
                                                                  goingUp.push(per);
                                                                  goingUpPosition[per] = key;
                                                              }

                                                      }
                    else if(w.includes("vup")){  
                     
                                  if(   (cvolume > 15000 && cdata > 200 && cdata < 800 && cdata > cdata1 )  && ( ( ( CobjLen <= 8 && ( cvolume ) > (Precvolume * 6) && cdata > cdata1 && cdata > cdata2 ) )  || (( Number(lastFiveOpenClose[key][0]) > 4 && (cvolume  > Precvolume * 3)) ) || (CobjLen > 8 && (cvolume > cvolume1))) ){
                                                                  per = ((cvolume - cvolume1)/ cvolume1);
                                                                  goingUp.push(per);
                                                                  goingUpPosition[per] = key;
                                                                  console.log(key, Number(lastFiveOpenClose[key][0]));
                                                                  
                                                              }

                                                      }

                   else if(w.includes("all8")){  
                      let k = 0;
                      // if((((cvolume - cvolume1)/ cvolume1) * 100 ) > 2  && cvolume > 5000 && cdata > 120 && cdata < 600 && cdata >  [...currentPriceDataTable[key]][0]  && cdata > cdata1 ){
                                  if((((cvolume - cvolume1)/ cvolume1) * 100 ) > 2  &&  cdata > 600 && cdata < 900 && cdata >  [...currentPriceDataTable[key]][0]  && (cdata > cdata1 || cdata > cdata2 || cdata > cdata3 || cdata > cdata4  )){
                      
                                                if((CobjLen >= 2 && cvolume > 5000)  ){
                      
                                                              if(((Math.max(...[...SlciedData]) * 0.7 ) <= ( volume)) &&  (cvolume >= (Precvolume * 1.5 )) && ((cdata - pppdata) >= 4)){
                                                              // per =(  (([...currentVolumeDataTable[key]][CobjLen] - [...currentVolumeDataTable[key]][CobjLen -1])/ [...currentVolumeDataTable[key]][CobjLen -1]) * 100   );
                                                              data.reverse();
                                                              for(let i = 0; i < CobjLen - 1; i++  ){
                                                                if(data[i] >= data[i + 1]){
                                                                  Great++;
                                                                }
                                                              }
                                                              if (Great >= (CobjLen * 0.85 )){
                      
                                                                per = ((cvolume - cvolume1)/ cvolume1);
                                                                goingUp.push(per);
                                                                goingUpPosition[per] = key;
                                                                
                      
                                                              }
                      
                                                                      if(lsData[key[0]] == undefined){                      
                                                                        lsData[key[0]] = 1;                      
                                                                      } 
                                                                      else{
                                                                        lsData[key[0]] = lsData[key[0]] + 1;
                                                                      }
                      
                                                                    for(let p = 0; p < [...currentVolumeDataTable[key]].length -1 ; p++){
                                                                              if(((([...currentVolumeDataTable[key]][CobjLen - p] - [...currentVolumeDataTable[key]][CobjLen - (p + 1)] )/ [...currentVolumeDataTable[key]][CobjLen - (p + 1)]) * 100 ) > 2){
                                                                              k++;  
                                                                              }
                                                                    }
                                                              dict[key] = k;  
                                                              }
                                                } // cvolume > 10000 condition end
                                  }   
                      
                                         
                                          }

                    else if(w.includes("allp")){  
                        if(per > 0.05 )  {
                              goingUp.push(per);
                              goingUpPosition[per] = key;

                        }   

                   
                    }

                    else if(w.includes("alln")){  
                      if(per < -0.03)  {
                            goingUp.push(per);
                            goingUpPosition[per] = key;

                      }   

                 
                  }

                  else if(w.includes("sell")){
                  let pervv = ((cvolume - pvolume2) / pvolume2) * 100;
                  if( (per < (- 0.015) ) && (cvolume > 5000) && (cdata > 150)){
                   
                    if((cdata == Math.min(...[...currentPriceDataTable[key]].slice( 0, CobjLen -1))) && cdata != cdata5 ){
                        goingUp.push(per);
                        goingUpPosition[per] = key;

                    }
                    else{
                      if(((cdata + 1 <= cdata2) && (cdata + 1 < cdata4) && (cdata + 1 <= cdata3) && (cdata < cdata5)) ){
                        goingUp.push(per);
                        goingUpPosition[per] = key;
                      }
                    } 
                  }

                   
                }
  
                else{
                    if(!((cdata == cdata2) && (cdata == cdata4) && (cdata == cdata3) && (cdata == cdata5)) && (cvolume > 10000) && (cdata > 150) && (cdata < 750)){
  
                 
                      if((cdata > Ldata) ) {
                          
  
                          CurrentPer = ((cdata - cdata4 )/ cdata4);
                            if(per > ( 0.015)){
                            // if(per > 0.0){
                              data.reverse();
                              for(let i = 1; i < CobjLen - 2; i++  ){
                                if(data[i] >= data[i + 1]){
                                  Great++;
                                }
                              }
  
  
                            if((cvolumeNew > pvolume2 || [...currentVolumeDataTable[key]][CobjLen -1] === ppvolume)){
                                let maxVolume = Math.max(...[...currentPriceDataTable[key]].slice( 0, 5), [...currentVolumeDataTable[key]][0]);
                              let perv = ((cvolume - pvolume2) / pvolume2) * 100;
                            //   let perv = ((maxVolume - volume) / volume) * 100;
                                goingUp.push(perv);
                                 goingUpPosition[perv] = key;
                              }
  
                            else if(cdata == Math.max(...[...currentPriceDataTable[key]].slice( 0, CobjLen -1)) ){
                                // console.log('max ' + key );
                                goingUp.push(per);
                                 goingUpPosition[per] = key;
                              }
                            //   else if((cdata > cdata5) && (cdata5 > cdata6)){  
                            //     // console.log('  ' + key + '  ' + (cdata > cdata5) && (cdata5 > cdata6) + ' ' + (cdata) + ' ' + (cdata5)+ ' ' + (cdata6));                            
                            //     // console.log('Up ' + key ); 
                            //     goingUp8.push(per);
                            //      goingUpPosition8[per] = key;
                            //   }
                            //   else if(Great >= (CobjLen * 0.80 )){
                            //     // console.log('80% ' + key );
                            //     goingUp8.push(per);
                            //      goingUpPosition8[per] = key;
                            //   }
                            //   else if(Great >= (CobjLen * 0.70 )){
                            //     // console.log('70% ' + key );
                            //         goingDown.push(per);
                            //         goingDownPosition[per] = key;
                            //     }

                            //     else{
                            //       // console.log('Rest ' + key );
                            //           if(goingFlatcounter <  50){
                            //           goingFlatcounter++;
                            //           goingFlat.push(goingFlatcounter);
                            //           goingFlatPosition[goingFlatcounter] = key;
                            //         }
                            //       }
  
                                  // if(CurrentPer > 0){
                                  //     goingUp.push(CurrentPer);
                                  //     goingUpPosition[CurrentPer] = key;
                                  // }
                                  // else if(CurrentPer < 0){
                                  //     goingDown.push(CurrentPer);
                                  //     goingDownPosition[CurrentPer] = key;
                                  // }
                                  // else{
                                  //     goingFlat.push(cdata);
                                  //     goingFlatPosition[cdata] = key;
                                  // }
  
  
                            }
                          
                      }
                  }
                }
                  // else{
                    // if(goingFlatcounter <  50 && cvolume > 10000 && (cdata >50)){
  
                    //             goingUp.push(per);
                    //              goingUpPosition[per] = key;
                    //              goingFlatcounter++;
                    // }
                    // if(goingFlatcounter <  50){
                    // goingFlatcounter++;
                    // goingFlat.push(goingFlatcounter);
                    // goingFlatPosition[goingFlatcounter] = key;
                  // }
                //   }
  
            }
  }
  
  function createChartSection(key, location){
    // sliderchart.value = Math.min(sliderchart.value, [...currentVolumeDataTable[key]].length - 1);
  
  
          let mainBlock = document.createElement("div");   
              mainBlock.setAttribute("class", "mainBlock");
  
          let topDivtag = document.createElement("div"); 
            topDivtag.setAttribute("class", "topDivtag");
  
            let divtagMain = document.createElement("div"); 
                divtagMain.setAttribute("id", key);
                divtagMain.appendChild(mainBlock); 
                document.querySelector("." + location).appendChild(divtagMain);
             
  
            let cplen = document.getElementById("slidermin").value; //[...currentPriceDataTable[key]].length;
            // let cp = [...currentPriceDataTable[key]][cplen - 1];
            // let op = [...CurrentPriceObj[key]][1];
            let currPer =  (((CurrentPriceObj[key][0] - CurrentPriceObj[key][3]  )/ CurrentPriceObj[key][3] ) * 100).toFixed(1);
            let lblF = document.createElement("label");
                    lblF.setAttribute("for", key);
                    lblF.setAttribute("value", 'favourite');
            let spn = document.createElement("span");
                    spn.setAttribute("class", "percent");
                    spn.innerText = currPer + '  ';
                    lblF.appendChild(spn);
  
            let spn2 = document.createElement("span");
                    spn2.setAttribute("class", key);
                    spn2.innerText = key;
                    lblF.appendChild(spn2);
            
                    
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
  
            let bar = document.createElement("div");
                  bar.setAttribute("class", "bar");
                  anchortag.appendChild(bar);
                  let CobjLen = Math.min(document.getElementById("slidermin").value ,[...currentPriceDataTable[key]].length -1);
                  let VolumeChange = document.createElement("div");   
                  VolumeChange.setAttribute("class", "VolumeChange");


                  
                  // for(let p = 0; p < CobjLen ; p++){
                  //             let VolumeChangeChild = document.createElement("div");   
                  //             VolumeChangeChild.setAttribute("class", "VolumeChangeChild");
                  //                   VolumeChangeChild.innerText = (((([...currentVolumeDataTable[key]][ p + 1] - [...currentVolumeDataTable[key]][p] )/ [...currentVolumeDataTable[key]][p]) * 100 )).toFixed(0) + " ,";
                  //                   VolumeChange.appendChild(VolumeChangeChild); 
         
                  // }   
                      

                      let LastFive = document.createElement("div");   
                      LastFive.setAttribute("class", "LastFive");
                      for(let i = 0; i < 10; i++){
                        let LastFiveChild = document.createElement("div");   
                          LastFiveChild.setAttribute("class", "LastFiveChild");
                          let trend = lastFiveOpenClose[key][i];

                          LastFiveChild.innerText = trend;
                          if (trend > 0){
                            LastFiveChild.classList.add("upTrends");
                          }
                          LastFive.appendChild(LastFiveChild);

                      }
                      topDivtag.appendChild(LastFive);
                      
    
                  let stockSlider = document.createElement("input");
                  stockSlider.setAttribute("type", "range");
                  stockSlider.setAttribute("max", 81);
                  stockSlider.setAttribute("min", 2);
                  stockSlider.setAttribute("value", slidermin.value);
                  stockSlider.setAttribute("id", key);
                  stockSlider.setAttribute("class", "stockslider");
  
                  document.querySelector('[id="' + key + '"] .topDivtag').appendChild(stockSlider);
    
                  let barv = document.createElement("div");
                  barv.setAttribute("class", "barv");
                  topDivtag.appendChild(barv);
                  // topDivtag.appendChild(VolumeChange);

                  let barvP = document.createElement("div");
                  barvP.setAttribute("class", "barvP");
                  topDivtag.appendChild(barvP);



                  

                  
  }
  
  function addingCharts(newCompanyObject2, location, days){
    
      for (let key in newCompanyObject2) {
          if(!(key.includes('undefined')) ){
            if(document.querySelectorAll('[id="' + key + '"] input[type="range"]').length > 0){
                days = document.querySelector('[id="' + key + '"] input[type="range"]').value;
            }

            if(days == undefined){
              days = [...currentVolumeDataTable[key]].length - 1;
            }
              createChartSection(key, location, days);
  
              addPriceChart(key, location, days);        
  
              addVolumeChart(key, location, days);

              addVolumeChartP(key, location, days);
         
        }
  
      }
      
  }
    
  
  function addPriceChart(key, location, days){
        if(document.querySelectorAll('#count').length > 0){
              document.getElementById("count").innerText = goingUp.length;
        }

                        if(document.querySelectorAll('[id="' + key + '"] canvas').length > 0 ){
                          document.querySelector('[id="' + key + '"] canvas').remove();
                        }
                        if(document.querySelectorAll('[id="' + key + '"] .chartjs-size-monitor').length > 0 ){
                          document.querySelector('[id="' + key + '"] .chartjs-size-monitor').remove();
                        }
                        let newVolume = [];
                        for(let i = 1; i < [...currentVolumeDataTable[key]].length - 1; i++){                    
                          newVolume.push([...currentVolumeDataTable[key]][i]/[i]);
                          
                        }
    
    
            let yValues  = [];
            yValues  = [...currentPriceDataTable[key]];
            let xValues = [];
            let yValues2 = [];
              yValues.reverse();
            
            
            if (days < currentPriceDataTable[key].length){
              // for(let y = (currentPriceDataTable[key].length - days)  ; y <  currentPriceDataTable[key].length ; y++){
              for(let y = 0 ; y <  days ; y++){
                yValues2[y] =  yValues[y] ;
              }
                  for (let i = days ; i < days ; i++) {
                    // xValues.push(i);
                  }
            }
            else{
  
              for(let y = 0; y < Math.min(currentPriceDataTable[key].length, days) ; y++){
                yValues2[y] =  yValues[y] ;
              }
              
                  for (let i = 0; i < Math.min(currentPriceDataTable[key].length, days) ; i++) {
                    xValues.push(i);
                  }
            }

            let sum = 0;
            let avg = 0;
            let avgMin = 0;
            let avgMax = 0;

// calculate sum using forEach() method
        yValues2.forEach( num => {
            sum += Number(num);
            })
            avgMax = Math.max(...yValues2) ;
            avgMin =  Math.min(...yValues2);

            avg = (avgMax - avgMin);
            // avg = (sum / (days)).toFixed(1);

                  xValues.reverse();
        //   let CobjLen = Math.min(Math.min(document.getElementById("slidermin").value ,[...currentPriceDataTable[key]].length), document.getElementById("stockslider").innerText);
          let CobjLen = document.getElementById("slidermin").value ;
      
            let currPer =  (((CurrentPriceObj[key][0] - CurrentPriceObj[key][3] )/ CurrentPriceObj[key][3]) * 100).toFixed(1);
            
            let curStvalue = document.querySelector('[id="' + key + '"] [type="range"]').value
            if (CobjLen > curStvalue ){
                  currPer =      ((( [...currentPriceDataTable[key]][curStvalue -1] - CurrentPriceObj[key][3])/ CurrentPriceObj[key][3] ) * 100).toFixed(1);
                    }  
             
  
            document.querySelector('[id="' + key + '"] .percent').innerText = currPer + '   ';
  
            let canvasb = document.createElement("canvas");
                  canvasb.setAttribute("id", "bar" + key);
                  canvasb.setAttribute("class", "bar" + key); 
                  canvasb.setAttribute("height", "250"); 
                  canvasb.setAttribute("width", "600"); 
  
                  let xaxisprice = [];
                  for(let i = 1; i < 80 ; i++){ //[...currentPriceDataTable[key]].length - 1; i++){
                    xaxisprice.push(i);
                  }
  
                  document.querySelector('[id="' + key + '"] .bar').appendChild(canvasb);
                      // console.log([...currentPriceDataTable[key]].reverse());
                  new Chart(canvasb, {
                    type: "line",
                    data: {
                    labels: [...xaxisprice],
                    datasets: [{
                            label: '   C : ' + ([...currentPriceDataTable[key]][days -1]) + '     + ' + avg.toFixed(0),
                            // label: 'L : ' + Math.min(...[...currentPriceDataTable[key]].slice(0, days)) + '   H : ' + Math.max(...[...currentPriceDataTable[key]].slice(0, days)) + '        C : ' + [...currentPriceDataTable[key]][days -1],
                            fontSize: 20,
                            pointRadius: 0,
                            borderWidth : 0.5,
                            borderColor: "rgba(0,0,0,0.9)",
                            data: ([...currentPriceDataTable[key]]).slice(0, days),
                            }]
                          },  
                          options: {
                              scales: {
                                  yAxes: [{

                                      ticks: {
                                          fontSize: 16,
                                          family: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'monospace'",
                                  }
                              }]
                          }
                          }
  
                    }); 
  
  }
  
  
  function addVolumeChart(key, location, days){
    if(document.querySelectorAll('[id="' + key + '"] .barv canvas').length > 0 ){
      document.querySelector('[id="' + key + '"] .barv canvas').remove();
    }
    if(document.querySelectorAll('[id="' + key + '"] .barv .chartjs-size-monitor').length > 0 ){
      document.querySelector('[id="' + key + '"]  .barv .chartjs-size-monitor').remove();
    }
  
  
  let yValues  = [];
  yValues  = [...currentVolumeDataTable[key]];
  let xValues = [];
  let yValues2 = [];
  yValues.reverse();
  
  
  for(let y = 0; y < Math.min(currentVolumeDataTable[key].length, days) ; y++){
  yValues2[y] =  yValues[y] / (y + 1);
  }
  
  let newVolume = [];
  for(let i = 0; i < Math.min(currentVolumeDataTable[key].length, days); i++){                    
    newVolume.push([...currentVolumeDataTable[key]][i || 1]/[i || 1]);
    
  }
  
  days = Math.min(currentVolumeDataTable[key].length, days);
  
  for (let i = 0; i < Math.min(currentVolumeDataTable[key].length, days) ; i++) {
  xValues.push(i);
  }
  // }
  xValues.reverse();
  
  
  let canvasb = document.createElement("canvas");
  canvasb.setAttribute("id", "barv" + key);
  canvasb.setAttribute("class", "barv" + key); 
  canvasb.setAttribute("height", "250"); 
  canvasb.setAttribute("width", "600"); 
  
  let xaxisprice = [];
  for(let i = 1; i < 80 ; i++){ //[...currentPriceDataTable[key]].length - 1; i++){
  xaxisprice.push(i);
  }
  
  document.querySelector('[id="' + key + '"] .barv').appendChild(canvasb);
  if(days == undefined || days == 0){
    days = [...currentVolumeDataTable[key]].length - 1;
  }
  // console.log([...currentPriceDataTable[key]].reverse());
  new Chart(canvasb, {
  type: "line",
  data: {
  labels: [...xaxisprice],
  datasets: [{
        label: key + '    '  + '  C : ' + ([...[...newVolume]][days -1].toFixed(0)).toLocaleString(),
        fontSize: 16,
        pointRadius: 0,
        borderWidth : 0.5,
        borderColor: "rgba(0,0,0,0.9)",
        data: [...newVolume].slice(0, days + 1), // ([...currentVolumeDataTable[key]]).slice(0, days),
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
  
  }


// New Chart Group ends here

// Previous Volume Chart

function addVolumeChartP(key, location, days){
  days = previousDayVolumeDataTable[key].length
  if(document.querySelectorAll('[id="' + key + '"] .barvP canvas').length > 0 ){
    document.querySelector('[id="' + key + '"] .barvP canvas').remove();
  }
  if(document.querySelectorAll('[id="' + key + '"] .barvP .chartjs-size-monitor').length > 0 ){
    document.querySelector('[id="' + key + '"]  .barvP .chartjs-size-monitor').remove();
  }


let yValues  = [];
yValues  = [...previousDayVolumeDataTable[key]];
let xValues = [];
let yValues2 = [];
yValues.reverse();


for(let y = 0; y < Math.min(previousDayVolumeDataTable[key].length, days) ; y++){
yValues2[y] =  yValues[y] / (y + 1);
}

let newVolume = [];
for(let i = 0; i < Math.min(previousDayVolumeDataTable[key].length, days); i++){                    
  newVolume.push([...previousDayVolumeDataTable[key]][i || 1]/[i || 1]);
  
}


for (let i = 0; i < Math.min(previousDayVolumeDataTable[key].length, days) ; i++) {
xValues.push(i);
}
// }
xValues.reverse();


let canvasb = document.createElement("canvas");
canvasb.setAttribute("id", "barvP" + key);
canvasb.setAttribute("class", "barvP" + key); 
canvasb.setAttribute("height", "250"); 
canvasb.setAttribute("width", "600"); 

let xaxisprice = [];
for(let i = 1; i < previousDayVolumeDataTable[key].length - 2 ; i++){ //[...currentPriceDataTable[key]].length - 1; i++){
xaxisprice.push(i);
}

document.querySelector('[id="' + key + '"] .barvP').appendChild(canvasb);
// console.log([...currentPriceDataTable[key]].reverse());
new Chart(canvasb, {
type: "line",
data: {
labels: [...xaxisprice],
datasets: [{
      label: key + '    '  +  'L : ' + Math.min(...[...newVolume].slice(0, days)).toFixed(0) + '   H : ' + Math.max(...[...newVolume].slice(20, days)).toFixed(0) ,
      fontSize: 16,
      pointRadius: 0,
      borderWidth : 0.5,
      borderColor: "rgba(0,0,0,0.9)",
      data: [...newVolume].slice(0, days + 3), // ([...currentVolumeDataTable[key]]).slice(0, days),
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

}

// Previous Volume Chart End
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
                              let cplen = [...currentPriceDataTable[key]].length;
                              let cp = [...currentPriceDataTable[key]][cplen - 1];
                              let op = [...closeOpenPriceDataObject[key]][1];
                              let currPer = (((cp - op) / op) * 100).toFixed(1);
    
                              lblF.innerText =  currPer + '  ' +  key;
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
                        
                        // Price Chart Start
                    // if(Object.keys(currentPriceDataTable).length > 1){
                    //     let bar = document.createElement("div");
                    //         bar.setAttribute("class", "bar");
                    //     let canvasb = document.createElement("canvas");
                    //           canvasb.setAttribute("id", "bar" + key);
                    //           canvasb.setAttribute("class", "bar" + key); 
                    //           canvasb.setAttribute("height", "250"); 
                    //           canvasb.setAttribute("width", "600"); 
    
                    //           let xaxisprice = [];
                    //           for(let i = 1; i < 80; i++){ //[...currentPriceDataTable[key]].length - 1; i++){
                    //             xaxisprice.push(i);
                    //           }
    
                    //           bar.appendChild(canvasb);
                    //               // console.log([...currentPriceDataTable[key]].reverse());
                    //           new Chart(canvasb, {
                    //             type: "line",
                    //             data: {
                    //             labels: [...xaxisprice],
                    //             datasets: [{
                    //                     label: 'H : ' + Math.max(...[...currentPriceDataTable[key]]) + '        C : ' + [...currentPriceDataTable[key]][[...currentPriceDataTable[key]].length - 1],
                    //                     fontSize: 16,
                    //                     pointRadius: 0,
                    //                     borderWidth : 0.5,
                    //                     borderColor: "rgba(0,0,0,0.9)",
                    //                     data: [...currentPriceDataTable[key]],
                    //                     }]
                    //                   },  
                    //                   options: {
                    //                       scales: {
                    //                           yAxes: [{
                    //                               ticks: {
                    //                                   fontSize: 15,
                    //                                   family: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'monospace'"
                    //                           }
                    //                       }]
                    //                   }
                    //                   }
    
                    //             }); 
    
                    //       // let preHig = 0;
                    //       //   let largebar = 0;
                    //       //   let smallbar = 0;
                    //       //   largebar = Math.max(...[...currentPriceDataTable[key]]);
                    //       //   smallbar = Math.min(...[...currentPriceDataTable[key]]);
    
    
                          
                    //       // for(let i = 0 ;i  < currentPriceDataTable[key].length ;  i++){
    
                    //       // let barc = document.createElement("div");
                    //       // let barct = document.createElement("div");
                    //       //   barc.setAttribute("class", "barc");
                    //       //   let hig =  (Number(currentPriceDataTable[key][i])); // - (smallbar * 0.5));
                    //       //   let PperDif;
                    //       //   if (i == 0){
                    //       //     PperDif = 0;
                    //       //   }
                    //       //   else{
                    //       //     PperDif = (((hig - preHig)/hig)*100).toFixed(1);
                    //       //   }   
                    //       //     num = Number(hig);
                    //       //     let unit = (100 / (largebar - smallbar)); // (largebar - smallbar))
                    //       //     let barHig  = ((unit * (num - smallbar) )).toFixed(1);
    
                    //       //   if(preHig >= hig){
                    //       //     barc.style.backgroundColor = "rgba(255, 0,0, 0.35)";
                    //       //   }
                    //       //   else{
                    //       //     barc.style.backgroundColor = "rgba(20, 255 ,20, 0.75)";
                              
                    //       //   }
                    //       //   preHig = hig;
                    //       //   // let barHig = (hig * (100 / largebar)).toFixed(1);
                    //       //   barc.style.height = "100px"; //((Number(barHig)).toString()) + 'px'; //((largebar - Number(currentPriceData1[key][i])).toFixed(1).toString() + 'px').toString();
                    //       //   // barc.style.top = (100 - Number(barHig).toFixed(1).toString())+ 'px';
                    //       //   // barc.style.fontSize = '14px';
                    //       //   // barc.style.width = '10px';
                            
    
                    //       //   let barcspan = document.createElement("span");
                    //       //   barcspan.setAttribute("class", "barcspan");
    
                    //       //   if(i == 0){
                    //       //     barcspan.innerText = Number(CurrentPriceObj[key][1]).toFixed(1);  //perDif; 
                    //       //     }
                    //       //     else{
                    //       //       let PreviousPrice = currentPriceDataTable[key][i -1];
                    //       //       let CurrentPrice = currentPriceDataTable[key][i];
    
                    //       //       barcspan.innerText = (((CurrentPrice - PreviousPrice)/ PreviousPrice) * 100).toFixed(1);
                    //       //     }                       
                            
                    //       //   barct.appendChild(barc);
                    //       //   barc.appendChild(barcspan);
                    //       //   bar.appendChild(barct);
                    //       // }
                    //       anchortag.appendChild(bar);
                    //       topDivtag.appendChild(anchortag);
                    //         }
     // Price Chart END
                            // volume chart starts *********************************************************************************
    
                    //         if(Object.keys(currentVolumeDataTable).length > 1){
                    //           let barv = document.createElement("div");
                    //               barv.setAttribute("class", "barv");
    
                    //           let canvasv = document.createElement("canvas");
                    //               canvasv.setAttribute("id", "barv" + key);
                    //               canvasv.setAttribute("class", "barv" + key); 
                    //               canvasv.setAttribute("height", "250"); 
                    //               canvasv.setAttribute("width", "600");
                    //               let xaxisvolume = [];
                    //             let newVolume = [];
                    //               for(let i = 1; i < [...currentVolumeDataTable[key]].length - 1; i++){
                            
                    //                 newVolume.push([...currentVolumeDataTable[key]][i]/[i]);
                    //               }
    
                    //             for(let i = 1; i < 80 ; i++){
                    //                 xaxisvolume.push(i);
                                    
                    //               }
    
    
                                
                    //               barv.appendChild(canvasv);
                    //               let dvolumeAvg = 0;
                    //               for(let v = 1; v < 6; v++){
                    //                 dvolumeAvg = Number(dvolumeAvg) + Number(dVolumeObject[key][dVolumeObject[key].length - v]);
                    //               }
                    //               dvolumeAvg = dvolumeAvg/5;
                    //               // console.log([...currentPriceDataTable[key]].reverse());
                    //           new Chart(canvasv, {
                    //             type: "line",
                    //             data: {
                    //             labels: [...xaxisvolume],
                    //             datasets: [{
                    //                     label: 'H : ' + (Math.max(...[...currentVolumeDataTable[key]])).toLocaleString('en-IN')  +   '  P : ' + Math.trunc(Number(dvolumeAvg.toFixed(0))/80).toLocaleString('en-IN') ,
                    //                     fontSize: 16,
                    //                     pointRadius: 0,
                    //                     borderWidth : 0.5,
                    //                     borderColor: "rgba(0,0,0,0.9)",
                    //                     data: [...newVolume], // ...currentVolumeDataTable[key]],
                    //                     }]
                    //                   },  
                    //                   options: {
                    //                       scales: {
                    //                           yAxes: [{
                    //                               ticks: {
                    //                                   fontSize: 15,
                    //                                   family: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'monospace'"
                    //                           }
                    //                       }]
                    //                   },
                    //                       annotation: {
                    //     annotations: [{
                    //         type: 'line',
                    //         mode: 'horizontal',
                    //         scaleID: 'y-axis-0',
                    //         value: Number(dvolumeAvg) / 80,
                    //         borderColor: 'rgb(75, 192, 192)',
                    //         borderWidth: 4,
                    //         label: {
                    //             enabled: true,
                    //             content: 'Average',
                    //         }
                    //     }]
                    // }
                    //                   }
    
                    //             }); 
    
                    //             // let preHigv = 0;
                    //             //   let largebarv = 0;
                    //             //   let smallbarv = 0;
                    //             //   largebarv = Math.max(...[...currentVolumeDataTable[key]]);
                    //             //   smallbarv = Math.min(...[...currentVolumeDataTable[key]]);
                    
                    
                                
                    //             // for(let i =0; i < currentVolumeDataTable[key].length ;  i++){
                    //             //   // console.log(i);
                    
                    //             // let barcv = document.createElement("div");
                    //             // let barct = document.createElement("div");
                    //             //   barcv.setAttribute("class", "barcv");
                                  
                    //             //   let higv =  (Number(currentVolumeDataTable[key][i])); // - (smallbar * 0.5));
                    //             //   let perDif;
                    //             //   if (i == 0){
                    //             //     perDif = higv;
                    //             //   }
                    //             //   else{
                    //             //     perDif = (higv - preHigv);
                    //             //     // perDif = (((higv - preHigv)/higv)*100).toFixed(1);
                    //             //   }     
    
                    
                    //             //     numv = Number(higv);
                    //             //     let unitv = (100 / (largebarv - smallbarv)); // (largebar - smallbar))
                    //             //     let barHigv  = ((unitv * (numv - smallbarv) )).toFixed(1);
                    
                    //             //   if(preHigv >= higv){
                    //             //     barcv.style.backgroundColor = "rgba(255, 0,0, 0.35)";
                    //             //   }
                    //             //   else{
                    //             //     barcv.style.backgroundColor = "rgba(20, 255 ,20, 0.75)";
                                    
                    //             //   }
                                  
                    //             //   // let barHig = (hig * (100 / largebar)).toFixed(1);
                    //             //   barcv.style.height = '100px'; //(Number(barHigv)).toString() + 'px'; //((largebar - Number(currentPriceData1[key][i])).toFixed(1).toString() + 'px').toString();
                    //             //   // barcv.style.top = (100 - Number(barHigv).toFixed(1).toString())+ 'px';
                    //             //   // barc.style.width = '10px';
                                  
                    
                    //             //   let barcspanv = document.createElement("span");
                    //             //   barcspanv.setAttribute("class", "barcspanv");
                                  
                    //             //   barcspanv.innerText = (perDif / 1000).toFixed(0); //; Number(currentVolumeDataTable[key][i]).toFixed(0) 
    
                    //               // barct.appendChild(barc);
                    //               // barc.appendChild(barcspan);
                    //               // bar.appendChild(barct);
    
                    //               // barv.appendChild(barct);
                    //               // barct.appendChild(barcv);
                    //               // barcv.appendChild(barcspanv);
                    //               // preHigv = higv;
                    //             // }
                    //             topDivtag.appendChild(barv);
                    //               }
    
    
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
      
    
function createChartFive(companyObject, days = 1000){
          let chartlim = 0;
          let lst = [];

          let resultCount = 0;
              for (let key in companyObject) {
                if(!(key.includes('undefined') || key == 0) ){
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
    

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
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
      
      
function getDay(days){
        cleanUpCompare();
        days = document.querySelector("#slider").value;
        createChart(dCompanyObject, dE, days = days)
}


      
function  getBuyMain(){
        let lst = document.querySelectorAll(".buy");
        lst.forEach(element => {
          element.classList.toggle('show');    
        });
      
}
    
function hideBuyStocks(BuyObject){
        lst = document.querySelectorAll(".charts > div");
        lst.forEach( ele => ele.style.display = "none");
        for (let key in BuyObject) {    
          document.querySelector(".charts > #" + key).style.display = ""
          } 
      
}
    
      
// Search Bar Script to filter charts matching the typed text
    
function setFilter(){
        let filterData = (document.querySelector("#filter").value).toUpperCase();
        if ( filterData.length > 0) {
            var lst = Array.from(document.querySelectorAll(".charts > div"));
            lst.forEach( (ele) => ele.style.display = "none" );
            var lst = Array.from(document.querySelectorAll(".charts8 > div"));
            lst.forEach( (ele) => ele.style.display = "none" );
            var lst = Array.from(document.querySelectorAll(".downcharts > div"));
            lst.forEach( (ele) => ele.style.display = "none" );
            var lst = Array.from(document.querySelectorAll(".flatcharts > div"));
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
 
    
function getFivePer(){
      clearChart();
      // document.querySelector("#pages").classList.toggle("hide");
      // document.querySelector("#pages2").classList.toggle("hide");
        // getFiveHTTPs('getFivePer', 1);
        getHTTPs('getFivePer', 1);
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });

    
        // if(currentPriceDataTable['BSOFT'].length > 0) {
          // document.getElementById("slidermin").value = currentPriceDataTable['BSOFT'].length;
          // let myFunc1 = letsDebounce(setFilter,1000);
        // }
}
    
function getFiveVolumeData(){
      clearChart();
      // document.querySelector("#pages").classList.toggle("hide");
      // document.querySelector("#pages2").classList.toggle("hide");
        getFiveHTTPs('getFivePer', 0);
}


    
function getDma(){
    
        if (DAmFlag == 0){    
            DAmFlag = 1;
                lst = document.querySelectorAll(".charts > div");
                    if(lst.length > 1){
                            Array.from(lst).forEach( (element) =>  {
                                element.style.display = 'none' ;
                                if(element.classList.contains('dma')){
                                    element.style.display = '';
                                }
                            });
                    }
                    }
    
            else{
                lst = document.querySelectorAll(".charts > div");
                    if(lst.length > 1){
                            Array.from(lst).forEach( (element) =>  {
                                element.style.display = '' ;
                                    });
                                }
                            }
    
            }
    

    
// Volume chart Clear function
function clearVChart(){
      let lstv = document.querySelectorAll(".barv");
            if(lstv.length > 1){
                  Array.from(lstv).forEach( (element) =>  element.remove() );
            }
}
    
function createPositiveChart(dpositive, dpositiveCompany){
    positiveCompanyObject = {};
    for(var i = 0; i < Object.keys(positiveCompany).length - 1; i++){
      positiveCompanyObject[dpositiveCompany[dpositive[i]]] = dCompanyObject[dpositiveCompany[dpositive[i]]] ;

    }
    clearChart();
    createChart(positiveCompanyObject);
    updatePoitiveCompanyDeatils();         

}



       


  
      // dE = e;
         addingCharts(goingUpCompanyObject, "charts", days);

         let stocksliderLst = document.querySelectorAll(".stockslider");
                          stocksliderLst.forEach(element => {
                                element.addEventListener('input', moveChart);
                              });
  
  
          // document.querySelector("#result").innerText = (goingDown.length + goingFlat.length + goingUp.length + goingUp8.length);
          // document.getElementById("sliderminval").innerText = 9 + Math.trunc(((slidermin.value * 5)+ 15)  / 60) + ':' + Math.trunc(((slidermin.value * 5)+ 15)  % 60);
  

  
          function  getStock(){
            clearChart();
              let stock = document.getElementById("filter").value;
             let newCompanyList = [];
             companyList.forEach( ele => {
                if( ele[0].includes(stock.toUpperCase())){
                  newCompanyList.push(ele[0]);
                }

             });
             let location = "charts";
             days = document.querySelector("#slidermin").value;
             newCompanyList.forEach( key =>{

              createChartSection(key, location, days);
  
              addPriceChart(key, location, days);        
  
              addVolumeChart(key, location, days);

              let stocksliderLst = document.querySelectorAll(".stockslider");
                          stocksliderLst.forEach(element => {
                                element.addEventListener('input', moveChart);
                              });             

             })
      
            }

            function volumeStorageClear() {
              localStorage.VolumeHigh = {};
            }