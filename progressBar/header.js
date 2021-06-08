$(function(){
  $('.main-nav-item').first().on('click', function() {
    $('.main-nav-modal').toggleClass('show');
    $(this).siblings().toggleClass('opacity-down');
    $('.item-dropdown').toggleClass('flip');
  });
});
