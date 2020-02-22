import { play, random } from '../index.js';

const positive = 'yes';
const negative = 'no';
const description = '"yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getCondition = () => {
  const number = random(1001);
  return { condition: number, result: isPrime(number) ? positive : negative };
};

const start = () => play(description, getCondition);

export default start;
