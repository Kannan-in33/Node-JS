// function getCompare() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "/getcompare");
//     xhr.send();
//     xhr.responseType = "json";
//     xhr.onload = () => {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         getCompareObject = xhr.response;
//     } 
//     else {
//         console.log(`Error: ${xhr.status}`);
//         }
//     };
//   }
//   getCompare();

// function removeActive(){
//     //   let lst = document.querySelectorAll("[id^='days']");
//     //   lst.forEach( element => element.classList.remove('active') );
//     }
    
// function showGainers(){
//       let lst = document.querySelectorAll("[class^='upTrend']");
//       lst.forEach(element => {
//         element.classList.toggle('show');    
//       });
    
//     }
    
// function clearcompareStocks(){
//         document.querySelector(".charts").style.display = "block";   
//         document.querySelector("#comparel").innerHTML = "";
//         comparetoggleHide();
//       }
      
// function comparetoggleHide(){
//         document.getElementById("compare").classList.toggle("hide");
//         document.getElementById("clearcompare").classList.toggle("hide");
//       }
      
// function clea() {
//           lst = document.querySelectorAll(".charts > div");
//           // lst.forEach( ele => ele.style.display = "");
//           document.getElementById("filter").value = '';
//         if(document.URL.includes("Sector")){
          
//           document.getElementById("SectorList").style.display = "block";
//           // document.querySelector(".charts").innerHTML = "";
//           myFunction();
      
//           compareList.forEach(( ) =>{
//             compareList.pop();
//             compareList.splice(0,1)
//           });
//           document.getElementById("comparel").innerHTML ="";
//         }
//         else{
//           setFilter();
//         }
        
//       }
    

// function updateFavourite(){
//            for( let i = 0; i < localStorage.length; i++ ){
//             if (document.querySelectorAll("#" + localStorage[i]).length > 0 ){
//           let ele =  document.querySelectorAll("#" + localStorage[i])[1];
//           //  ele.checked = true;
//           ele.classList.add("star");
//            }
//           }
//   }

// function getDay(days){
//         removeActive();
//         cleanUpCompare();
//         days = document.querySelector("#slider").value;
//       //   event.target.classList.add('active');
//         createChart(dCompanyObject, dE, days = days)
//       }

// function getBuy(margin){
//         removeActive();
//       //   event.target.classList.add('active');
//         switch(margin) {
//           case 40:
//             // createChart(BuyObject40, dE);
//             hideBuyStocks(BuyObject40);
//             break;
//           case 30:
//             // createChart(BuyObject30, dE);
//             hideBuyStocks(BuyObject30);
//             break;
//           case 60:
//             // createChart(BuyObject3Avg, dE);
//             hideBuyStocks(BuyObject3Avg);
//             break;
//           default:
//             // createChart(BuyObject20, dE);
//             hideBuyStocks(BuyObject20);
//         }
//   getBuyMain(); 
// }
      
// function checkPercent(tday, yday) {
//         if (tday == 0 || tday == undefined || ((Math.abs(((tday - yday) / yday) * 100)) > 25)){
//           return (Math.random() * 0.0005);
//         }
        
//         return (((tday - yday) / yday) * 100);
//       }
// function showPrice(){
//       let lst = document.querySelectorAll("[id^='getData']");
//       lst.forEach(element => {
//         element.classList.toggle('show');    
//       });
//       // document.querySelector(".search").classList.toggle('hide');
//     }
    
// function showPages(){
//       document.querySelector("#pagesDropdown").classList.toggle('show');
    
//       let lst = document.querySelectorAll(".pagelink");
//       lst.forEach(element => {
//         element.classList.toggle('show');    
//       });
    
//     }
    
// function showNoGainers(){
//       let lst = document.querySelectorAll("[class^='downTrend']");
//       lst.forEach(element => {
//         element.classList.toggle('show');    
//       });
    
//     }
    
// function  getBuyMain(){
//       let lst = document.querySelectorAll(".buy");
//       lst.forEach(element => {
//         element.classList.toggle('show');    
//       });
    
//     }

// function hideBuyStocks(BuyObject){
//         lst = document.querySelectorAll(".charts > div");
//         lst.forEach( ele => ele.style.display = "none");
//         for (let key in BuyObject) {    
//           document.querySelector(".charts > #" + key).style.display = ""
//           } 
      
//       }

// function updateCompanyDeatils(){

//     upvalue0 = 0;
//     downvalue0 = 0;
//     upvalue1 = 0;
//     downvalue1 = 0;
//     upvalue2 = 0;
//     downvalue2 = 0;
//     upvalue3 = 0;
//     downvalue3 = 0;
//     upvalue4 = 0;
//     downvalue4 = 0;
//     upvalue5 = 0;
//     downvalue5 = 0;
//         // let positivelength = positive0.length;
        
