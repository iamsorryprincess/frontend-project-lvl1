import { play, random } from '../index.js';

const positive = 'yes';
const negative = 'no';
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCondition = () => {
  const number = random(1001);
  return { condition: number, result: number % 2 === 0 ? positive : negative };
};

const start = () => play(description, getCondition);

export default start;
