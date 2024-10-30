'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

let currentSlide = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let slideInterval;

function startSlideShow() {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 4000);
}

function changeSlide(direction) {
  clearInterval(slideInterval);
  
  currentSlide += direction;
  
  if (currentSlide >= totalSlides - 1) {
    currentSlide = 0;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(0)`;
    slider.offsetHeight;
    slider.style.transition = 'transform 0.5s ease-in-out';
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 2;
  }
  
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  startSlideShow();
}

startSlideShow();

slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', startSlideShow);


function toggleMoreAmenities() {
  const moreAmenities = document.querySelector('.more-amenities');
  moreAmenities.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the carousel with enhanced smooth settings
  const carousel = new bootstrap.Carousel(document.getElementById('galleryCarousel'), {
    interval: 3000,      // Longer interval for better viewing
    touch: true,         // Enable touch swiping
    pause: 'hover',      // Pause on hover
    wrap: true,          // Continuous loop
    keyboard: true       // Enable keyboard navigation
  });

  // Preload images for smoother transitions
  const preloadImages = () => {
    const images = document.querySelectorAll('#galleryCarousel img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src) {
        const image = new Image();
        image.src = src;
      }
    });
  };

  // Add smooth class changes
  const carouselElement = document.getElementById('galleryCarousel');
  carouselElement.addEventListener('slide.bs.carousel', function(e) {
    const activeItem = e.relatedTarget;
    const items = document.querySelectorAll('.carousel-item');
    
    items.forEach(item => {
      item.style.transition = 'transform 1.2s ease-in-out';
    });
  });

  // Initialize
  preloadImages();
});


const whatsappIcon = document.querySelector('.whatsapp-icon');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Adjust the threshold as needed
        backTopBtn.classList.add('active');
        whatsappIcon.style.bottom = '90px'; // Move WhatsApp icon above the back to top button
    } else {
        backTopBtn.classList.remove('active');
        whatsappIcon.style.bottom = '10px'; // Reset position to bottom
    }
});