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

  let loanCard = $(".loan-calculator-card");
  let carBtn = $(".loan-calculator-btn");

  $(carBtn).on("click", function (e) {
    e.preventDefault();

    let parseCarPrice = parseInt($(carPrice).val());
    let parseCarRate = parseInt($(carRate).val());
    let parseCarPeriode = parseInt($(carPeriode).val());
    let parseCarPayment = parseInt($(carPayment).val());

    let remainingVal = parseCarPrice - parseCarPayment;

    let totalVal =
      remainingVal + (remainingVal * parseCarRate * parseCarPeriode) / 100;

    let fixedTotalVal = parseInt(totalVal.toFixed(2));

    let monthlyVal = totalVal / parseCarPeriode;

    let fixedMonthlyVal = parseInt(monthlyVal.toFixed(2));

    let table = $("<table></table>", {
      class: "table table-success table-hover",
    });

    let thead = $("<thead>");
    let thTr = $("<tr></tr>");

    let paymentTh = $("<th>Aylıq ödəniş: </th>");
    let remainingTh = $("<th>Qalan məbləğ: </th>");
    let dateTh = $("<th>Ödəniş tarixi: </th>");

    $(thTr).append(dateTh);
    $(thTr).append(paymentTh);
    $(thTr).append(remainingTh);

    $(thead).append(thTr);

    $(table).append(thead);

    $(loanCard).append(table);

    let tbody = $("<tbody/>");

    for (let i = 0; i < parseCarPeriode; i++) {
      let tdTr = $("<tr></tr>");

      let tds = `
      <td>salam</td>
      <td>${fixedMonthlyVal}<td>
      <td>${(fixedTotalVal -= fixedMonthlyVal)}</td>
      `;

      $(tdTr).append(tds);

      $(tbody).append(tdTr);

      $(table).append(tbody);

      $(loanCard).append(table);
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
