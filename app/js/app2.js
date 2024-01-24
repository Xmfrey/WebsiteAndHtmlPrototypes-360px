const tabs = document.querySelectorAll(".tab");
const tabsСontent = document.querySelectorAll(".tab__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabsСontent.forEach((content) => {
      content.classList.remove("active");
    });

    tab.classList.add("active");
    tabsСontent[index].classList.add("active");
  });
});
