import play from '../index.js';
import random from '../utils.js';

const prlogressionLength = 10;
const maxStartRange = 26;
const maxStepRange = 14;
const hidingSign = '..';
const description = 'What number is missing in the progression?';

const getCondition = () => {
  const begin = random(maxStartRange);
  const step = random(maxStepRange) + 1;
  const hiddenElemIndex = random(prlogressionLength);
  const result = begin + step * hiddenElemIndex;
  const progressionElements = [];

  for (let i = 0; i < prlogressionLength; i += 1) {
    const elem = begin + step * i;
    if (i === hiddenElemIndex) {
      progressionElements.push(hidingSign);
    } else {
      progressionElements.push(elem);
    }
  }

  return { condition: progressionElements.join(' '), result: result.toString() };
};

const start = () => play(description, getCondition);

export default start;
