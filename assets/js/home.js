$(document).ready(function () {
  //! jQuery HTML Partial
  $("header").load("_header.html");

  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > 0) {
      $("nav").css("background-color", "#000000").css("transition", "0.5s");
    } else {
      $("nav").css("background-color", "transparent").css("transition", "0.5s");
    }
  });

  $("#brand-select").niceSelect();
  $("#model-select").niceSelect();

  let searchingForm = $(".searching-form");

  $(searchingForm).submit((e) => {
    e.preventDefault();
  });
});
