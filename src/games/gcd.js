import { play, random } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  const q = Math.floor(num1 / num2);
  const r = num1 - num2 * q;

  if (r === 0) {
    return num2;
  }

  let res = 1;
  const gcd = (dividend, divider) => {
    const q1 = Math.floor(dividend / divider);
    const r1 = dividend - divider * q1;
    const r2 = divider * q1;

    if (r2 === dividend) {
      res = divider;
      return;
    }

    gcd(divider, r1);
  };

  gcd(num2, r);
  return res;
};

const getCondition = () => {
  const num1 = random(101);
  const num2 = random(101);
  let result;
  if (num1 > num2) {
    result = findGcd(num1, num2);
  } else {
    result = findGcd(num2, num1);
  }

  return { condition: `${num1} ${num2}`, result: result.toString() };
};

const start = () => play(description, getCondition);

export default start;
