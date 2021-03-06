$('#navigation a').on('click', function(e) {
  e.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000);
});

$('#form').submit(function(e) {
  e.preventDefault();

  const data = {
    authToken: document.cookie,
    firstname: $("#firstname").val(),
    lastname: $("#lastname").val(),
    email: $("#email").val(),
    tel: ($("#tel").val()) ? $("#tel").val() : null,
    subject: $("#subject").val(),
    msg: $("#message").val()
  };

  $.ajax({
      url: "mailtime.php?post",
      type: 'POST',
      data
  })

  $("#firstname").val('');
  $("#lastname").val('');
  $("#email").val('');
  $("#tel").val('');
  $("#subject").val('');
  $("#message").val('');

  $("#d-none alert alert-info alert-dismissible").show();

  console.log("sent");
})

$('.toggler, .nav-content a:not(#dropdown-link)').on('click', function(){
  $('.toggler').toggleClass('change');
  $('.nav-content').slideToggle();
  $('#dropdown-menu').slideUp();
  $('.menu-overlay').toggle();
});

$('.nav-content .dropdown').on('click', function(){
  $('#dropdown-menu').slideToggle();
});

$('.menu-overlay').on('click', function(){
  $('.toggler').removeClass('change');
  $('.nav-content').slideUp();
  $('#dropdown-menu').slideUp();
  $('.menu-overlay').hide();
});

$("#contact input, #contact textarea").on('focusout', function(){

  var text_val = $(this).val();
  if (text_val === "") {
    $(this).removeClass('has-value');
  } else {
    $(this).addClass('has-value');
  }

});
