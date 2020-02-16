import readlineSync from 'readline-sync';

const greetingsText = 'Welcome to the Brain Games!';
const questionNameText = 'May I have your name? ';
const questionNumText = 'Question: ';
const answerText = 'Your answer: ';
const correctAnswer = 'Correct!';
const attemptsCount = 3;

export const showGreetings = () => {
  console.log(greetingsText);
};

export const askName = () => {
  const userName = readlineSync.question(questionNameText);
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const play = (game, userName) => {
  console.log(game.conditionText);

  for (let i = 1; i <= attemptsCount; i++) {
    console.log(`${questionNumText}${game.getCondition()}`);
    const answer = readlineSync.question(answerText);
    const result = game.checkCondition();
    const isTrue = answer === result;

    if (isTrue) {
      console.log(correctAnswer);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
