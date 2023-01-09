window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#open_pop_up").addEventListener("click", function () {
    document.querySelector("#pop_up").classList.toggle("active");
  });
});

window.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#close_pop_up")
    .addEventListener("click", function () {
      document.querySelector("#pop_up").classList.toggle("active");
    });
});

window.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#close-pop_up_x")
    .addEventListener("click", function () {
      document.querySelector("#pop_up").classList.toggle("active");
    });
});
