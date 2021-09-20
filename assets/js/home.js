$(document).ready(function () {
  //! jQuery HTML Partial
  $("header").load("_header.html");

  $("#brand-select").niceSelect();
  $("#model-select").niceSelect();

  let searchingForm = $(".searching-form");

  $(searchingForm).submit((e) => {
    e.preventDefault();
  });
});