//         // for(let p = 0; p < positivelength; p++) {
//         //   positive0.pop();
//         // }
        
//         // let negativeListlength = negativeList0.length
        
//         // for(let n = 0; n < negativeListlength; n++) {
//         //   negativeList0.pop();
//         // }
        
//         // // 1***********************
//         // positivelength = positive1.length;
        
//         // for(let p = 0; p < positivelength; p++) {
//         //   positive1.pop();
//         // }
        
//         // negativeListlength = negativeList1.length
        
//         // for(let n = 0; n < negativeListlength; n++) {
//         //   negativeList1.pop();
//         // }
//         // // / END 1***************************
        
//         // positivelength = positive2.length;
        
//         // for(let p = 0; p < positivelength; p++) {
//         //   positive2.pop();
//         // }
        
//         // negativeListlength = negativeList2.length
        
//         // for(let n = 0; n < negativeListlength; n++) {
//         //   negativeList2.pop();
//         // }
        
        
        
//         // // END 2***************************
        
//         // positivelength = positive3.length;
        
//         // for(let p = 0; p < positivelength; p++) {
//         //   positive3.pop();
//         // }
        
//         // negativeListlength = negativeList3.length
        
//         // for(let n = 0; n < negativeListlength; n++) {
//         //   negativeList3.pop();
//         // }
        
//         // // END 3******************************
        
//         // positivelength = positive4.length;
        
//         // for(let p = 0; p < positivelength; p++) {
//         //   positive4.pop();
//         // }
        
//         // negativeListlength = negativeList4.length
        
//         // for(let n = 0; n < negativeListlength; n++) {
//         //   negativeList4.pop();
//         // }
        
//         // // END 4 ******************************
        
        
//         // positivelength = positive5.length;
        
//         // for(let p = 0; p < positivelength; p++) {
//         //   positive5.pop();
//         // }
        
//         // negativeListlength = negativeList5.length
        
//         // for(let n = 0; n < negativeListlength; n++) {
//         //   negativeList5.pop();
//         // }
        
//         // END 5 ******************************
        
//           for(let d = 0 ; d < companyDetails.length ; d++) {
            
//         if (document.querySelectorAll('[id="'+ companyDetails[d].toString().replace("&"," ")  + '"]').length > 0 &&  document.querySelectorAll('[id="'+ companyDetails[d] + '"] .right .block1').length == 0){
        
//         if (JSON.stringify(getCompareObject).includes([companyDetails[d]])){
//         let divtag0 = document.createElement("div");
//           divtag0.setAttribute("class", "block1");
//           document.querySelector('[id="'+ companyDetails[d] + '"] .right').appendChild(divtag0);
        
//         let divtag = document.createElement("div");
//             divtag.setAttribute("class", "dayComp");
        
//         // Start UPDTAE CURRENT and 1 Data************************************************
        
//         let divtagDC = document.createElement("div");
//         divtagDC.setAttribute("class", "dayCompare");
//         let complen = dCompanyObject[companyDetails[d]].length -1 ;
//         let tday;
//         let yday;
//         // DC data
//         if(Object.keys(currentPriceDataMid).length < 20){
//           tday = CurrentPriceObj[companyDetails[d]][0];
//           yday = (dCompanyObject[companyDetails[d]][complen]);
//         }
//         else{
//           tday = currentPriceDataMid[companyDetails[d]];
//           yday = (dCompanyObject[companyDetails[d]][complen]);
//         }
//         if(tday !== undefined ){
//          checknum = checkPercent(tday, yday) ;
//             if ((((tday - yday) / yday) * 100) < 0){
//               divtagDC.classList.add("downTrend0");  
//               divtagDC.id = companyDetails[d];
//             }
//             else{
//               divtagDC.classList.add("upTrend0");
//               divtagDC.id = companyDetails[d];
              
//             }
        
//         divtagDC.innerText = Math.abs(checkPercent(tday, yday).toFixed(1)) ;
//         divtag.appendChild(divtagDC);
//         }
        
        
//         if(Object.keys(currentPriceDataMid).length > 20){
//           tday = CurrentPriceObj[companyDetails[d]];
//           yday = currentPriceDataMid[companyDetails[d]];
//           let divtagLC = document.createElement("div");
//           divtagLC.setAttribute("class", "LCompare");
        
//         if(tday !== undefined ){
//          checknum = checkPercent(tday, yday) ;
//             if ((((tday - yday) / yday) * 100) < 0){
//               divtagLC.classList.add("downTrend0");  
//             }
//             else{
//               divtagLC.classList.add("upTrend0");
//             }
        
