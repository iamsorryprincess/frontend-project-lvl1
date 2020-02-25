import play from '../index.js';
import random from '../utils.js';

const positiveAnswer = 'yes';
const negativeAnswer = 'no';
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRange = 1001;

const getCondition = () => {
  const number = random(maxRange);
  return { condition: number, result: number % 2 === 0 ? positiveAnswer : negativeAnswer };
};

const start = () => play(description, getCondition);

export default start;
