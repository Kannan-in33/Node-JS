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
let companyObject = {};
let goingUpCompanyObject = {};
let goingDownCompanyObject = {};
let goingFlatCompanyObject = {};
let goingUpCompanyObject8 = {}
let Great = 0;
let companyList = [];
let Target = {};

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
        companyObject = xhr.response.companyObject;
        createChart( xhr.response.companyObject );
        // updateCompanyDeatils();
      } 
      else {
        document.getElementById("filter").value = "Please Reload"
        console.log(`Error: ${xhr.status}`);
        
        }
      };
    }


function createFiveChartVol(companyObject,  days = 1000){
  let chartlim = 0;
  let lst = [];
  let newPositiveSort = [];
  let per = 0;
  let newCompanyObject2 ={};
    if(Object.keys(companyObject).length ){
        // document.getElementById("pages2").innerText = Object.keys(companyObject).length;
    }
    let newCompanyObject = {};
    let posi = {};
    let positiveSort = [];

          
    for (let key in companyObject) {
      let CobjLen = Math.min(document.getElementById("slidermin").value ,[...currentPriceDataTable[key]].length);
        if(CobjLen >= 2){
            let data = [...currentPriceDataTable[key]];
            let cdata = [...currentPriceDataTable[key]][CobjLen -1];
            let pppdata = [...currentPriceDataTable[key]][0] || 0;

            let cvolume = [...currentVolumeDataTable[key]][CobjLen -1] / [CobjLen -1];
            let cvolume2 = [...currentVolumeDataTable[key]][CobjLen -2] / [CobjLen -2]  || 0;
            let cvolume3 = [...currentVolumeDataTable[key]][CobjLen -3] / [CobjLen -3]  || 0;
            let cvolume4 = [...currentVolumeDataTable[key]][CobjLen -4] / [CobjLen -4]  || 0;
            let cvolume5 = [...currentVolumeDataTable[key]][CobjLen -5] / [CobjLen -5]  || 0;
            let cvolume6 = [...currentVolumeDataTable[key]][CobjLen -6] / [CobjLen -6]  || 0;
            let cvolume7 = [...currentVolumeDataTable[key]][CobjLen -7] / [CobjLen -7]  || 0;
            let cvolume8 = [...currentVolumeDataTable[key]][CobjLen -8] / [CobjLen -8]  || 0;

            if( (cvolume > cvolume2) || (cvolume2 > cvolume3) || (cvolume3 > cvolume4) ){
                goingUp.push(per);
                goingUpPosition[per] = key;
            }
            else if( (cvolume3 > cvolume4) || (cvolume4 > cvolume5) ){  
              goingUp8.push(per);
               goingUpPosition8[per] = key;
            }
            else if( (cvolume5 > cvolume6) || (cvolume6 > cvolume7) ){ 
                  goingDown.push(per);
                  goingDownPosition[per] = key;
              }

              else{
                    goingFlat.push(per);
                    goingFlatPosition[per] = key;
                }

              }
            }

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


let goingUp = [];
let goingUp8 = [];
let goingDown = [];
let goingFlat = [];
let goingUpPosition8 = {};
let goingUpPosition = {};
let goingDownPosition = {};
let goingFlatPosition = {};

function getStockStatus(key){
  Great = 0;
    let CobjLen = Math.min(document.getElementById("slidermin").value ,[...currentPriceDataTable[key]].length);
        
          if(CobjLen >= 2){
              let data = [...currentPriceDataTable[key]];
              let cdata = [...currentPriceDataTable[key]][CobjLen -1];
              let cdata2 = [...currentPriceDataTable[key]][CobjLen -2] || 0;
              let cdata3 = [...currentPriceDataTable[key]][CobjLen -3] || 0;
              let cdata4 = [...currentPriceDataTable[key]][CobjLen -4] || 0;
              let cdata5 = [...currentPriceDataTable[key]][CobjLen -5] || 0;
              let cdata6 = [...currentPriceDataTable[key]][CobjLen -7] || 0;
              // console.log([CurrentPriceObj[key]]);
              
              
              let pdata = [...currentPriceDataTable[key]][CobjLen - 2];
              let ppdata = [...currentPriceDataTable[key]][CobjLen - 3] || 0;
              let pppdata = [...CurrentPriceObj[key]][1] || 0;

              let cvolume= [...currentVolumeDataTable[key]][CobjLen -1] / [CobjLen -1];
              let pvolume2 = [...currentVolumeDataTable[key]][CobjLen - 2] / [CobjLen - 2] ;
              let pvolume3 = [...currentVolumeDataTable[key]][CobjLen - 3] / [CobjLen - 3] ;
              let pvolume4 = [...currentVolumeDataTable[key]][CobjLen - 4] / [CobjLen - 4] ;
              let pvolume5 = [...currentVolumeDataTable[key]][CobjLen - 5] / [CobjLen - 5] || 0;

              if(!((cdata == cdata2) && (cdata == cdata5) && (cdata == cdata3) && (cdata == cdata5))) {
                    if((cdata > pppdata) ) {
                        per = ((CurrentPriceObj[key][0] - CurrentPriceObj[key][3]  )/ CurrentPriceObj[key][3] );
                        CurrentPer = ((cdata - cdata5 )/ cdata5);
                          if(per > 0.025){
                          // if(per > 0.0){
                            data.reverse();
                            for(let i = 1; i < CobjLen - 2; i++  ){
                              if(data[i] >= data[i + 1]){
                                Great++;
                              }
                            }


                          if((cvolume > pvolume2)){
                            let perv = ((cvolume - pvolume2) / pvolume2) * 100;
                            console.log(key + '  '+ perv);
                            
                              goingUp.push(perv);
                               goingUpPosition[perv] = key;
                            }

                          else if(cdata == Math.max(...[...currentPriceDataTable[key]].slice( 0, CobjLen -1)) ){
                              // console.log('max ' + key );
                              goingUp.push(per);
                               goingUpPosition[per] = key;
                            }
                            else if((cdata > cdata5) && (cdata5 > cdata6)){  
                              console.log('  ' + key + '  ' + (cdata > cdata5) && (cdata5 > cdata6) + ' ' + (cdata) + ' ' + (cdata5)+ ' ' + (cdata6));                            
                              // console.log('Up ' + key ); 
                              goingUp8.push(per);
                               goingUpPosition8[per] = key;
                            }
                            else if(Great >= (CobjLen * 0.80 )){
                              // console.log('80% ' + key );
                              goingUp8.push(per);
                               goingUpPosition8[per] = key;
                            }
                            else if(Great >= (CobjLen * 0.70 )){
                              // console.log('70% ' + key );
                                  goingDown.push(per);
                                  goingDownPosition[per] = key;
                              }
                            // else if(Great >= (CobjLen * 0.60 )){
                            //       goingDown6.push(per);
                            //       goingDownPosition[per] = key;
                            //   }
                              else{
                                console.log('Rest ' + key );
                                    goingFlat.push(per);
                                    goingFlatPosition[per] = key;
                                }

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
                else{
                    goingFlat.push(key);
                }

          }
}



function createFiveChart(companyList,  days = 81){
  days = Math.min(currentPriceDataTable[companyList[0]].length - 1, slidermin.value);
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


        document.querySelector("#pages").innerText = (goingDown.length + goingFlat.length + goingUp.length + goingUp8.length);
        document.getElementById("sliderminval").innerText = 9 + Math.trunc(((slidermin.value * 5)+ 15)  / 60) + ':' + Math.trunc(((slidermin.value * 5)+ 15)  % 60);

       

}


function createChartSection(key, location){
  sliderchart.value = Math.min(sliderchart.value, [...currentVolumeDataTable[key]].length - 1);


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
}

function addingCharts(newCompanyObject2, location, days){
  
    for (let key in newCompanyObject2) {
        if(!(key.includes('undefined')) ){
          if(document.querySelectorAll('[id="' + key + '"] input[type="range"]').length > 0){
              days = document.querySelector('[id="' + key + '"] input[type="range"]').value;
          }
            createChartSection(key, location, days);

            addPriceChart(key, location, days);        

            addVolumeChart(key, location, days);
       
      }

    }
}



function addPriceChart(key, location, days){
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
            for(let y = days ; y < currentPriceDataTable[key].length ; y++){
              yValues2[y] =  yValues[y] ;
            }
                for (let i = days ; i < currentPriceDataTable[key].length ; i++) {
                  xValues.push(i);
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
                xValues.reverse();
        let CobjLen = Math.min(document.getElementById("slidermin").value ,[...currentPriceDataTable[key]].length);
    
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
                          label: 'L : ' + Math.min(...[...currentPriceDataTable[key]].slice(0, days)) + '   H : ' + Math.max(...[...currentPriceDataTable[key]].slice(0, days)) + '        C : ' + [...currentPriceDataTable[key]][days -1],
                          fontSize: 16,
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
                                        fontSize: 15,
                                        family: "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'monospace'"
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


// if (days < currentVolumeDataTable[key].length){
// for(let y = days ; y < currentVolumeDataTable[key].length ; y++){
// yValues2[y] =  yValues[y] ;
// }
// for (let i = days ; i < currentVolumeDataTable[key].length ; i++) {
// xValues.push(i);
// }
// }
// else{

for(let y = 0; y < Math.min(currentVolumeDataTable[key].length, days) ; y++){
yValues2[y] =  yValues[y] / (y + 1);
}

let newVolume = [];
for(let i = 1; i < [...currentVolumeDataTable[key]].length - 1; i++){                    
  newVolume.push([...currentVolumeDataTable[key]][i]/[i]);
  
}


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
// console.log([...currentPriceDataTable[key]].reverse());
new Chart(canvasb, {
type: "line",
data: {
labels: [...xaxisprice],
datasets: [{
      label: 'L : ' + Math.min(...[...newVolume].slice(0, days)).toFixed(0) + '   H : ' + Math.max(...[...newVolume].slice(20, days)).toFixed(0) + '        C : ' + [...[...newVolume]][days -3].toFixed(0),
      fontSize: 16,
      pointRadius: 0,
      borderWidth : 0.5,
      borderColor: "rgba(0,0,0,0.9)",
      data: [...newVolume].slice(0, days), // ([...currentVolumeDataTable[key]]).slice(0, days),
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
                      CurrentPriceObj = xhr.response.currentPriceData;
                      currentPriceDataTable = xhr.response.currentPriceDataTable;
                      currentVolumeDataTable = xhr.response.currentVolumeDataTable;
                      companyList = [...xhr.response.companyList];
                      // document.getElementById("pages").innerText = companyList.length;
                        createFiveChart(companyList);
                    } 
          
                    else {
                      document.getElementById("filter").value = "Please Reload"
                      console.log(`Error: ${xhr.status}`);
                      
                      }
                    };
                  }


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
    console.log(event.target.id, event.target.value);
    let days = event.target.value;
    let cnewCompanyObject2 = {};
      cnewCompanyObject2[event.target.id] = currentPriceDataTable[event.target.id];
      document.getElementById("sliderminval").innerText = 9 + Math.trunc(((sliderValue * 5)+ 15)  / 60) + ':' + Math.trunc(((sliderValue * 5)+ 15)  % 60);
    
  setTimeout(movingAddingCharts(event.target.id, location, days), 1000);

  }


function movingAddingCharts(key, location, days){    
                              addPriceChart(key, location, days);
                              addVolumeChart(key, location, days)
                }

                if(document.querySelectorAll("#slidermin").length > 0){
                  document.getElementById("slidermin").addEventListener('input', myFunc2);
              }
              