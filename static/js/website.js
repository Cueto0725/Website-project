document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.main-header');
  const navLinks = document.querySelectorAll('.main-nav ul li a');
  const logo = document.querySelector('.client-logo');

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) { // Scrolled down past a threshold
      header.classList.add('scrolled');
      navLinks.forEach(link => {
        link.style.color = 'black';
      });
      if (logo) {
        logo.style.filter = 'invert(0%)';
      }
    } else { // At the very top
      header.classList.remove('scrolled');
      navLinks.forEach(link => {
        link.style.color = 'var(--font-main-color)';
      });
      if (logo) {
        logo.style.filter = 'invert(100%)';
      }
    }
  });
});