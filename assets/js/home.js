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

  $(".our-collection-slider").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 10,
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

  let ourCollectionLeftBtn = $(".our-collection-left-btn");
  let ourCollectionRightBtn = $(".our-collection-right-btn");

  let ourCollectionOwlLeftBtn = $(".our-collection-main .owl-prev");
  let ourCollectionOwlRightBtn = $(".our-collection-main .owl-next");

  $(ourCollectionLeftBtn).on("click", () => {
    $(ourCollectionOwlLeftBtn).trigger("click");
  });

  $(ourCollectionRightBtn).on("click", function () {
    $(ourCollectionOwlRightBtn).click();
  });

  $(".what-are-people-saying-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
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
