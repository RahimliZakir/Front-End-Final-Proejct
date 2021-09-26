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

  //* Loan Calculator
  let carPrice = $("#loan-calculator-price-input");
  let carRate = $("#loan-calculator-interest-input");
  let carPeriode = $("#loan-calculator-periode-input");
  let carPayment = $("#loan-calculator-payment-input");

  let priceAlert = $(".price-alert");
  let rateAlert = $(".interest-alert");
  let periodeAlert = $(".periode-alert");
  let paymentAlert = $(".payment-alert");

  let priceIcon = $("<i/>", {
    class: "far fa-trash-alt",
    style: "float: right; cursor: pointer;",
  });

  let rateIcon = $("<i/>", {
    class: "far fa-trash-alt",
    style: "float: right; cursor: pointer;",
  });

  let periodeIcon = $("<i/>", {
    class: "far fa-trash-alt",
    style: "float: right; cursor: pointer;",
  });

  let paymentIcon = $("<i/>", {
    class: "far fa-trash-alt",
    style: "float: right; cursor: pointer;",
  });

  let carBtn = $(".loan-calculator-btn");

  $(priceAlert).on("click", function (e) {
    if (e.target.tagName.toLowerCase() == "i") {
      $(priceIcon).parent().removeClass("active");
    }
  });

  $(rateAlert).on("click", function (e) {
    if (e.target.tagName.toLowerCase() == "i") {
      $(rateIcon).parent().removeClass("active");
    }
  });

  $(periodeAlert).on("click", function (e) {
    if (e.target.tagName.toLowerCase() == "i") {
      $(periodeIcon).parent().removeClass("active");
    }
  });

  $(paymentAlert).on("click", function (e) {
    if (e.target.tagName.toLowerCase() == "i") {
      $(paymentIcon).parent().removeClass("active");
    }
  });

  $(carBtn).on("click", function (e) {
    e.preventDefault();

    if ($(carPrice).val() == "") {
      $(priceAlert).addClass("active");
      $(priceAlert).text("Maşının qiymətini daxil edin!");
      $(priceAlert).append(priceIcon);
    }

    if ($(carRate).val() == "") {
      $(rateAlert).addClass("active");
      $(rateAlert).text("Faiz dərəcəsini daxil edin!");
      $(rateAlert).append(rateIcon);
    }

    if ($(carPeriode).val() == "") {
      $(periodeAlert).addClass("active");
      $(periodeAlert).text("Ayı daxil edin!");
      $(periodeAlert).append(periodeIcon);
    }

    if ($(carPayment).val() == "") {
      $(paymentAlert).addClass("active");
      $(paymentAlert).text("İlkin ödənişi daxil edin!");
      $(paymentAlert).append(paymentIcon);
    }

    if (
      $(carPrice).val().length > 0 &&
      $(carRate).val().length > 0 &&
      $(carPeriode).val().length > 0 &&
      $(carPayment).val().length > 0
    ) {
      $(priceAlert).removeClass("active");
      $(rateAlert).removeClass("active");
      $(periodeAlert).removeClass("active");
      $(paymentAlert).removeClass("active");

      let parseCarPrice = parseFloat($(carPrice).val());
      let parseCarRate = parseFloat($(carRate).val());
      let parseCarPeriode = parseFloat($(carPeriode).val());
      let parseCarPayment = parseFloat($(carPayment).val());

      let remainingVal = parseCarPrice - parseCarPayment;

      let totalVal =
        remainingVal + (remainingVal * parseCarRate) / parseCarPeriode;

      let fixedTotalVal = parseFloat(totalVal.toFixed(2));

      let monthlyVal = totalVal / parseCarPeriode;

      let fixedMonthlyVal = parseFloat(monthlyVal.toFixed(2));

      let tbody = $("tbody");

      $(tbody).text("");

      $(carPrice).val("");
      $(carRate).val("");
      $(carPeriode).val("");
      $(carPayment).val("");

      for (let i = 0; i < parseCarPeriode; i++) {
        let tdTr = $("<tr></tr>");

        let remainingCredit = (fixedTotalVal -= fixedMonthlyVal);
        let parsedRemainingCredit = parseFloat(remainingCredit.toFixed(2));

        let tds = `
      <td>Ricat Qardashim</td>
      <td>${fixedMonthlyVal}</td>
      <td>${parsedRemainingCredit}</td>
      `;

        $(tdTr).append(tds);

        $(tbody).append(tdTr);
      }
    }
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
