let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let value = document.getElementById('value');

let counter = 0;

plus.addEventListener('click', function () {
  counter++;
  value.textContent = counter;
});

minus.addEventListener('click', function () {
  counter--;
  value.textContent = counter;
});
