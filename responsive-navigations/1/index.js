const openButton = document.querySelector('#menu-btn');
const exitButton = document.querySelector('#exit-btn');
const nav = document.querySelector('#nav');

openButton.addEventListener('click', () => {
  nav.classList.add('open-nav')
})
exitButton.addEventListener('click', () => {
  nav.classList.remove('open-nav')
})

