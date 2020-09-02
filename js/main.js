
$(document).ready(function(){

  /* NAVBAR */
  $("a[href*='#']").click(function(){
      $("#navbarToggler").collapse("hide");
  });

  /* PAGESCROLL2ID */
  $("a[href*='#']").mPageScroll2id({
      offset: 5,
      highlightClass: 'active'
  });

  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
  });

});