//             divtagLC.innerText = Math.abs(checkPercent(tday, yday).toFixed(1)) ;
//         divtag.appendChild(divtagLC);
//         }
        
//         }
        
        
        
//         divtag0.appendChild(divtag);
        
//         // **************************************update Current and 1 data END************************************
        
        
        
        
//         // divtag.setAttribute("class", "Company");
//         // divtag.innerText = companyDetails[d];
//         // divtag0.appendChild(divtag);
        
//           divtag = document.createElement("div");
//           divtag.setAttribute("class", "MarketCap");
//           divtag.innerText = "M:" + rupee.format(getCompareObject[companyDetails[d]]['Market Cap']);
//           divtag0.appendChild(divtag);
        
//         divtag = document.createElement("div");
//         divtag.setAttribute("class", "bookvalue");
//         divtag.innerText = "BK:  " + getCompareObject[companyDetails[d]]['Book Value'];
//         divtag0.appendChild(divtag);
        
//         // divtag = document.createElement("div");
//         // divtag.setAttribute("class", "High");
//         // divtag.innerText = "H :" + getCompareObject[companyDetails[d]].High;
//         // divtag0.appendChild(divtag);
        
//         // divtag = document.createElement("div");
//         // divtag.setAttribute("class", "Low");
//         // divtag.innerText = "L :" +getCompareObject[companyDetails[d]].Low;
//         // divtag0.appendChild(divtag);
        
//         divtag = document.createElement("div");
//         divtag.setAttribute("class", "Promoter holding");
//         divtag.innerText = "PH: " + getCompareObject[companyDetails[d]]['Promoter holding'];
//         divtag0.appendChild(divtag);
        
//         divtag = document.createElement("div");
//         divtag.setAttribute("class", "Debt to equity");
//         divtag.innerText = "DE: " + getCompareObject[companyDetails[d]]['Debt to equity'];
//         divtag0.appendChild(divtag);
        
        
//         //  UPDTAE CURRENT Data************************************************
        
//         divtag = document.createElement("div");
//         divtag.setAttribute("class", "difference0");
//         complen = dCompanyObject[companyDetails[d]].length -1 ;
//         tday = CurrentPriceObj[companyDetails[d]][0];
//         yday = (dCompanyObject[companyDetails[d]][complen]);
        
//         if(tday !== undefined ){
//          checknum = checkPercent(tday, yday) ;
//         if ((((tday - yday) / yday) * 100) < 0){
//           downvalue0++;
//           divtag.classList.add("downTrend0");
//           document.querySelector("button.downTrend0 span").innerText =  "  " + downvalue0;  
//           document.querySelector("#Dnumbers").innerText = downvalue0;
//           negativeList0.push((checkPercent(tday, yday) ));
//           negativeCompany0[checkPercent(tday, yday) ] = companyDetails[d];
//           MasterNegative.push((checkPercent(tday, yday) ));
//           MasterNegativeCompany[checkPercent(tday, yday) ] = companyDetails[d];
          
//         }
//         else{
//           upvalue0++;
//           divtag.classList.add("upTrend0");
//           document.querySelector("button.upTrend0 span").innerText =  "  " + upvalue0;
//           document.querySelector("#Gnumbers").innerText = upvalue0;
//           positive0.push((checkPercent(tday, yday) ));
//           positiveCompany0[checkPercent(tday, yday) ] = companyDetails[d];
//           Masterpositive.push((checkPercent(tday, yday) ));
//           MasterpositiveCompany[checkPercent(tday, yday) ] = companyDetails[d];
//         }
//         // }
//         divtag.innerText = "0:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
        
//         }
//         divtag0.appendChild(divtag);
        
//         // **************************************update Current data END************************************
        
//         divtag = document.createElement("div");
//         divtag.setAttribute("class", "difference1");
//         complen = dCompanyObject[companyDetails[d]].length -1 ;
//         tday = (dCompanyObject[companyDetails[d]][complen]);
//         yday = (dCompanyObject[companyDetails[d]][complen -1] );
//         checknum = checkPercent(tday, yday) ;
//         if (checknum < 0){
//           downvalue1++;
//           divtag.classList.add("downTrend1");
//           document.querySelector("button.downTrend1 span").innerText =  "  " + downvalue1;  
//           negativeList1.push(checknum);
//           negativeCompany1[checknum] = companyDetails[d];
//           MasterNegative1.push(checknum);
//           MasterNegativeCompany1[checknum] = companyDetails[d];
          
