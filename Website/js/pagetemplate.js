document.cookie = "cookieName=cookieValue; SameSite=Strict";

//buat ilangin header pas scrolling
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById('header').classList.remove('hide'); //pas scrolling ke atas
  } else {
    document.getElementById('header').classList.add('hide'); //pas scrolling ke bawah
  }

  prevScrollPos = currentScrollPos;
});

//buat smooth pas pencet button
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  const targetOffsetTop = targetSection.offsetTop;

  window.scrollTo({
    top: targetOffsetTop,
    behavior: 'smooth'
  });
}