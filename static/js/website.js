document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.main-header');
  const logo = document.querySelector('.client-logo');
  const hamburger = document.querySelector('.hamburger-menu'); // Get the hamburger menu

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      header.classList.add('scrolled');
      if (logo) {
        logo.style.filter = 'invert(0%)';
      }
      if (hamburger) {
        hamburger.classList.add('scrolled'); // Add class on scroll
      }
    } else {
      header.classList.remove('scrolled');
      if (logo) {
        logo.style.filter = 'invert(100%)';
      }
      if (hamburger) {
        hamburger.classList.remove('scrolled'); // Remove class on scroll
      }
    }
  }); 
});
