const tabs = document.querySelectorAll(".tab");
const tabsСontent = document.querySelectorAll(".tab__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabAction(tab, index);
  });
  tab.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      tabAction(tab, index);
    }
  });
});

function tabAction(tab, index) {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  tabsСontent.forEach((content) => {
    content.classList.remove("active");
  });
  tab.classList.add("active");
  tabsСontent[index].classList.add("active");
}
