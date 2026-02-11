$(window).scroll(function(){
  if($(document).scrollTop() > 50) {
      $(".navbar").css("background-color","black")
     
  }  
  else{
      $(".navbar").css("background-color","transparent")
      
  }
});



const swiper = new Swiper(".swiper-slider", {
  // Optional parameters
  centeredSlides: false,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  autoplay: true,
  autoplaySpeed: 1000,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },


  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true
  },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});






var swiper_1 = new Swiper(".mySwiper", {
  slidesPerView: 5,
  autoplay: true,
  autoplaySpeed: 1000,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
});