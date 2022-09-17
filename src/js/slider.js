import Swiper from 'swiper';
var swiper = new Swiper('.swiper', {
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
});
