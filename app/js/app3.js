const crosses = document.querySelectorAll(".shipping__item-cross");
const spoilers = document.querySelectorAll(".shipping__item");
const colors = document.querySelectorAll(".colors-select__colors-item");

crosses.forEach((cross, index) => {
  cross.addEventListener("click", () => {
    cross.classList.toggle("active");
    spoilers[index].classList.toggle("active");
  });
});

const swiper = new Swiper(".swiper", {
  speed: 400,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".slider__arrow-right",
    prevEl: ".slider__arrow-left",
  },
  pagination: {
    el: ".colors-select__colors-items",
    bulletClass: `colors-select__colors-item`,
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + colors[index].innerHTML + "</span>"
      );
    },
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
});
