// =======BannerSlider
$('.banner-slider').slick({
  autoplay: false,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fa fa-angle-left left-arrow"></i>',
  nextArrow: '<i class="fa fa-angle-right right-arrow"></i>',

  responsive: [{
      breakpoint: 993,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});
// =======BannerSlider



// =======RevSlider
var rev = $('.rev_slider');
rev.on('init', function (event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev2.addClass('slick-sprev2');
  next2.addClass('slick-snext2');
  cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  slick.$prev.prev().removeClass('slick-sprev2');
  slick.$next.next().removeClass('slick-snext2');
  next = cur.next(),
    prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
  autoplay: false,
  infinite: true,
  speed: 500,
  arrows: false,
  dots: true,
  focusOnSelect: true,
  prevArrow: '<button> prev</button>',
  nextArrow: '<button> next</button>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  customPaging: function (slider, i) {
    return '';
  },
  /*infinite: false,*/
});
// =======RevSlider



// =======CounterUP
$('.count').counterUp({
  delay: 10,
  time: 1000
});
// =======CounterUP


// =======CoursesSlider
$('.course-slider').slick({
  autoplay: false,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa fa-angle-left left-arrows"></i>',
  nextArrow: '<i class="fa fa-angle-right right-arrows"></i>',


  responsive: [{
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


});
// =======CoursesSlider



// =======Testimonial
var rev = $('.testi-img-slider');
rev.on('init', function (event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev2.addClass('slick-sprev2');
  next2.addClass('slick-snext2');
  cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  slick.$prev.prev().removeClass('slick-sprev2');
  slick.$next.next().removeClass('slick-snext2');
  next = cur.next(),
    prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
  asNavFor: '.testi-text-slider',
  autoplay: false,
  infinite: true,
  speed: 500,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  prevArrow: '<i class="fa fa-angle-left left-arrow"></i>',
  nextArrow: '<i class="fa fa-angle-right right-arrow"></i>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,

  responsive: [{
      breakpoint: 993,
      settings: {
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: false,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],

  customPaging: function (slider, i) {
    return '';
  },
  /*infinite: false,*/
});


// =======


$('.testi-text-slider').slick({
  autoplay: false,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  asNavFor: '.testi-img-slider',
  vertical: false,
});
// =======Testimonial


// =======footer-slider

$('.footer-slider').slick({
  slidesToShow: 6,
  swipeToSlide: true,
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: "30px",
  focusOnSelect: true,
});










// =======footer-slider