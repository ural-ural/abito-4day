// Инициализировать Swiper 
// cod from https://swiperjs.com/get-started

// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true, //бесконечная прокрутка
  
//     // убрали пагинацию и навигацию
//     /*
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   */
//     //убрали линию прокрутки 
//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });


  // <!-- Initialize Swiper -->
  
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 6, //было - 4
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,

    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },

      thumbs: {
        swiper: swiper,
      },
    });

    const menuBtn = document.querySelector('.menu-button');
    const menu =document.querySelector('.navbar-panel');
    const menuCloseBtn =document.querySelector('.close-menu');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('is-open');
    });
    menuCloseBtn.addEventListener('click', ()=>{
      menu.classList.toggle('is-open');
    })