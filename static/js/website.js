document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.main-header');
  const logo = document.querySelector('.client-logo');
  const hamburger = document.querySelector('.hamburger-menu');

  let lastScrollTop = 0;
  let scrollTimeout;

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
      header.classList.add('scrolled');
      logo && (logo.style.filter = 'invert(0%)');
      hamburger && hamburger.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      logo && (logo.style.filter = 'invert(100%)');
      hamburger && hamburger.classList.remove('scrolled');
    }

    if (scrollTop > lastScrollTop) {
      header.classList.add('hide-header');
    } else {
      header.classList.remove('hide-header');
    }
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      header.classList.add('hide-header');
    }, 1500); 

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumb");

  // Get the background-image from the first thumb and set it as main image
  if (thumbnails.length > 0) {
    const bg = window.getComputedStyle(thumbnails[0]).backgroundImage;
    mainImage.style.backgroundImage = bg;
    thumbnails[0].classList.add("active");
  }

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const bg = window.getComputedStyle(thumb).backgroundImage;
      mainImage.style.backgroundImage = bg;

      thumbnails.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('mainImage');
  const thumbs = document.querySelectorAll('.thumb');

  // Default load the first image
  const defaultImage = getComputedStyle(thumbs[0]).backgroundImage;
  mainImage.style.backgroundImage = defaultImage;
  thumbs[0].classList.add('active');

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      // Remove active class from all thumbnails
      thumbs.forEach(t => t.classList.remove('active'));

      // Set new background for main image
      const bgImage = getComputedStyle(thumb).backgroundImage;
      mainImage.style.backgroundImage = bgImage;

      // Mark as active
      thumb.classList.add('active');
    });
  });
});
