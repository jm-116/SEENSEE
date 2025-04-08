$(document).ready(function () {

  var swiper = new Swiper(".main_slide", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });
  // section_1 end

  var swiper = new Swiper(".performance_slide", {
    slidesPerView: 1.5,  //초기 모바일 설정값
    spaceBetween: 20,
    pagination: {
      el: ".swiper-scrollbar",
      clickable: true,
    },
  });
  // section_3 end

  var swiper = new Swiper(".event_slide", {
    loop: true,
    slidesPerView: 1, //초기 모바일 설정값
    spaceBetween: 0,
    // watchOverflow : true,

    autoplay: {
      delete: 3000
    },
    pagination: {
      el: ".event_slide .swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        
      1201: { //브라우저가 1200보다 클 때
        slidesPerView: 2,
        spaceBetween: 60,
        centeredSlides: true,
        autoplay: false,
      }
    },
  })
  // section_4 end

  var swiper = new Swiper(".sns_youtube", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1501: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  // section_5 end

  var swiper = new Swiper(".sns_insta", {
    slidesPerView: "1.5",
    spaceBetween: 30,
    pagination: {
      el: ".sns_insta .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2.5
      }
    }
  });
  // section_6 end
});
//end