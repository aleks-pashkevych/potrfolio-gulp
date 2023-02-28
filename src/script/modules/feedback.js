const submitBtn = document.querySelector(".form__submit");

const messageData = {};
let messages = [];

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

const setMessage = () => {
  const messageSection = document.querySelector(".messages__wrapper");
  const singleMessage = `<h2 class="messages__headline">Messages: , time: ${messageData.time}</h2>`;
  messages.push(singleMessage);
  let data = "";
  messages.forEach((message) => {
    data += message;
  });
  messageSection.innerHTML = data;
  console.log(messages);
};
const formAction = () => {
  submitBtn.onclick = (e) => {
    e.preventDefault();
    getDataFromForm();
    putFormData();
    setMessage();
    return false;
  };
};

const putFormData = () => {
  console.log(messageData);
  const dataSection = document.createElement("div");

  const messagesSection = document.querySelector(".messages__wrapper");
  dataSection.classList.add("contacts__description");

  const timeElement = document.createElement("p");
  timeElement.classList.add("fedback_time");

  const textElement = document.createTextNode(messageData.user);
  dataSection.appendChild(textElement);
  messagesSection.appendChild(dataSection);
  // console.log(textElement.value);
  // messagesSection.appendChild(textElement);
};

export default formAction;
