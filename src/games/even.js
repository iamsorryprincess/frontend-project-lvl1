const positive = 'yes';
const negative = 'no';

let number;

export const conditionText = 'Answer "yes" if the number is even, otherwise answer "no".';

export const checkCondition = () => (number % 2 === 0 ? positive : negative);

export const getCondition = () => {
  number = Math.floor(Math.random() * Math.floor(1001));
  return number;
};
