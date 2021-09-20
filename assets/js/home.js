$(document).ready(function () {
  //! jQuery HTML Partial
  $("header").load("_header.html");
  $(".loader").load("_loader.html");

  let staticScrollTop = $(window).scrollTop();

  if (staticScrollTop > 0) {
    $("nav").addClass("onscroll");
  } else {
    $("nav").removeClass("onscroll");
  }

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
    $(document.body).removeClass("loading");
    $(".loader").removeClass("active");
    $("nav").removeClass("pending");
  }, 5000);
});
