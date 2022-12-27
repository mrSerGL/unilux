$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3500,
    easing: "linear",
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchTrachHold: 5,
    touchMove: true,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false
  });
});
