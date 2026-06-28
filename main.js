// AOS initialization
// This makes elements animate when you scroll down the page
AOS.init({
  duration: 800,
  once: true,
});

// Glide.js carousel setup
// This creates the sliding image carousel in the neighbourhoods section
var carousel = new Glide("#myCarousel", {
  type: "carousel",
  perView: 3,
  gap: 20,
  autoplay: 4000,
  breakpoints: {
    1024: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
});

carousel.mount();

// Granim.js setup
// This creates a moving gradient animation behind the hero section
var granim = new Granim({
  element: "#granim-canvas",
  direction: "diagonal",
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ["#ff9966", "#ff5e62"],
        ["#00F260", "#0575E6"],
        ["#e1eec3", "#f05053"],
      ],
      transitionSpeed: 4000,
    },
  },
});

// Lightbox2 setup
// This makes images open full screen when you click on them
// imagePath points to CDN so the close and arrow buttons load correctly
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  imagePath: "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/images/",
});
