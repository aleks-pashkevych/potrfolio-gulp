import timeActions from "./time-actions.js";

const changePageText = () => {
  const aboutHeadline = document.querySelector(".about__headline");

  aboutHeadline.textContent = `${timeActions()}, I'm Alex, Web Developer.`;
};

export default changePageText;
