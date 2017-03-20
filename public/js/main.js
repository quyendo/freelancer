$(document).on('click', '.btn-switch button.btn', function(e){
  if($(e.target).hasClass('disabled')) return e.preventDefault();
  $('.btn-switch button.btn').toggleClass('disabled');
  $('.btn-switch button.btn').toggleClass('active');
  $('.editable-container-flip').toggleClass('hover');
});


$(document).on('click', '#colorMetabox li', function(e){
    var choosedColor = $(e.target).css('background-color');
    $('.editable-container-ghost img').css('background', choosedColor);
});
