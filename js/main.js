(function ($) {
  "use strict";
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);

  // nice-select
  $(".nice-select").niceSelect();

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});
