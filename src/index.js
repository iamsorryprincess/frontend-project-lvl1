import readlineSync from 'readline-sync';

const greetingsText = 'Welcome to the Brain Games!';
const questionNameText = 'May I have your name? ';
const evenStartText = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionNumText = 'Question: ';
const answerText = 'Your answer: ';
const correctAnswer = 'Correct!';

const attemptsCount = 3;

const showGreetings = () => {
  console.log(greetingsText);
};

const checkAnswer = (number, answer) => {
  const result = number % 2 === 0;

  switch (answer) {
    case 'yes':
      if (result) {
        return true;
      }
      return false;

    case 'no':
      if (!result) {
        return true;
      }
      return false;

    default:
      return false;
  }
};

const getAnswer = (answer, oppositeAnswer) => `"${answer}" is wrong answer ;(. Correct answer was "${oppositeAnswer}".`;

const evenGame = (userName) => {
  console.log(evenStartText);

  for (let i = 1; i <= attemptsCount; i++) {
    const number = Math.floor(Math.random() * Math.floor(1001));
    console.log(`${questionNumText}${number}`);
    const answer = readlineSync.question(answerText);

    if (checkAnswer(number, answer)) {
      console.log(correctAnswer);
      continue;
    } else {
      const result = answer === 'yes' ? getAnswer('yes', 'no') : getAnswer('no', 'yes');
      console.log(result);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

const askName = (isEven) => {
  const userName = readlineSync.question(questionNameText);
  console.log(`Hello, ${userName}!`);

  if (isEven) {
    evenGame(userName);
  }
};

export const standardScenario = () => {
  showGreetings();
  askName(false);
};

export const evenGameScenario = () => {
  showGreetings();
  askName(true);
};
