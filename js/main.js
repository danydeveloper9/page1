/*Fixed Header on Scroll JS*/
window.onscroll = function() {myFunction()};
var nav = document.getElementById("navegation");
var sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
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

  /* VENOBOX */
  $('.venobox').venobox({
      overlayColor: 'rgba(33, 36, 61, 0.85)',
      arrowsColor: '#ff7c7c',
      closeBackground: '#ff7c7c',
      closeColor: '#111111',
      titleattr: 'title',
      titleBackground: '#21243d',
      titlePosition: 'top',
      numeratio: true,
      numerationPosition: 'top',
      numerationBackground: '#21243d',
      spinner: 'cube-grid',
      infinigall: true,
      share: ['facebook', 'twitter'],
  });

});
