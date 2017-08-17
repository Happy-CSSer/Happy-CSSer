var expandBtn = document.getElementById("expandBtn");
var mainEl = document.getElementById("main");
expandBtn.addEventListener("click", function() {
  mainEl.classList.toggle("active");
});