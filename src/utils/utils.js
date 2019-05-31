const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const rideGroup = ["Always", "Sometimes", "Never"];
const WEEKDAYS = 5;
const WEEKENDS = 2;
const ALLDAYS = daysOfWeek.length;

const randomWeekNumber = numbers => {
  const days = [...new Set(numbers)];
  const randomNumber = Math.floor(Math.random() * daysOfWeek.length);

  if (days.length === 3) {
    return days;
  }

  !days.includes(randomNumber) && days.push(randomNumber);

  return randomWeekNumber(days);
};

const getRandomDays = () => {
  const myArr = randomWeekNumber([]);
  return getDaysFromIndex(myArr);
};

const getRandomRide = () =>
  rideGroup[Math.floor(Math.random() * rideGroup.length)];

const getDaysFromIndex = arrIndex =>
  arrIndex !== undefined ? checkSelected(arrIndex.map(i => daysOfWeek[i])) : 0;

const randomGenerator = max => Math.floor(Math.random() * max);

const translateDays = days => {
  const weekDays = days
    .map((d, i) => d && daysOfWeek[i])
    .filter(element => element);
  return checkSelected(weekDays);
};

const checkSelected = allDays => {
  if (allDays.length === ALLDAYS) {
    return "Every day";
  } else {
    const weekends = ["Sat", "Sun"];

    const days =
      allDays.length > 0 ? allDays.filter(day => weekends.includes(day)) : 0;

    return days.length === WEEKENDS && allDays.length === WEEKENDS
      ? ["Weekends"]
      : allDays.length === WEEKDAYS && days.length === 0
      ? ["Week Days"]
      : allDays;
  }
};

export {
  daysOfWeek,
  rideGroup,
  getRandomDays,
  getRandomRide,
  randomGenerator,
  translateDays,
  randomWeekNumber,
  checkSelected,
  getDaysFromIndex
};
