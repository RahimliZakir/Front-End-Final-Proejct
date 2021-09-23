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

  //! Fetch API Side

  let carAPILink = "https://json-fake-api.herokuapp.com/cars";

  async function getCarDatas(url) {
    let fecthData = await fetch(url);
    let jsonFetchData = await fecthData.json();

    let fetchCards = document.querySelector(".fetch-cards");

    for (let data of jsonFetchData) {
      let fetchCard = document.createElement("div");
      fetchCard.className = "fetch-card";
      fetchCard.setAttribute("data-card-id", data.id);

      let cardBody = `<div class="row fetch-datas-col-row">
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 left-fetch-data">
        <div class="img-div">
          <img
            src="assets/api/${data.img_src}"
            alt="Fetch Product"
          />
        </div>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 right-fetch-data">
        <h6 class="right-fetch-car-name">${data.marka}</h6>
        <div class="fetch-model-new">
          <h5 class="right-fetch-car-model">${data.model}</h5>
          <p class="right-fetch-car-type">${data.new ? "(New)" : "(Used)"}</p>
        </div>
        <div class="fetch-car-details">
          <div class="fetch-engine">
            <h6>Engine</h6>
            <h6>${data.engine}</h6>
          </div>
          <div class="fetch-fuel">
            <h6>Type of fuel</h6>
            <h6>${data.fuel}</h6>
          </div>
          <div class="fetch-transmission">
            <h6>Transmission</h6>
            <h6>${data.transmission}</h6>
          </div>
        </div>
        <div class="fetch-price-and-details-btn">
          <h3 class="right-fetch-car-price">₼${data.price}</h3>
          <a class="right-fetch-car-details-btn" href="#"
            >Details</a
          >
        </div>
      </div>
    </div>`;

      fetchCard.innerHTML = cardBody;

      fetchCards.append(fetchCard);

      let fetchCardCount = document.querySelector(".fetch-card-count>span");
      fetchCardCount.textContent = jsonFetchData.length;
    }
  }

  getCarDatas(carAPILink);

  $(".sort-select").niceSelect();
});
