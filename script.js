"use strict";
const nav = document.querySelector(".nav");
const section1 = document.querySelector("#section--1");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const tabs = document.querySelectorAll(".operations_tab");
const tabsContainer = document.querySelector(".operations_tab_container");
const tabsContent = document.querySelectorAll(".operations_content");

//sticky
const coords = section1.getBoundingClientRect();
console.log(coords);
window.addEventListener("scroll", function () {
  if (window.scrollY > coords.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});

//know more button
btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  // Guard clause
  if (!clicked) return;

  tabs.forEach((t, i) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c, i) =>
    c.classList.remove("operations__content--active")
  );

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  const init = function () {
    goToSlide(0);
  };
  init();

  btnLeft.addEventListener("click", prevSlide);
  btnRight.addEventListener("click", nextSlide);
};

slider();
