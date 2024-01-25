const crosses = document.querySelectorAll(".shipping__item-cross");
const spoilers = document.querySelectorAll(".shipping__item");
const colors = document.querySelectorAll(".colors-select__colors-item");

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
