const mobileMenuOpenBtn = document.querySelector(".hamburger__menu");
const mobileMenuCloseBtn = document.querySelector(".hamburger__menu--close");
const mobileMenu = document.querySelector(".mobile__menu");
const overlay = document.querySelector(".overlay");

mobileMenuOpenBtn.addEventListener("click", function () {
  mobileMenuOpenBtn.style.display = "none";
  mobileMenuCloseBtn.style.display = "block";
  mobileMenu.style.display = "block";
  overlay.style.display = "block";
});

mobileMenuCloseBtn.addEventListener("click", function () {
  mobileMenuOpenBtn.style.display = "block";
  mobileMenuCloseBtn.style.display = "none";
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
});
