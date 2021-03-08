import Swiper from 'swiper/bundle';
document.querySelectorAll(".swiper-container").forEach(block => {
    var mySwiper = new Swiper(block, {
        observer: true,
        observeParents: true,
        parallax:true,
        spaceBetween: 30,
    
        navigation: {
            nextEl: block.querySelector('.swiper-button-next'),
            prevEl: block.querySelector('.swiper-button-prev'),
        },
        
        breakpoints: {
            300: {
              slidesPerView: 2,
              // spaceBetween: 20   
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }
    })
})

