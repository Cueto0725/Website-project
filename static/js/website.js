document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.main-header');
  const logo = document.querySelector('.client-logo');
  const hamburger = document.querySelector('.hamburger-menu');

  let lastScrollTop = 0;
  let scrollTimeout;

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scrolled behavior when passing 50px
    if (scrollTop > 50) {
      header.classList.add('scrolled');
      logo && (logo.style.filter = 'invert(0%)');
      hamburger && hamburger.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      logo && (logo.style.filter = 'invert(100%)');
      hamburger && hamburger.classList.remove('scrolled');
    }

    // Detect scrolling direction (down or up)
    if (scrollTop > lastScrollTop) {
      // Scrolling down: hide the header
      header.classList.add('hide-header');
    } else {
      // Scrolling up: show the header
      header.classList.remove('hide-header');
    }

    // Clear any existing timeout for detecting stop
    clearTimeout(scrollTimeout);

    // Set a timeout to hide the header after the user stops scrolling for 500ms
    scrollTimeout = setTimeout(function () {
      header.classList.add('hide-header');
    }, 1500); // Adjust this time for how soon you want to hide the header after scroll stops

    // Update last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
