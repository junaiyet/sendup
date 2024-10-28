$(document).ready(function () {
  $("#open-navbar").click(function () {
    $(".dasboard-navigation").addClass("navigation-open");
  });
  $("#close-navbar").click(function () {
    $(".dasboard-navigation").removeClass("navigation-open");
  });
});

$(document).ready(function() {
  $('#show-password').on('click', function() {
      let passwordField = $('#password');
      let fieldType = passwordField.attr('type') === 'password' ? 'text' : 'password';
      passwordField.attr('type', fieldType);
  });
});
