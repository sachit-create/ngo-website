// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// get elements (IDs/classes must match your HTML)
const hamburger = document.querySelector('.hamburger'); // your hamburger element
const menuOverlay = document.querySelector('.menu-overlay'); // overlay div
const closeBtn = document.querySelector('.menu-overlay .close-btn'); // X button

if (hamburger && menuOverlay && closeBtn) {
  // open
  hamburger.addEventListener('click', () => {
    menuOverlay.classList.add('open');
    // optional: prevent body scroll while open
    document.body.style.overflow = 'hidden';
  });

  // close by X
  closeBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });

  // close by clicking outside the UL (clicking on overlay background)
  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) { // clicked on the background itself
      menuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // close by pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// Auto slide every 4 seconds
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}, 8000);


