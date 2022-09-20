// import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
  keyboard: {
    enabled: true,
    pageUpDown: true,
    onlyInViewport: true,
  },
});
