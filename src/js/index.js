import mobileNav from './modules/mobile-nav.js';
import loader from './modules/loader.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

mobileNav();
loader();
// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  parallax: true,
  speed: 1000,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.slider-controls__count',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
