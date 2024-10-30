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

// Select all <p> elements that contain the word "Banana"
// $(".container p:contains('Banana')").css("color", "red");
// jQuery to filter paragraphs based on input
$("#search").on("keyup", function() {
  const searchText = $(this).val().toLowerCase();
  
  $(".container p").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(searchText) > -1);
  });
});

$("#select-item").on("click", function() {
  $(".area").toggleClass("wrapper");
});