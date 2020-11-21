const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
//   effect: "cube",
  loop: true,
  autoplay: {
   delay: 3000,
  },
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})