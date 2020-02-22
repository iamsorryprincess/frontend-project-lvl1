import { play, random } from '../index.js';

const countProgression = 10;
const hidingSign = '..';
const description = 'What number is missing in the progression?';

const getCondition = () => {
  const begin = random(26);
  const progress = random(14) + 1;
  const index = random(10);
  const elements = [];
  let result;

  for (let i = 0; i < countProgression; i++) {
    const elem = begin + progress * i;
    if (i === index) {
      elements.push(hidingSign);
      result = elem;
    } else {
      elements.push(elem);
    }
  }

  return { condition: elements.join(' '), result: result.toString() };
};

const start = () => play(description, getCondition);

export default start;
