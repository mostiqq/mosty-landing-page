const blackThemeBtn = document.querySelector('.header__theme__black');
const whiteThemeBtn = document.querySelector('.header__theme__white');
const headerTitle = document.querySelector('.header__title');

blackThemeBtn.addEventListener('click', function () {
  blackThemeBtn.classList.add('d-none')
  headerTitle.classList.remove('color-black')
  headerTitle.classList.add('color-white')
  document.body.classList.remove('bg-white')
  document.body.classList.add('bg-black')
  whiteThemeBtn.classList.remove('d-none')
})

whiteThemeBtn.addEventListener('click', function () {
  whiteThemeBtn.classList.add('d-none')
  headerTitle.classList.remove('color-white')
  headerTitle.classList.add('color-black')
  document.body.classList.remove('bg-black')
  document.body.classList.add('bg-white')
  blackThemeBtn.classList.remove('d-none')
})

