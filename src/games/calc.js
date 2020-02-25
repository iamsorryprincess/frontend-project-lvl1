import play from '../index.js';
import random from '../utils.js';

const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const maxRange = 101;

const getCondition = () => {
  const num1 = random(maxRange);
  const num2 = random(maxRange);
  let result;

  const operation = operations[random(operations.length)];

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
      result = num1 * num2;
      break;

    default:
      break;
  }

  return { condition: `${num1} ${operation} ${num2}`, result: result.toString() };
};

const start = () => play(description, getCondition);

export default start;
