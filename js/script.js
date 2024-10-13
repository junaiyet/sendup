$(document).ready(function () {
  $("#open-navbar").click(function () {
    $(".dasboard-navigation").addClass("navigation-open");
  });
  $("#close-navbar").click(function () {
    $(".dasboard-navigation").removeClass("navigation-open");
  });
});
