"use strict";

const burgerBtn = document.querySelector(".burger");
const burgerIcon = document.querySelector(".burger__open");
const burgerClose = document.querySelector(".burger__close");

let burgerStatus = "close";

const burgerAction = () => {
  const openBurgerMenu = () => {
    burgerIcon.classList.remove("active");
    burgerIcon.classList.add("hide");
    burgerClose.classList.remove("hide");
    burgerClose.classList.add("active");
    burgerStatus = "open";
  };
  const closeBurgerMenu = () => {
    burgerIcon.classList.remove("hide");
    burgerIcon.classList.add("active");
    burgerClose.classList.remove("active");
    burgerClose.classList.add("hide");
    burgerStatus = "close";
  };

  burgerBtn.onclick = () => {
    burgerStatus == "close" ? openBurgerMenu() : closeBurgerMenu();
  };
};

export default burgerAction;
