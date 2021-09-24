$(document).ready(function () {
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

  setTimeout(() => {
    $(document.body).removeClass("loading");
    $(".loader").removeClass("active");
    setTimeout(() => {
      $(".loader").addClass("stop");
    }, 2000);
    $("nav").removeClass("pending");
  }, 5000);

  $(".details-left-popup-play-btn").magnificPopup({
    type: "iframe",
  });

  let specificationBtn = $(".details-left-specification-heading");
  let specificationCol = $(".details-left-specification-components-col");

  $(specificationBtn).on("click", function () {
    $(specificationCol).toggle(300);
  });

  let featureBtn = $(".details-left-feature-heading");
  let featureCol = $(".details-left-feature-components-col");

  $(featureBtn).on("click", function () {
    $(featureCol).toggle(300);
  });

  let contactOfferCardForm = $(".contact-offer-card-form");

  $(contactOfferCardForm).on("submit", (e) => {
    e.preventDefault();
  });
});