//         }
//         else{
//           upvalue1++;
//           divtag.classList.add("upTrend1");
//           document.querySelector("button.upTrend1 span").innerText =  "  " + upvalue1;    
//           positive1.push(checknum);
//           positiveCompany1[checknum] = companyDetails[d];
//           Masterpositive1.push(checknum);
//           MasterpositiveCompany1[checknum] = companyDetails[d];
        
//         }
//         divtag.innerText = "1:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
//         divtag0.appendChild(divtag);
        
//         // Second Symbol
        
        
//         divtag = document.createElement("div");
//         divtag.setAttribute("class", "difference2");
//         complen = dCompanyObject[companyDetails[d]].length -2 ;
//         tday = (dCompanyObject[companyDetails[d]][complen]);
//         yday = (dCompanyObject[companyDetails[d]][complen -1] );
//         checknum = checkPercent(tday, yday) ;
//         if (checknum < 0){
//           downvalue2++;
//           divtag.classList.add("downTrend2");
//           document.querySelector("button.downTrend2 span").innerText =  "  " + downvalue2;  
//           negativeList2.push(checknum);
//           negativeCompany2[checknum] = companyDetails[d];
//           MasterNegative2.push(checknum);
//           MasterNegativeCompany2[checknum] = companyDetails[d];
          
//         }
//         else{
//           upvalue2++;
//           divtag.classList.add("upTrend2");
//           document.querySelector("button.upTrend2 span").innerText =  "  " + upvalue2;
//           positive2.push(checknum);
//           positiveCompany2[checknum ] = companyDetails[d];
//           Masterpositive2.push(checknum);
//           MasterpositiveCompany2[checknum] = companyDetails[d];
        
        
//         }
//         divtag.innerText = "2:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
//         divtag0.appendChild(divtag);
        
//         // Third Symbol*****************************************************************************
        
        
//         divtag = document.createElement("div");
//         divtag.setAttribute("class", "difference3");
//         complen = dCompanyObject[companyDetails[d]].length -3 ;
//         tday = (dCompanyObject[companyDetails[d]][complen]);
//         yday = (dCompanyObject[companyDetails[d]][complen -1] );
//         checknum = checkPercent(tday, yday) ;
        
//         if (checknum < 0){
//           downvalue3++;
//           divtag.classList.add("downTrend3");
//           document.querySelector("button.downTrend3 span").innerText =  "  " + downvalue3;  
//           negativeList3.push(checknum);
//           negativeCompany3[checknum] = companyDetails[d];
//           MasterNegative3.push(checknum);
//           MasterNegativeCompany3[checknum] = companyDetails[d];
          
//         }
//         else{
//           upvalue3++;
//           divtag.classList.add("upTrend3");
//           document.querySelector("button.upTrend3 span").innerText = "  " + upvalue3;
//           positive3.push(checknum);
//           positiveCompany3[checknum] = companyDetails[d];
//           Masterpositive3.push(checknum);
//           MasterpositiveCompany3[checknum] = companyDetails[d];
        
        
//         }
//         divtag.innerText = "3:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
//         divtag0.appendChild(divtag);
        
        
//         // divtag = document.createElement("div");
//         // divtag.setAttribute("class", "currentPrice");
//         // complen = dCompanyObject[companyDetails[d]].length -1 ;
//         // tday = (dCompanyObject[companyDetails[d]][complen]);
//         // divtag.innerText = rupee.format(tday) ;
//         // divtag0.appendChild(divtag);
        
//         // Third symbol END*******************************************************************
        
        
//         // Fourth Symbol*****************************************************************************
        
        
//         divtag = document.createElement("div");
//         divtag.setAttribute("class", "difference4");
//         complen = dCompanyObject[companyDetails[d]].length -4 ;
//         tday = (dCompanyObject[companyDetails[d]][complen]);
//         yday = (dCompanyObject[companyDetails[d]][complen -1] );
//         checknum = checkPercent(tday, yday) ;
        
//         if (checknum < 0){
//           downvalue3++;
//           divtag.classList.add("downTrend4");
//           document.querySelector("button.downTrend3 span").innerText =  "  " + downvalue4;
          
//           negativeList4.push(checknum);
//           negativeCompany4[checknum] = companyDetails[d];
          
//         }
//         else{
//           upvalue4++;
//           divtag.classList.add("upTrend4");
//           document.querySelector("button.upTrend3 span").innerText = "  " + upvalue4;
//           positive4.push(checknum);
//           positiveCompany4[checknum] = companyDetails[d];
        
        
//         }
//         divtag.innerText = "4:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
//         divtag0.appendChild(divtag);
        
        
//         // divtag = document.createElement("div");
//         // divtag.setAttribute("class", "currentPrice");
//         // complen = dCompanyObject[companyDetails[d]].length -1 ;
//         // tday = (dCompanyObject[companyDetails[d]][complen]);
//         // divtag.innerText = rupee.format(tday) ;
//         // divtag0.appendChild(divtag);
        
