import readlineSync from 'readline-sync';

const questionText = 'May I have your name? ';

const askName = () => {
  const userName = readlineSync.question(questionText);
  console.log(`Hello, ${userName}!`);
};

export default askName;
