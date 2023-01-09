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
