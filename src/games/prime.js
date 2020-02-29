import play from '../index.js';
import random from '../utils.js';

const positiveAnswer = 'yes';
const negativeAnswer = 'no';
const description = '"yes" if given number is prime. Otherwise answer "no".';
const minRange = 0;
const maxRange = 1001;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getCondition = () => {
  const number = random(minRange, maxRange);
  return { condition: number, result: isPrime(number) ? positiveAnswer : negativeAnswer };
};

const start = () => play(description, getCondition);

export default start;
