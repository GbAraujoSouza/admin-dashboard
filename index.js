/* eslint-disable quotes */
const icon = document.querySelector(".search-icon");
const search = document.querySelector(".search-bar");
const clear = document.querySelector(".search-clear");
const searchInput = document.querySelector("#search");

icon.addEventListener("click", () => {
  search.classList.toggle("active");
  // clear 'x' button
  if (search.classList.contains("active")) {
    clear.style.display = "inline-block";
  } else {
    clear.style.display = "none";
  }
});

clear.addEventListener("click", () => {
  searchInput.value = "";
});
