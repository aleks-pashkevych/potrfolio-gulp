const headerLinks = document.querySelectorAll(".header__menu-link");

const homePage = document.querySelector(".main");
const worksPage = document.querySelector(".page__works");
const contactsPage = document.querySelector(".page__contacts");

const showThePage = (page) => {
  if (page != homePage) {
    homePage.classList.add("hide");
  }
  if (page != worksPage) {
    worksPage.classList.add("hide");
  }
  if (page != contactsPage) {
    contactsPage.classList.add("hide");
  }
  page.classList.remove("hide");
};
const setContent = (contentHeadline) => {
  switch (contentHeadline) {
    case "Home":
      showThePage(homePage);
      break;
    case "Works":
      showThePage(worksPage);
      break;
    case "Contacts":
      showThePage(contactsPage);
      break;
    default:
      console.log("default", contentHeadline);
  }
};
const linkAction = () => {
  headerLinks.forEach((e) => {
    e.onclick = () => {
      setContent(e.innerText);
      return false;
    };
  });
};

export default linkAction;