//         // Fourth symbol END*******************************************************************
        
//         // Fifth Symbol*****************************************************************************
        
        
//         divtag = document.createElement("div");
//         divtag.setAttribute("class", "difference5");
//         complen = dCompanyObject[companyDetails[d]].length -5 ;
//         tday = (dCompanyObject[companyDetails[d]][complen]);
//         yday = (dCompanyObject[companyDetails[d]][complen -1] );
//         checknum = checkPercent(tday, yday) ;
        
//         if (checknum < 0){
//           downvalue5++;
//           divtag.classList.add("downTrend5");
//           document.querySelector("button.downTrend3 span").innerText =  "  " + downvalue5;
          
//           negativeList5.push(checknum);
//           negativeCompany5[checknum] = companyDetails[d];
          
//         }
//         else{
//           upvalue5++;
//           divtag.classList.add("upTrend5");
//           document.querySelector("button.upTrend3 span").innerText = "  " + upvalue5;
//           positive5.push(checknum);
//           positiveCompany5[checknum] = companyDetails[d];
        
        
//         }
//         divtag.innerText = "5:  " +  Math.abs(checkPercent(tday, yday).toFixed(1)) ;
//         divtag0.appendChild(divtag);
        
        
//         divtag = document.createElement("div");
//         divtag.setAttribute("class", "currentPrice");
//         complen = dCompanyObject[companyDetails[d]].length -1 ;
//         tday = (dCompanyObject[companyDetails[d]][complen]);
//         divtag.innerText = rupee.format(tday) ;
//         divtag0.appendChild(divtag);
        
//         // Fifth symbol END*******************************************************************
        
//         }
        
//         }
//         }
//         positive0.sort((a, b) => b - a);
//         positive1.sort((a, b) => b - a);
//         positive2.sort((a, b) => b - a);
//         positive3.sort((a, b) => b - a);
        
//         negativeList0.sort((a, b) => a - b);
//         negativeList1.sort((a, b) => a - b);
//         negativeList2.sort((a, b) => a - b);
//         negativeList3.sort((a, b) => a - b);
        
//         Masterpositive.sort((a, b) => b - a);
//         Masterpositive1.sort((a, b) => b - a);
//         Masterpositive2.sort((a, b) => b - a);
//         Masterpositive3.sort((a, b) => b - a);
        
//         MasterNegative.sort((a, b) => a - b);
//         MasterNegative1.sort((a, b) => a - b);
//         MasterNegative2.sort((a, b) => a - b);
//         MasterNegative3.sort((a, b) => a - b);
//         }
        
// function getSectorData(event) {
//             document.getElementById("results0").innerText = 0;
//             document.getElementById("results1").innerText = 0;
//             document.getElementById("results2").innerText = 0;
//             document.getElementById("results3").innerText = 0;
//             document.getElementById("resultsd0").innerText = 0;
//             document.getElementById("resultsd1").innerText = 0;
//             document.getElementById("resultsd2").innerText = 0;
//             document.getElementById("resultsd3").innerText = 0;
//             document.getElementById("filter").value = event.target.innerText;
//             event.target.parentElement.style.display = 'none';
//             document.getElementById("results0").innerText = "Loading...";
//             event.target.classList.add('active');
//             const xhr = new XMLHttpRequest();
//             xhr.open("GET", "/" + event.target.id.toString());
//             xhr.send();
//             xhr.responseType = "json";
//             xhr.onload = () => {
//               if (xhr.readyState == 4 && xhr.status == 200) {
//                 dCompanyObject = xhr.response.companyObject;
//                 // dCompanyDateObject = xhr.response.companyDateObj;
                
//                 if(Object.keys(MasterdCompanyObject).length == 0){
//                   MasterdCompanyObject = dCompanyObject;
//                   MasterdCompanyObjectCopy = dCompanyObject;
//                 }
//                 else{              
//                   MasterdCompanyObject = Object.assign(dCompanyObject, MasterdCompanyObjectCopy)
//                   MasterdCompanyObjectCopy = {};
//                   MasterdCompanyObjectCopy = dCompanyObject;
//                 }
    
//                 dVolumeObject = xhr.response.volumeObject;
//                 CurrentPriceObj = xhr.response.currentPriceData;
//                 currentPriceData1 = xhr.response.currentPriceData1;
//                 currentPriceDataTable = xhr.response.currentPriceDataTable;
//                 currentVolumeDataTable = xhr.response.currentVolumeDataTable,
//                 closeOpenPriceDataObject = xhr.response.closeOpenPriceDataObject;
//                 createChart( xhr.response.companyObject, event.target.id);
//               } 
//               else {
//                 console.log(`Error: ${xhr.status}`);
//                 }
//               };
//       }
    
