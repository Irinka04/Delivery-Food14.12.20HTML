const cardButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

/*cardButton.addEventListener('click', function (event) {
  modal.classList.add("is-open");

});
close.addEventListener('click', function (event) {
  modal.classList.remove("is-open");

});*/
// Функция по клику записана по другому
cardButton.addEventListener('click', toggleModul);
close.addEventListener('click', toggleModul);

function toggleModul() {
  modal.classList.toggle("is-open");
}
new WOW().init();