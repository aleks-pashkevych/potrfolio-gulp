"use strict";

const timeActions = () => {
  let partOfDay = "not Set";
  const currentTime = new Date();
  const presentHour = currentTime.getHours();
  console.log(
    `local time: ${currentTime.getHours()} : ${currentTime.getMinutes()}`
  );
  if (presentHour > 3 && presentHour < 12) {
    partOfDay = "morning";
  } else if (presentHour > 11 && presentHour < 17) {
    partOfDay = "day";
  } else if (presentHour > 16 && presentHour < 24) {
    partOfDay = "evening";
  } else if (presentHour == 24 || presentHour < 4) {
    partOfDay = "night";
  }
  const greeting = `Good ${partOfDay} `;

  return greeting;
};

export default timeActions;
