let result;

const random = (max) => Math.floor(Math.random() * Math.floor(max));

const action = (num1, num2) => {
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

export const conditionText = 'Find the greatest common divisor of given numbers.';

export const checkCondition = () => result.toString();

export const getCondition = () => {
  const num1 = random(101);
  const num2 = random(101);

  if (num1 > num2) {
    result = action(num1, num2);
  } else {
    result = action(num2, num1);
  }

  return `${num1} ${num2}`;
};
