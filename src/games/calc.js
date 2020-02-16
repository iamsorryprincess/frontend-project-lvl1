let result;

const random = (max) => Math.floor(Math.random() * Math.floor(max));

const action = (num1, num2) => {
  const rand = random(3);

  switch (rand) {
    case 0:
      result = num1 + num2;
      return `${num1} + ${num2}`;

    case 1:
      result = num1 - num2;
      return `${num1} - ${num2}`;

    case 2:
      result = num1 * num2;
      return `${num1} * ${num2}`;

    default:
      break;
  }

  return null;
};

export const conditionText = 'What is the result of the expression?';

export const checkCondition = () => result.toString();

export const getCondition = () => {
  const num1 = random(101);
  const num2 = random(101);
  return action(num1, num2);
};
