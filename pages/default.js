var slider = document.querySelector('#slider');
    var mini = document.getElementById("mini");
    var maxi = document.getElementById("maxi");
    // mini.value = maxi.value = slider.value;
    maxi.value = slider.value;
    
slider.oninput = function() {
      // if (slider.value < 0){
      //   mini.value = 248 - this.value;
      //   maxi.value = 0;
      // }
      // else{
        maxi.value = this.value;
      //   mini.value = 0;
      // }
        
      }
    
      // mini.oninput = function() {
      //   slider.value = this.value;   
          
      //   }
        maxi.oninput = function() {
          slider.value = this.value;   
            
          }
    
function resetSlider(){
            maxi.value = 0;
            slider.value = 0;
            getDay(20);
}
    
document.onscroll = function(){
document.querySelector(".range").classList.add("hide");
}

document.querySelector("#rangeshow").onclick = function(){
document.querySelector(".range").classList.toggle("hide");
}
            
    
    var priceslidermin = document.querySelector('#slidermin');
    var priceslidermax = document.querySelector('#slidermax');
    var pricemin = document.getElementById("pricemin");
    var pricemax = document.getElementById("pricemax");
            
            priceslidermin.oninput = function() {
              pricemin.value = this.value;
              if ((Number(this.value) + 5) >= priceslidermax.value){
                  priceslidermax.value = Number(this.value) + 5;
                  pricemax.value = Number(this.value) + 5;
              }
              }
            
            
            priceslidermax.oninput = function() {
              pricemax.value = this.value;
              priceslidermin.max = Number(this.value) - 5;
              if (Number(this.value)  <= (Number(pricemin.value) + 5)){
                pricemin.value = Number(this.value) -5;
                priceslidermin.value = Number(this.value) - 5;
            }
    
              }
            
    
                maxi.oninput = function() {
                  slider.value = this.value;   
                    
}
    
    
    
    
