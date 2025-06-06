const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // this must match your CSS
  hamburger.classList.toggle('open');

  // Toggle hamburger ↔ X
  hamburger.innerHTML = hamburger.classList.contains('open') ? '&times;' : '&#9776;';
});

const observers = document.querySelectorAll('.slide-in-left, .slide-in-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // stops watching after it appears
      }
    });
  }, {
    threshold: 0.1
  });

  observers.forEach(el => observer.observe(el));