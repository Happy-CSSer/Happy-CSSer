"use strict";

var cameraLock = false;
var x = -30;
var y = 90;

var scence = document.querySelector(".scence");
var body = document.body;

body.onmousemove = function(e) {
    if (!cameraLock) return;

    var movementX = e.movementX;
    var movementY = e.movementY;

    x += movementY * 1 / 2;
    y += movementX * 1 / 2;

    scence.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
};

body.onmousedown = function() {
    cameraLock = true;
};
body.onmouseup = function() {
    cameraLock = false;
};