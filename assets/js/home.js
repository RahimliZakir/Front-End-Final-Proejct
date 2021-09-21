$(document).ready(function () {
  //! jQuery HTML Partial
  $("header").load("_header.html");
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
    $("nav").removeClass("pending");
  }, 5000);

  $(".what-are-people-saying-carousel").owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  let subscribeForm = $(".subscribe-form");

  $(subscribeForm).submit((e) => {
    e.preventDefault();
  });
});
