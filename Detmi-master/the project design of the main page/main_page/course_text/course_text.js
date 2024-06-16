document.querySelector('.menu__list-link').addEventListener('click', function() {
    var submenu = this.nextElementSibling;
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block'; // Показываем выпадающий список при клике
    } else {
        submenu.style.display = 'none'; // Скрываем выпадающий список при повторном клике
    }
});
const submenu = document.querySelector('.submenu');

document.addEventListener('mouseover', function(event) {
  if (!event.target.closest('.submenu') && submenu.style.display === 'block') {
    submenu.style.display = 'none';
  }
});