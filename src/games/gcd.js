import play from '../index.js';
import random from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const maxRange = 101;

const findGcd = (num1, num2) => {
  const startNum = num1 > num2 ? num1 : num2;
  const endNum = num1 < num2 ? num1 : num2;
  const q = Math.floor(startNum / endNum);
  const r = startNum - endNum * q;

  if (r === 0) {
    return endNum;
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

  gcd(endNum, r);
  return res;
};

const getCondition = () => {
  const num1 = random(maxRange);
  const num2 = random(maxRange);
  const result = findGcd(num1, num2);
  return { condition: `${num1} ${num2}`, result: result.toString() };
};

const start = () => play(description, getCondition);

export default start;