// function getSectorDataAll() {
//         // removeActive();
//         document.getElementById("filter").value = "Loading...";
//         document.getElementById("results0").innerText = "Loading...";
//         document.getElementById("SectorList").style.display = 'none';
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "/All" );
//         xhr.send();
//         xhr.responseType = "json";
//         xhr.onload = () => {
//           if (xhr.readyState == 4 && xhr.status == 200) {
//             dCompanyObject = xhr.response.companyObject;
//             // dCompanyDateObject = xhr.response.companyDateObj;
//             dVolumeObject = xhr.response.volumeObject;
//             CurrentPriceObj = xhr.response.currentPriceData;
//             currentPriceData1 = xhr.response.currentPriceData1;
//             currentPriceDataTable = xhr.response.currentPriceDataTable;
//             currentVolumeDataTable = xhr.response.currentVolumeDataTable,
//             closeOpenPriceDataObject = xhr.response.closeOpenPriceDataObject;
//             createChart( xhr.response.companyObject);
//             document.getElementById("filter").value = 'All';
            
//           } 
//           else {
//             console.log(`Error: ${xhr.status}`);
//             }
//           };
//     }
    
// // Search Bar Script to filter charts matching the typed text

// function setComp(event){

//     if (event.target.checked){
//       compareList.push(event.target.classList[0]);
//       // console.log(compareList);
//     }
//     else{
//       let index = compareList.indexOf(event.target.classList[0]);
//       compareList.splice(index,1)
    
//     }
    
//     }

// function setFav(event){
//         let AFL = [...Array.from(localStorage)];
    
//         if(!AFL.includes(event.target.id.toString())){
//           localStorage.setItem(localStorage.length, event.target.id.toString());
//           let clr = document.querySelectorAll("#" + event.target.id.toString())[1];
//           clr.classList.add("star");
//         }
//         else{
//           let clr = document.querySelectorAll("#" + event.target.id.toString())[1];
//           clr.classList.toggle("star");
//           for(let i = 0; i < localStorage.length; i++){
    
//             if(localStorage[i] == event.target.id.toString()){
//               localStorage.removeItem(i);
//               let AFL2 = [];
    
//               for(let key in localStorage){
//                 if(AFL2.length < AFL.length - 1){
//                   AFL2.push(localStorage[key]);
//                 }
//               }
    
//               localStorage.clear();
    
//               for(let j = 0; j < AFL2.length ; j++){
    
//                 if(AFL2[j] != undefined){
//                   localStorage.setItem(j , AFL2[j]);
//                 }
//               }
//             }
    
//           }
//         }
//     }

// function getKeyByValue(object, value) {
//         return Object.keys(object).find(key => object[key] === value);
//       }

// function getData(e) {
    
//         removeActive();
//         cleanUpCompare();
//         // document.getElementById("getData" + e).innerText = "Loading...";
//         event.target.classList.add('active');
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "/" + e.toString());
//         xhr.send();
//         xhr.responseType = "json";
//         xhr.onload = () => {
//           if (xhr.readyState == 4 && xhr.status == 200) {
//             dCompanyObject = xhr.response.companyObject;
            
//             if(Object.keys(MasterdCompanyObject).length == 0){
//               MasterdCompanyObject = dCompanyObject;
//               MasterdCompanyObjectCopy = dCompanyObject;
//             }
//             else{              
//               MasterdCompanyObject = Object.assign(dCompanyObject, MasterdCompanyObjectCopy)
//               MasterdCompanyObjectCopy = {};
//               MasterdCompanyObjectCopy = dCompanyObject;
//             }
            
            
//             dVolumeObject = xhr.response.volumeObject;
//             currentPriceData1 = xhr.response.currentPriceData1;            
//             if(JSON.stringify(CurrentPriceObj).length == 2) {
//             CurrentPriceObj = xhr.response.currentPriceData;
//             currentPriceDataTable = xhr.response.currentPriceDataTable;
//             closeOpenPriceDataObject = xhr.response.closeOpenPriceDataObject;
//             }
//             currentVolumeDataTable = xhr.response.currentVolumeDataTable;
//             createChart( xhr.response.companyObject, e);
//           } 
//           else {
//             console.log(`Error: ${xhr.status}`);
//             }
//           };
//           showPrice();
//          event.target.classList.add('hide');
//   }


