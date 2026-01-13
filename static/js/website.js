document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // HEADER SCROLL & HIDE
  // =========================
  const header = document.querySelector(".main-header");
  const logo = document.querySelector(".client-logo");
  const hamburger = document.querySelector(".hamburger-menu");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      header.classList.add("scrolled");
      if (logo) logo.style.filter = "invert(0%)";
      if (hamburger) hamburger.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      if (logo) logo.style.filter = "invert(100%)";
      if (hamburger) hamburger.classList.remove("scrolled");
    }

    // Hide on scroll down, show on scroll up
    if (scrollTop > lastScrollTop) {
      header.classList.add("hide-header");
    } else {
      header.classList.remove("hide-header");
    }

    lastScrollTop = scrollTop > 0 ? scrollTop : 0;
  });

  // =========================
  // MAIN IMAGE + THUMBNAILS
  // =========================
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".thumb");

  let currentIndex = 0;
  const totalThumbs = thumbs.length;
  const intervalTime = 4000; // 4 seconds per slide

  // Function to set active image
  function setActiveImage(index) {
    const thumb = thumbs[index];
    const bgImage = getComputedStyle(thumb).backgroundImage;
    mainImage.style.backgroundImage = bgImage;

    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  }

  // Auto-slide function
  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalThumbs;
    setActiveImage(currentIndex);
    animateMap();
  }

  // Thumbnail click
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => {
      currentIndex = i;
      setActiveImage(i);
      animateMap();
    });
  });

  // Set initial image
  if (totalThumbs > 0) setActiveImage(0);

  // Start auto-sliding
  setInterval(autoSlide, intervalTime);

  // =========================
  // GOOGLE MAP
  // =========================
  const map = document.getElementById("googleMap");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10277.134911330933!2d-115.9578644!3d36.1842453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20!3m3!1m2!1s0x80c6398c318f750d%3A0x17457e4a371d3836!2s3190%20NV-160%20f%203190%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1715442220000!5m2!1sen!2sph";

  // Optional subtle map animation (scale zoom)
  function animateMap() {
    map.style.transition = "transform 1.5s ease-in-out";
    map.style.transform = "scale(1.02)";
    setTimeout(() => {
      map.style.transform = "scale(1)";
    }, 1500);
  }
});
