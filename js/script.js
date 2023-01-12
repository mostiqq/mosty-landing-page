const blackThemeBtn = document.querySelector('.header__theme__black');
const whiteThemeBtn = document.querySelector('.header__theme__white');
const headerTitle = document.querySelector('.header__title');
const mainTitle = document.querySelector('.main__title');
const mainItem = document.querySelectorAll('.main__item');

blackThemeBtn.addEventListener('click', function () {
  blackThemeBtn.classList.add('d-none')
  headerTitle.classList.remove('color-black')
  headerTitle.classList.add('color-white')
  document.body.classList.remove('bg-white')
  document.body.classList.add('bg-black')
  whiteThemeBtn.classList.remove('d-none')
  mainTitle.classList.remove('color-black')
  mainTitle.classList.add('color-white')
  mainItem.forEach(el => {
    el.classList.remove('fill-black')
    el.classList.add('fill-white')
  })
})

whiteThemeBtn.addEventListener('click', function () {
  whiteThemeBtn.classList.add('d-none')
  headerTitle.classList.remove('color-white')
  headerTitle.classList.add('color-black')
  document.body.classList.remove('bg-black')
  document.body.classList.add('bg-white')
  blackThemeBtn.classList.remove('d-none')
  mainTitle.classList.remove('color-white')
  mainTitle.classList.add('color-black')
  mainItem.forEach(el => {
    el.classList.remove('fill-white')
    el.classList.add('fill-black')
  })
})