//   function createChartMini(companyObject, companyName, divtag0, days = 1000){
//     let yValues  = [];
//     yValues  = [...companyObject[companyName]];
//     let xValues = [];
//     let yValues2 = [];

//       yValues.reverse();
//       for(let y = 0; y < Math.min(companyObject[companyName].length, days) ; y++){
//         yValues2[y] =  yValues[y] ;
//       }
//           for (let i = 0; i < Math.min(companyObject[companyName].length, days) ; i++) {
//             xValues.push(i);
//           }
//           xValues.reverse();
//   let divtag = document.createElement("div");
//   let anchortag = document.createElement("a");
//   anchortag.setAttribute("href", "https://www.screener.in/company/" + companyName + "/");
//   anchortag.setAttribute("target", "_blank");
//   anchortag.appendChild(divtag);
//               let canvas = document.createElement("canvas");
//               canvas.setAttribute("id", companyName );
//               canvas.setAttribute("class", "miniChart" );
//   divtag.appendChild(canvas);
//   divtag0.appendChild(anchortag);
//                 // let cmax = Math.max(...yValues2);
//                 let ccurrect = yValues2[0];
//                 let cmin = Math.min(...yValues2);
//                 let cmax = Math.max(...yValues2);
//                 let buyAvg = [...yValues2];                        
                
//                   new Chart(canvas, {
//                       type: "line",
//                       data: {
//                       labels: xValues,
//                       datasets: [{
//                               label: companyName + '   FL ' + ( ((cmax-cmin)/cmax) * 100).toFixed(2).toString() + ' %  FC (' + ( ((cmax-ccurrect)/cmax) * 100).toFixed(2).toString() + ' )'  ,
//                               pointRadius: 0,
//                               borderWidth : 0.5,
//                               borderColor: "rgba(0,0,0,0.9)",
//                               data: [...yValues2].reverse(),
//                               }]
//                             },
//                             options: {
//                                     plugins: {
//                                     legend: {
//                                     labels: {
//                                     font: {
//                                     size: 8
//                                     }
//                                     }
//                                     }
//                                     }
//                                     }  
//                       });

// }

//   // Search Bar Script to filter charts matching the typed text

//   function setFilter(){
//     let filterData = (document.querySelector("#filter").value).toUpperCase();
//     if ( filterData.length > 0) {
//         var lst = Array.from(document.querySelectorAll(".charts > div"));
//         lst.forEach( (ele) => ele.style.display = "none" );

//         lst = Array.from(document.querySelectorAll("[id^= '" + filterData + "']"));
//         lst.forEach( ele => ele.style.display = "" ); 

//     }

//     else{
//       let lst = document.querySelectorAll(".charts > div");
//       lst.forEach( ele => ele.style.display = "" );
//     }
//     }

// function setFilter2(){
//       let filterData = (document.querySelector("#filters").value).toUpperCase();
//       if ( filterData.length > 0) {
//           var lst = Array.from(document.querySelectorAll(".charts > div"));
//           lst.forEach( (ele) => ele.style.display = "none" );

//           lst = Array.from(document.querySelectorAll("[id^= '" + filterData + "']"));
//           lst.forEach( ele => ele.style.display = "" ); 

//       }
  
//       else{
//         let lst = document.querySelectorAll(".charts > div");
//         lst.forEach( ele => ele.style.display = "" );
//       }
//       }


// let myFunc1 = letsDebounce(setFilter,1000);
// let myFunc2 = letsDebounce(setFilter2,1000);
  
// function letsDebounce(fn,d){
//       let timer;
//       return function(){
//       clearTimeout(timer);
//       timer=setTimeout(fn,d);
//       }
//   }
//   if(document.querySelectorAll("#filter").length > 0){
//     document.getElementById("filter").addEventListener('input', myFunc1);
// }

//   if(document.querySelectorAll("#filters").length > 0){
//       document.getElementById("filters").addEventListener('input', myFunc2);
//   }

// function cleanUpCompare() {
//     lst = document.querySelectorAll(".comparel .block1");
//     lst.forEach( (ele) => {
//       ele.style.display = "none" ;
//     });

//   }

//   // compareStocks
//   function getFavourits(){

//     let lst = document.querySelectorAll(".charts > div");
//     lst.forEach( (ele) => {
//       ele.style.display = "none" ;
//     });

//     cleanUpCompare();

//     lst = document.querySelectorAll(".charts div");
//     lst.forEach( ele => { 
//       if(ele.innerHTML.toString().includes("star")){
//       ele.style.display = "" ;
//       }
//     }); 

//     toggleHide();
// }

// function toggleHide(){
//     document.getElementById("Favourits").classList.toggle("hide");
//     document.getElementById("clearFavourits").classList.toggle("hide");
// }

