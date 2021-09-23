$(function () {
  //! jQuery HTML Partial
  $("nav.onscroll").load("_header.html");
  $(".loader").load("_loader.html");
  $("footer").load("_footer.html");
  //! jQuery HTML Partial

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
    setTimeout(() => {
      $(".loader").addClass("stop");
    }, 2000);
    $("nav").removeClass("pending");
  }, 5000);

  $(".make-select").niceSelect();
  $(".body-select").niceSelect();
  $(".model-select").niceSelect();
  $(".drive-select").niceSelect();
  $(".condition-select").niceSelect();
  $(".fuel-type-select").niceSelect();
  $(".transmission-select").niceSelect();
  $(".color-select").niceSelect();

  let homeInventoryForm = $(".home-inventory-form");

  $(homeInventoryForm).submit((e) => {
    e.preventDefault();
  });
});
