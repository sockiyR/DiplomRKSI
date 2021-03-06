import Swiper from 'swiper/bundle';
document.querySelectorAll(".bath-slider").forEach(block => {
    var mySwiper = new Swiper(block, {
        observer: true,
        observeParents: true,
        parallax:true,
        spaceBetween: 30,
    
        navigation: {
            nextEl: block.querySelector('.slider__bath-next'),
            prevEl: block.querySelector('.slider__bath-prev'),
        },
        
        breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }
    })
})

