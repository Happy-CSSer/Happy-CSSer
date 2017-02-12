$(document).ready(function() {
  $('#parallax').parallax({
    invertX: true,
    invertY: true,
    scalarX: 10,
     frictionY: .5
  });
});

function showDetails() {
  $('#firstpage').addClass('hide');
  $('#secondpage').removeClass();
  $('#secondpage').delay(1000).addClass('bounceIn animated card');
}

function back() {
  $('#secondpage').addClass('hide');
  $('#firstpage').removeClass();
  $('#firstpage').delay(1000).addClass('bounceIn animated card');
}