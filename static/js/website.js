document.addEventListener('DOMContentLoaded', function() {
  const homeContainer = document.querySelector('.home-container');
  if (homeContainer) {
    setTimeout(function() {
      homeContainer.classList.add('normal-video');
    }, 3000); // 3000 milliseconds = 3 seconds
  }
});