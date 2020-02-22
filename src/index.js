import readlineSync from 'readline-sync';

const greetingsText = 'Welcome to the Brain Games!';
const questionNameText = 'May I have your name? ';
const questionNumText = 'Question: ';
const answerText = 'Your answer: ';
const correctAnswer = 'Correct!';
const attemptsCount = 3;

export const random = (max) => Math.floor(Math.random() * Math.floor(max));

export const play = (description, conditionCallback) => {
  console.log(greetingsText);
  const userName = readlineSync.question(questionNameText);
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 1; i <= attemptsCount; i++) {
    const gameResult = conditionCallback();
    console.log(`${questionNumText}${gameResult.condition}`);
    const answer = readlineSync.question(answerText);
    const { result } = gameResult;
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
