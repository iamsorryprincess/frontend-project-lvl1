const positive = 'yes';
const negative = 'no';

const random = (max) => Math.floor(Math.random() * Math.floor(max));
let number;

const isPrime = (num) => {
  if (num === 1 || num <= 0) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export const conditionText = '"yes" if given number is prime. Otherwise answer "no".';

export const checkCondition = () => (isPrime(number) ? positive : negative);

export const getCondition = () => {
  number = random(1001);
  return number;
};
