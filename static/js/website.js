document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.main-header');
  const logo = document.querySelector('.client-logo');

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      header.classList.add('scrolled');
      if (logo) {
        logo.style.filter = 'invert(0%)';
      }
    } else {
      header.classList.remove('scrolled');
      if (logo) {
        logo.style.filter = 'invert(100%)';
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navContainer = document.querySelector('.nav-container');

  if (hamburgerMenu && navContainer) {
    hamburgerMenu.addEventListener('click', () => {
      navContainer.classList.toggle('active');
      hamburgerMenu.classList.toggle('open'); // Optional: for hamburger menu animation
    });
  }
});