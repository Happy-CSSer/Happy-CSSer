document.addEventListener("DOMContentLoaded", init);

function init() {
  document.addEventListener("click", handleDisplay);
  
  function handleDisplay(event) {
  	var parentEl;
    //Display
    if (event.target.className === "splitCell") {
    	parentEl = event.target.parentNode;
    	parentEl.classList.add("active");
      setTimeout(function() {
      	parentEl.querySelector(".splitCard").classList.add("active");
      }, 300);
    }
    //Incorporated
    if (event.target.className === "splitCard active") {
    	event.target.classList.remove("active");
      parentEl = event.target.parentNode;
      setTimeout(function() {
      	parentEl.classList.remove("active");
      }, 300);
    }
  }
}