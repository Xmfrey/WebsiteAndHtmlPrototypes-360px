const crosses = document.querySelectorAll(".shipping__item-cross");
const spoilers = document.querySelectorAll(".shipping__item");
const colorsPagination = document.querySelectorAll(
  ".colors-select__colors-item"
);
const sliderItems = document.querySelectorAll(".slider-item");
const sliders = [];
sliderItems.forEach((item) => {
  sliders.push(item.querySelector(".swiper"));
});

sliders.forEach((s, i) => {
  let itemPagination = s.querySelectorAll(
    ".slider-item__pagination-imageWrapper"
  );
  new Swiper(`.slider-item__mySwiper-${i + 1}`, {
    speed: 500,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      el: s.querySelector(".slider-item__pagination"),
      bulletClass: "slider-item__pagination-imageWrapper",
      bulletActiveClass: "slider-item__pagination--active",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          itemPagination[index].innerHTML +
          "</span>"
        );
      },
    },
    navigation: {
      nextEl: s.querySelector(".slider__arrow-right"),
      prevEl: s.querySelector(".slider__arrow-left"),
    },
  });
});

const mainSwiper = new Swiper(".slider__mySwiper", {
  allowTouchMove: false,
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".colors-select__colors-items",
    bulletClass: "colors-select__colors-item",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        colorsPagination[index].innerHTML +
        "</span>"
      );
    },
  },
});

spoilers.forEach((item) => {
  if (item.classList.contains("active")) {
    item.style.maxHeight = item.scrollHeight + "px";
  } else {
    item.style.maxHeight = 60 + "px";
  }
});

crosses.forEach((cross, index) => {
  cross.addEventListener("click", () => {
    cross.classList.toggle("active");
    if (spoilers[index].classList.contains("active")) {
      spoilers[index].classList.remove("active");
      spoilers[index].style.maxHeight = 60 + "px";
    } else {
      spoilers[index].classList.add("active");
      spoilers[index].style.maxHeight = spoilers[index].scrollHeight + "px";
    }
  });
});
