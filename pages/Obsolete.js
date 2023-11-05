// OLD show PRICE drop down 50, 100, 200 ...
function showPrice(){
    let lst = document.querySelectorAll("[id^='getData']");
    lst.forEach(element => {
      element.classList.toggle('show');    
    });
    // document.querySelector(".search").classList.toggle('hide');
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

      // For filling up Favourite star -- compareStocks
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

// Cleaning Compare section
function cleanUpCompare() {
    lst = document.querySelectorAll(".comparel .block1");
    lst.forEach( (ele) => {
      ele.style.display = "none" ;
    });
    

}

// Mini Chart
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

// If Compare option is Enabled in Future
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

// Used for Home Dropdown to show other page buttons   
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

function removeActive(){
    //   let lst = document.querySelectorAll("[id^='days']");
    //   lst.forEach( element => element.classList.remove('active') );
}