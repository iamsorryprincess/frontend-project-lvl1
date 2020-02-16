const countProgression = 10;
const hidingSign = '..';

const random = (max) => Math.floor(Math.random() * Math.floor(max));
let result;

export const conditionText = 'What number is missing in the progression?';

export const checkCondition = () => result.toString();

export const getCondition = () => {
  const start = random(26);
  const progress = random(14) + 1;
  const index = random(10);
  let number = start;
  let res = `${start}`;

  if (index === 0) {
    res = hidingSign;
    result = start;
  }

  for (let i = 1; i < countProgression; i++) {
    number += progress;

    if (i === index) {
      result = number;
      res += ` ${hidingSign}`;
    } else {
      res += ` ${number}`;
    }
  }

  return res;
};
