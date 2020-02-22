import { play, random } from '../index.js';

const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getCondition = () => {
  const num1 = random(101);
  const num2 = random(101);
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
