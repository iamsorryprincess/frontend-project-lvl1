import play from '../index.js';
import random from '../utils.js';

const prlogressionLength = 10;
const minStartRange = 0;
const minStepRange = 0;
const maxStartRange = 26;
const maxStepRange = 14;
const hidingSign = '..';
const description = 'What number is missing in the progression?';

const getCondition = () => {
  const begin = random(minStartRange, maxStartRange);
  const step = random(minStepRange, maxStepRange) + 1;
  const hiddenElemIndex = random(0, prlogressionLength);
  const result = begin + step * hiddenElemIndex;
  const progression = [];

  for (let i = 0; i < prlogressionLength; i += 1) {
    const elem = begin + step * i;
    if (i === hiddenElemIndex) {
      progression.push(hidingSign);
    } else {
      progression.push(elem);
    }
  }

  return { condition: progression.join(' '), result: result.toString() };
};

const start = () => play(description, getCondition);

export default start;
