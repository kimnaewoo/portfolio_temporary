function toggleMenu() {
  console.log('이벤트~~');
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

const nav = document.querySelector('#desktop-nav');
const ham = document.querySelector('#hamburger-nav');

const navHeight = nav.getBoundingClientRect().height;
const hamHeight = ham.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  navHeight < scrollY ? nav.classList.add('fixed') : nav.classList.remove('fixed');
  hamHeight < scrollY ? ham.classList.add('fixed') : ham.classList.remove('fixed');

  if (scrollY > navHeight) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
  if (scrollY > hamHeight) {
    ham.classList.add('fixed');
  } else {
    ham.classList.remove('fixed');
  }
});
