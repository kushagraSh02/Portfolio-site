/* ================ Typing animation==============*/
"use strict";
// const typed = new typed(".typing", {
//   strings: ["", "Web Designer", "Web Developer", "Graphic Designer"],
//   typeSpeed: 100,
//   BackSpeed: 60,
//   loop: true,
// });

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSections = document.querySelectorAll(".section"),
  totalSection = allSections.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < navList.length; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerHeight < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

const addBackSection = function (index) {
  allSections[index].classList.add("back-section");
};

const removeBackSection = function () {
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.remove("back-section");
  }
};

const showSection = function (element) {
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
};

const updateNav = function (element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
};

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");

  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", function () {
  asideSectionTogglerBtn();
});

const asideSectionTogglerBtn = function () {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.toggle("open");
  }
};
