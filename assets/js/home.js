$(document).ready(function () {
  //! jQuery HTML Partial
  $("header").load("_header.html");
  $(".loader").load("_loader.html");

  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > 0) {
      $("nav").addClass("onscroll");
    } else {
      $("nav").removeClass("onscroll");
    }
  });

  $("#brand-select").niceSelect();
  $("#model-select").niceSelect();

  let searchingForm = $(".searching-form");

  $(searchingForm).submit((e) => {
    e.preventDefault();
  });

  setTimeout(() => {
    let svg = $("svg");
    $(document.body).removeClass("loading");
    $(".loader").removeClass("active");
    $("svg").css("display", "none");
    $("nav").removeClass("pending");
  }, 5000);
});
