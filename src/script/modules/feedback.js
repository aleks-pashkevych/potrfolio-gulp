const submitBtn = document.querySelector(".form__submit");
const binImg = document.querySelectorAll(".bin");
const binBtn = document.querySelectorAll(".messages__icon");
const messageData = {};
let messages = [];
let color = "black";
const getDataFromForm = () => {
  const userNameInput = document.querySelector("#FName");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#form-message");

  const currentTime = new Date();
  messageData.date = `${currentTime.getDate()}.${
    currentTime.getMonth() + 1
  }.${currentTime.getFullYear()}`;
  messageData.user = userNameInput.value;
  messageData.email = emailInput.value;
  messageData.message = messageInput.value;
  messageData.time = `${currentTime.getHours()} : ${currentTime.getMinutes()}`;
};

const removeDiv = () => {
  console.log("removeDiv");
  for (let i = 0; i < binBtn.length; i++) {
    // console.log(binBtn.length);
    binBtn[i].onclick = () => {
      console.log(`BTN: ${i}`);
      messages.splice(i, 1);
      putFormData();
      console.log(messages);
    };
  }
};

removeDiv();
// binBtn.onclick = (e) => {
//   for (let i = 0; i < binBtn.length; i++) {
//     if (binBtn[i] == e) {
//       console.log(binBtn[i]);
//     }
//   }
// };
const formAction = () => {
  removeDiv();
  submitBtn.onclick = (e) => {
    e.preventDefault();
    getDataFromForm();
    putFormData();
    removeDiv();

    return false;
  };
};

// const binMoveAction = () => {
//   binBtn.forEach((btn) => {
//     btn.addEventListener("mouseover", (e) => {
//       color = "red";
//       putFormData();
//     });
//     btn.addEventListener("mouseout", (e) => {
//       color = "black";
//       putFormData();
//     });
//   });
// };

const putFormData = () => {
  const messagesSection = document.querySelector(".messages__container");
  const theMessage = document.createElement("div");
  theMessage.innerHTML = `
  <div class="messages__wrapper">
  <div class="messages__text">
  <p class="messages__headtext">${messageData.user}: </p>
  <p class="messages__content">
    ${messageData.message}
  </p>
  <p class="messages__time">${messageData.time}, ${messageData.date}</p>
</div>
<div class="messages__icon">
  <img
    src="assets/images/bin-${color}.svg"
    alt="Del"
    width="40px"
    height="40px"
    class="bin"
  />
</div>
</div>
`;
  // console.log(theMessage);
  messages.push(theMessage);
  // console.log(messages);
  messages.forEach((mes) => {
    messagesSection.innerHTML += mes.innerHTML;
  });
  removeDiv();
  // console.log(messageData);
};

export default formAction;
