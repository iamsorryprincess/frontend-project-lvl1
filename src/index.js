import readlineSync from 'readline-sync';

const questionText = 'May I have your name? ';

export const askName = () => {
    const userName = readlineSync.question(questionText);
    console.log(`Hello, ${userName}!`);
}
