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

  //* Contact Dealer Email Validation RegExp Pattern
  let emailPattern = new RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
  );

  //* Contact Dealer Validation
  let contactName = $(".contact-offer-name-group>input");
  let contactEmail = $(".contact-offer-email-group>input");
  let contactMessage = $(".contact-offer-message-group>textarea");

  let contactNameError = $(".contact-name-error");
  let contactEmailError = $(".contact-email-error");
  let contactMessageError = $(".contact-message-error");

  let contactForm = $(".contact-offer-card-form");

  $(contactForm).on("submit", function (e) {
    e.preventDefault();

    if ($(contactName).val() == "") {
      $(contactNameError).text("Ad hissəsi boş qoyula bilməz!");
      $(contactName).removeClass("is-valid");
      $(contactName).addClass("is-invalid");
    } else {
      $(contactNameError).text("");
      $(contactName).removeClass("is-invalid");
      $(contactName).addClass("is-valid");
    }

    if ($(contactEmail).val() == "") {
      $(contactEmailError).text("Email hissəsi boş qoyula bilməz!");
      $(contactEmail).removeClass("is-valid");
      $(contactEmail).addClass("is-invalid");
    } else if (!emailPattern.test($(contactEmail).val())) {
      $(contactEmailError).text("Daxil olunan email formatına uyğun deyil!");
      $(contactEmail).removeClass("is-valid");
      $(contactEmail).addClass("is-invalid");
    } else {
      $(contactEmailError).text("");
      $(contactNameError).text("");
      $(contactEmail).removeClass("is-invalid");
      $(contactEmail).addClass("is-valid");
    }

    if ($(contactMessage).val() == "") {
      $(contactMessageError).text("Mesaj hissəsi boş qoyula bilməz!");
      $(contactMessage).removeClass("is-valid");
      $(contactMessage).addClass("is-invalid");
    } else {
      $(contactMessageError).text("");
      $(contactMessage).removeClass("is-invalid");
      $(contactMessage).addClass("is-valid");
    }
  });
});
