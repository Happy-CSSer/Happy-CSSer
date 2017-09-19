var content = "";
for (var i = 0, max = 12; i < max; i++) {
  content += "<div class='box box" + (i + 1) + "'>";
  content += "<div class='card'>";
  content += "<div class='circle circle1'></div>"
  content += "<div class='circle circle2'></div>"
  content += "</div>";
  content += "</div>";
}

document.querySelector(".wrapper").innerHTML = content;
