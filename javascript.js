const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // this must match your CSS
  hamburger.classList.toggle('open');

  // Toggle hamburger ↔ X
  hamburger.innerHTML = hamburger.classList.contains('open') ? '&times;' : '&#9776;';
});
