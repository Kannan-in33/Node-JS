let goingUp = [];
let goingDown = [];
let goingFlat = [];
let goingUpPosition = {};
let goingDownPosition = {};
let goingFlatPosition = {};




function createFiveChart(companyObject, e, days = 1000){
    let chartlim = 0;
    let lst = [];
    let newPositiveSort = [];
    let per = 0;
    let newCompanyObject2 ={};
    goingUp = [];
    goingDown = [];
    goingFlat = [];

      let newCompanyObject = {};
      let posi = {};
      let positiveSort = [];
      if(Object.keys(companyObject).length ){
        document.getElementById("pages2").innerText = Object.keys(companyObject).length;
    }
            
      for (let key in companyObject) {
          getStockStatus(key);            
      }

      let goingUpCompanyObject = {};

      if(goingUp.length > 0 ){
          goingUp.sort((a,b) => a - b);
          goingUp.reverse();
          goingUp.forEach( (CurrentPer) =>{
            goingUpCompanyObject[goingUpPosition[CurrentPer]] = companyObject[goingUpPosition[CurrentPer]];
          })

      }

    dE = e;
       addingCharts(goingUpCompanyObject, "charts");

}

function getStockStatus(key){
    let CobjLen = [...currentPriceDataTable[key]].length;
          if(CobjLen >= 4){
              let data = [...currentPriceDataTable[key]];
              let cdata = [...currentPriceDataTable[key]][CobjLen -1];
              let cdata2 = [...currentPriceDataTable[key]][CobjLen -2] || 0;
              let cdata3 = [...currentPriceDataTable[key]][CobjLen -3] || 0;
              let cdata4 = [...currentPriceDataTable[key]][CobjLen -4] || 0;
              let cdata5 = [...currentPriceDataTable[key]][CobjLen -5] || 0;
              
              
              let pdata = [...currentPriceDataTable[key]][CobjLen - 2];
              let ppdata = [...currentPriceDataTable[key]][CobjLen - 3] || 0;
              let pppdata = [...closeOpenPriceDataObject[key]][1] || 0;

              let cvolume= [...currentVolumeDataTable[key]][CobjLen -1] / [CobjLen -1];
              let pvolume = [...currentVolumeDataTable[key]][CobjLen - 10] / [CobjLen - 10] || [...currentVolumeDataTable[key]][CobjLen -2] / [CobjLen -2];

              if(!((cdata == cdata2) && (cdata == cdata5) && (cdata == cdata3) && (cdata == cdata5))) {
                    if((cdata > pppdata) ) {
                        per = ((cdata - pppdata )/ pppdata);
                        CurrentPer = ((cdata - cdata2 )/ cdata2);
                          if(per > 0.02){
                                if(CurrentPer > 0){
                                    goingUp.push(CurrentPer);
                                    goingUpPosition[CurrentPer] = key;
                                }
                                else if(CurrentPer < 0){
                                    goingDown.push(CurrentPer);
                                    goingDownPosition[CurrentPer] = key;
                                }
                                else{
                                    goingFlat.push(CurrentPer);
                                    goingFlatPosition[CurrentPer] = key;
                                }


                          }
                        
                    }
                }
                else{
                    goingFlat.push(key);
                }

          }
}

function addingCharts(newCompanyObject2, location){

    for (let key in newCompanyObject2) {
        if(!(key.includes('undefined')) ){
        resultCount++;
        // console.log(key);
        sliderchart.value = [...currentVolumeDataTable[key]].length - 1;
        document.getElementById("sliderminval").innerText = sliderchart.value;
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
          let op = [...closeOpenPriceDataObject[key]][1];
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

        document.querySelector("." + location).appendChild(divtagMain);

       
      }

    }
}