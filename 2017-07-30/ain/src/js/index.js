let cross = document.querySelectorAll('.feature.plus')[0];

let phone = document.querySelectorAll('.phone');

cross.addEventListener('click', function(e) {
  phone[0].classList.toggle('is-active');
});