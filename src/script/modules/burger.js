"use strict";

const burgerBtn = document.querySelector(".burger");
const burgerIcon = document.querySelector(".burger__open");
const burgerClose = document.querySelector(".burger__close");

let burgerStatus = "close";

const burgerMenu = document.querySelector(".header__menu");

const burgerAction = () => {
  const openBurgerMenu = () => {
    burgerIcon.classList.remove("active");
    burgerIcon.classList.add("hide");
    burgerClose.classList.remove("hide");
    burgerClose.classList.add("active");
    document.body.classList.add("lock");
    burgerMenu.classList.remove("burger__closing");
    burgerMenu.classList.add("burger__open");
    burgerStatus = "open";
  };
  const closeBurgerMenu = () => {
    burgerIcon.classList.remove("hide");
    burgerIcon.classList.add("active");
    burgerClose.classList.remove("active");
    burgerClose.classList.add("hide");
    document.body.classList.remove("lock");
    burgerMenu.classList.remove("burger__open");
    burgerMenu.classList.add("burger__closing");
    burgerStatus = "close";
  };

  burgerBtn.onclick = () => {
    burgerStatus == "close" ? openBurgerMenu() : closeBurgerMenu();
  };
  burgerMenu.onclick = () => {
    closeBurgerMenu();
  };
};

export default burgerAction;