// function clearFavourits(){

//     let lst = document.querySelectorAll(".charts > div");
//     lst.forEach( (ele) => {
//       ele.style.display = "" ;
//     });

//     toggleHide();

// }

// function setFav(event){
//     let AFL = [...Array.from(localStorage)];
//     let clr = document.querySelectorAll("#" + event.target.id.toString())[1];
//       clr.classList.toggle("star");

//     if(!AFL.includes(event.target.id.toString())){
//       localStorage.setItem(localStorage.length, event.target.id.toString());
      
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

// function getFav(){
//     for (let i= 0; i < localStorage.length; i ++ ){
//       let clr = document.querySelectorAll("#" + localStorage.getItem(i))[1];
//       clr.classList.toggle("star");

//     };
//   }


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

function checkPercent(tday, yday) {
    if (tday == 0 || tday == undefined || ((Math.abs(((tday - yday) / yday) * 100)) > 25)){
      return (Math.random() * 0.0005);
    }
    
    return (((tday - yday) / yday) * 100);
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
  
  function getDay(days){
    removeActive();
    cleanUpCompare();
    days = document.querySelector("#slider").value;
  //   event.target.classList.add('active');
    createChart(dCompanyObject, dE, days = days)
  }
  function removeActive(){
  //   let lst = document.querySelectorAll("[id^='days']");
  //   lst.forEach( element => element.classList.remove('active') );
  }
function showGainers(){
  document.querySelector("#pagesDropdown").style.display = 'none';
  document.querySelector("#GainDropdown").style.display = '';
  document.querySelector("#NoGainDropdown").style.display = 'none';
    let lst = document.querySelectorAll("[class^='upTrend']");
    lst.forEach(element => {
      element.classList.toggle('show');    
    });
  
  }
  
  function showPrice(){
    let lst = document.querySelectorAll("[id^='getData']");
    lst.forEach(element => {
      element.classList.toggle('show');    
    });
    // document.querySelector(".search").classList.toggle('hide');
  }
  
  function showPages(){
    // document.querySelector("#pagesDropdown").classList.toggle('show');
    document.querySelector("#pagesDropdown").style.display = '';
    document.querySelector("#GainDropdown").style.display = 'none';
    document.querySelector("#NoGainDropdown").style.display = 'none';
  
    let lst = document.querySelectorAll(".pagelink");
    lst.forEach(element => {
      element.classList.toggle('show');    
    });
  
  }
  
  function showNoGainers(){
    document.querySelector("#pagesDropdown").style.display = 'none';
    document.querySelector("#GainDropdown").style.display = 'none';
    document.querySelector("#NoGainDropdown").style.display = '';
    let lst = document.querySelectorAll("[class^='downTrend']");
    lst.forEach(element => {
      element.classList.toggle('show');    
    });
  
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
let myFunc2 = letsDebounce(getCharts,800);
  
function letsDebounce(fn,d){
      let timer;
      return function(){
        document.getElementById("sliderminval").innerText = slidermin.value;
      clearTimeout(timer);
      timer=setTimeout(fn,d);
      }
  }
  if(document.querySelectorAll("#filter").length > 0){
    document.getElementById("filter").addEventListener('input', myFunc1);
}

  if(document.querySelectorAll("#slidermin").length > 0){
      document.getElementById("slidermin").addEventListener('input', myFunc2);
  }

  function cleanUpCompare() {
    lst = document.querySelectorAll(".comparel .block1");
    lst.forEach( (ele) => {
      ele.style.display = "none" ;
    });
    

  }

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


    function getFav(){
    for (let i= 0; i < localStorage.length; i ++ ){
      let clr = document.querySelectorAll("#" + localStorage.getItem(i))[1];
      clr.classList.toggle("star");

    };
  }



function getFivePer(){
  clearChart();
  document.querySelector("#pages").classList.toggle("hide");
  document.querySelector("#pages2").classList.toggle("hide");
    getFiveHTTPs('getFivePer', 1);
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }

function getFiveVolumeData(){
  clearChart();
  document.querySelector("#pages").classList.toggle("hide");
  document.querySelector("#pages2").classList.toggle("hide");
    getFiveHTTPs('getFivePer', 0);


  }

  function clearChart(){
    lst = document.querySelectorAll(".charts div");
          if(lst.length > 1){
                Array.from(lst).forEach( (element) =>  element.remove() );
          }
     lst = document.querySelectorAll(".downcharts div");
          if(lst.length > 1){
                Array.from(lst).forEach( (element) =>  element.remove() );
          }
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

function getStockData(){
  getSectorList();
}

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